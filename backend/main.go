package main

import (
	"fyp.com/m/db"
	"fyp.com/m/routes"

	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found")
	}

	db.InitDB()
	db.CreateTable()

	server := gin.Default()
	server.Static("/static", "./static")

	server.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "http://localhost:3001"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	routes.RegisterRoutes(server)

	log.Println("Server running on port 8080...")
	server.Run(":8080")
}
