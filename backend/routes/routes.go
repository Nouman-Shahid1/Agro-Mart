package routes

import (
	"fyp.com/m/middleware"
	"github.com/gin-gonic/gin"
)
func RegisterRoutes(server *gin.Engine) {
	server.GET("users", getUsers)
	server.GET("products", getProducts)
	server.GET("users/:id", getUser)
	server.POST("/signup", signUp)
	server.DELETE("/users/:id", deleteUser )
	server.PUT("users/:id", updateUser)
	server.POST("/users/about", create_about)
	server.POST("login", login )
	

	authenticated := server.Group("/")
	authenticated.Use(middleware.Authenticate)
	authenticated.POST("/new-product", createProduct)
	authenticated.PUT("/update-product/:id", updateProduct)
	authenticated.DELETE("/delete-product/:id", deleteProduct)
	authenticated.GET("/products/:id", getProductsbyuserid)

}