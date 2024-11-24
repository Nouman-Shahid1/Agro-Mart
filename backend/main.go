package main

import (
	"fyp.com/m/db"
	"fyp.com/m/routes"
	"github.com/gin-gonic/gin"
)

func main(){
	db.InitDB()
	db.CreateTable()
	
	server := gin.Default()
	routes.RegisterRoutes(server)
	server.Run(":8080")
}