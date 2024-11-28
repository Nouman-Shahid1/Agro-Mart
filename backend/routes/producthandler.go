package routes

import (
	"fmt"
	"net/http"
	"strconv"
	"time"

	"fyp.com/m/models"
	"github.com/gin-gonic/gin"
)

func createProduct(context *gin.Context) {
	name := context.PostForm("name")
	description := context.PostForm("description")
	userId, err := strconv.ParseInt(context.PostForm("user_id"), 10, 64)
	if err != nil {
        context.JSON(http.StatusBadRequest, gin.H{"message": "Invalid user_id"})
        return
    }
	file, err := context.FormFile("image")
	if err != nil {
        context.JSON(http.StatusBadRequest, gin.H{"message": "Image upload failed"})
        return
    }
	randomFileName := fmt.Sprintf("%d_%s", time.Now().UnixNano(), file.Filename)
	filePath := fmt.Sprintf("static/images/%s", randomFileName)
	if err := context.SaveUploadedFile(file, filePath); err != nil {
        context.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to save image"})
        return
    }

	product := models.Product{
		Name: name,
		Description: description,
		ImagePath: filePath,
		UserID: userId,
	}

	err = product.Save()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt save product", "error": err.Error()})
		return
	}
	context.JSON(http.StatusCreated, gin.H{"message": "Product created successfully", "product": product})
}