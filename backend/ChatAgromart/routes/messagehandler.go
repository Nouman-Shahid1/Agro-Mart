package routes

import (
	"encoding/json"
	"net/http"
	"strconv"

	"example.com/chat/models"
	"github.com/gin-gonic/gin"
)

func GetMessages(context *gin.Context) {
	receiverID := context.Query("receiverId")
	limit := context.DefaultQuery("limit", "20")
	offset := context.DefaultQuery("offset", "0")

	limitInt, err := strconv.Atoi(limit)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Invalid limit"})
		return
	}

	offsetInt, err := strconv.Atoi(offset)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Invalid offset"})
		return
	}

	receiverIDint, err := strconv.Atoi(receiverID)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Invalid receiver ID"})
		return
	}

	userId := context.GetInt64("userId")
	messages, err := models.GetAllMessages(int(userId), receiverIDint, limitInt, offsetInt)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Couldn't get messages", "details": err.Error()})
		return
	}

	var formattedMessages []map[string]interface{}
	for _, message := range messages {
		username, err := models.GetUserNamebyId(message.SenderID)
		if err != nil {
			context.JSON(http.StatusBadRequest, gin.H{"error": "Couldn't get sender username"})
			return
		}

		// Decode the Content field
		var decodedContent map[string]interface{}
		err = json.Unmarshal([]byte(message.Content), &decodedContent)
		if err != nil {
			// Fallback to raw content if decoding fails
			context.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to decode message content", "details": err.Error()})
			return
		}

		formattedMessages = append(formattedMessages, map[string]interface{}{
			"user":    username,
			"content": decodedContent["content"], // Extract only the 'content' field
		})
	}

	context.JSON(http.StatusOK, gin.H{"messages": formattedMessages})
}



func getUsers(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse user id for get"})
		return
	}
	users, err := models.GetAllUsers(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch user"})
		return
	}
	context.JSON(http.StatusOK, users)

}