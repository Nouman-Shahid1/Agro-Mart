package handler

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	gin.SetMode(gin.ReleaseMode)
	
	router := gin.New()
	
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"*"}
	router.Use(cors.New(config))

	// Basic route
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "AgroMart API is running on Vercel"})
	})
	
	router.ServeHTTP(w, r)
}