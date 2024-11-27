package routes

import (
	"github.com/gin-gonic/gin"
)
func RegisterRoutes(server *gin.Engine) {
	server.GET("users", getUsers)
	server.GET("users/:id", getUser)
	server.POST("/signup", signUp)
	server.DELETE("/users/:id", deleteUser )
	server.PUT("users/:id", updateUser)
	server.POST("/users/about", create_about)
	server.POST("login", login )
	server.POST("product", createProduct)

}