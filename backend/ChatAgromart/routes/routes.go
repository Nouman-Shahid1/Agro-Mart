package routes

import (
	"example.com/chat/middleware"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(server *gin.Engine) {
	authenticated := server.Group("/message")
	authenticated.Use(middleware.Authenticate)
	authenticated.GET("messages", GetMessages)

}
