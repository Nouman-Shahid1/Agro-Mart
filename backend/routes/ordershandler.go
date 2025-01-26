package routes

import (
	"net/http"
	"strconv"

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


func getOrdersByBuyerid(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse order id for read"})
		return
	}
	orders, err := models.GetOrderByBuyerID(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch orders", "error": err.Error()})
		return
	}
	
	context.JSON(http.StatusOK, orders)
}

func getOrdersBySellerid(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse order id for read"})
		return
	}
	orders, err := models.GetOrderBySellerID(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch orders", "error": err.Error()})
		return
	}
	context.JSON(http.StatusOK, orders)
}

func getOrderByid(context *gin.Context){
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse order id for read"})
		return
	}
	order, err := models.GetOrderByID(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch orders", "error": err.Error()})
		return
	}
	product, err := models.GetProductByID(order.ProductID)
	if err != nil{
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch orders", "error": err.Error()})
		return
	}
	type Response struct {
		Order  *models.Order 
		Product *models.Product        
	}
	response := Response{
		Order:  order,
		Product: product,
	}

	context.JSON(http.StatusOK, response)
}

func UpdateOrderStatus(ctx *gin.Context) {
	orderIDParam := ctx.Param("id")
	orderID, err := strconv.ParseInt(orderIDParam, 10, 64)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "Invalid order ID", "error": err.Error()})
		return
	}
	var requestBody struct {
		OrderStatus string `json:"orderStatus"`
	}
	if err := ctx.ShouldBindJSON(&requestBody); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": "Invalid request body", "error": err.Error()})
		return
	}
	order, err := models.GetOrderByID(orderID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to fetch order", "error": err.Error()})
		return
	}
	order.OrderStatus = requestBody.OrderStatus
	if err := order.UpdateOrderStatus(); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to update order status", "error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Order status updated successfully", "order": order})
}
