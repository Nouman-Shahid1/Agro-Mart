package main

import (
	"log"
	"net/http"
	"strconv"
	"sync"
	"time"

	"example.com/chat/db"
	"example.com/chat/models"
	"example.com/chat/routes"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

// WebSocket Client Struct
type Client struct {
	conn       *websocket.Conn
	senderID   int64
	receiverID int64
	send       chan []byte
	//messageBuffer []models.Message 
}

var clients = make(map[*Client]bool)
var broadcast = make(chan *models.Message)
var mutex = &sync.Mutex{}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// ✅ CORS Middleware (Allows requests from localhost:3000)
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000") // Allow frontend requests
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true") // Needed for auth headers

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}

// ✅ WebSocket Connection Handler
func wsEndpoint(c *gin.Context) {
	senderID, err := strconv.ParseInt(c.Query("senderID"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid sender ID"})
		return
	}

	receiverID, err := strconv.ParseInt(c.Query("receiverID"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid receiver ID"})
		return
	}

	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Println("WebSocket upgrade failed:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not open WebSocket connection"})
		return
	}

	client := &Client{conn: ws, senderID: senderID, receiverID: receiverID, send: make(chan []byte)} //messageBuffer: []models.Message{},

	mutex.Lock()
	clients[client] = true
	mutex.Unlock()

	go handleMessages(client)
	go client.writeMessages()
}

// ✅ Handle Incoming Messages
func handleMessages(client *Client) {
	defer func() {
		mutex.Lock()
		delete(clients, client)
		mutex.Unlock()
		client.conn.Close()

		// if len(client.messageBuffer) > 0 {
		// 	err := models.BatchInsertMessages(client.messageBuffer)
		// 	if err != nil {
		// 		log.Printf("Error inserting batch messages: %v", err)
		// 	}
		// }
	}()

	for {
		_, msg, err := client.conn.ReadMessage()
		if err != nil {
			return
		}

		// Save message to database
		message := models.Message{
			SenderID:   client.senderID,
			RecieverID: client.receiverID,
			Content:    string(msg),
			Time:       time.Now().Unix(),
		}
		message.CreateMessage()
		// client.messageBuffer = append(client.messageBuffer, message)

		// Send message to the intended recipient
		broadcast <- &message
	}
}

// ✅ Send Messages to WebSocket Clients
func (c *Client) writeMessages() {
	for msg := range c.send {
		c.conn.WriteMessage(websocket.TextMessage, msg)
	}
}

// ✅ Broadcast Messages to the Intended Receiver
func handleBroadcast() {
	for {
		message := <-broadcast
		msgBytes := []byte(message.Content)

		mutex.Lock()
		for client := range clients {
			if (client.receiverID == message.RecieverID && client.senderID == message.SenderID) ||
				(client.receiverID == message.SenderID && client.senderID == message.RecieverID) {
				select {
				case client.send <- msgBytes:
				default:
					close(client.send)
					delete(clients, client)
				}
			}
		}
		mutex.Unlock()
	}
}

func main() {
	// ✅ Initialize the database
	db.InitDB()
	db.CreateTable()

	// ✅ Create a new Gin router
	router := gin.Default()
	router.Use(CORSMiddleware()) // Apply CORS middleware

	// ✅ Register WebSocket endpoint
	router.GET("/ws", wsEndpoint)

	// ✅ Register REST API routes
	routes.RegisterRoutes(router)

	// ✅ Debugging: List all registered routes
	router.GET("/debug/routes", func(c *gin.Context) {
		var routes []string
		for _, route := range router.Routes() {
			routes = append(routes, route.Method+" "+route.Path)
		}
		c.JSON(http.StatusOK, gin.H{"routes": routes})
	})

	// ✅ Start WebSocket broadcasting in a separate goroutine
	go handleBroadcast()

	// ✅ Start the chat service on port 8081
	log.Println("Chat Service running on http://localhost:8081")
	if err := router.Run(":8081"); err != nil {
		log.Fatal("Chat Service failed:", err)
	}
}
