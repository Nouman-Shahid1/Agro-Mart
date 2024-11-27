package routes

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"fyp.com/m/models"
)

func createProduct(context *gin.Context) {
	var product models.Product
	err := context.ShouldBindJSON(&product)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Couldnt parse request data"})
		return
	}
	err = product.Save()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt save user", "error": err.Error()})
		return
	}
	context.JSON(http.StatusCreated, gin.H{"message": "User created", "event": product})
}