package routes

import (
	"net/http"

	"fyp.com/m/models"
	"github.com/gin-gonic/gin"
)
func getOrders(context *gin.Context) {
	orders, err := models.GetAllOrders()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not fetch orders", "error": err.Error()})
		return
	}
	context.JSON(http.StatusOK, orders)
}

func saveOrder(context *gin.Context) {
	var order models.Order
	err := context.ShouldBindJSON(&order)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data"})
		return
	}
	err = order.Save()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not save order", "error": err.Error()})
		return
	}
	context.JSON(http.StatusCreated, gin.H{"message": "Order created", "order": order})
}

