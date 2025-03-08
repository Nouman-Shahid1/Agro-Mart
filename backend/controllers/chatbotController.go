package controllers

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

type OllamaRequest struct {
	Model    string              `json:"model"`
	Messages []map[string]string `json:"messages"`
}

type OllamaResponse struct {
	Message struct {
		Role    string `json:"role"`
		Content string `json:"content"`
	} `json:"message"`
	Done bool `json:"done"`
}

func ChatbotHandler(c *gin.Context) {
	var userInput struct {
		Message string `json:"message"`
	}

	if err := c.ShouldBindJSON(&userInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	// ✅ Enhanced system message with Agro Mart's buyer/seller roles and sidebar options
	ollamaReq := OllamaRequest{
		Model: "llama3",
		Messages: []map[string]string{
			{
				"role": "system",
				"content": `You are an AI assistant for Agro Mart.
				Agro Mart is an online marketplace for agricultural products, offering a platform for buyers and sellers.

				🔹 **Website Features**:
				- **Home Page**: Overview of Agro Mart, featured products, and latest offers.
				- **About Us**: Learn about our mission and services.
				- **Contact Us**: Reach out via 📞 +92-3467562260 | ✉ info@agriculture.com | 🌍 www.agromart.com
				- **Login / Signup**: Users can register as buyers or sellers.

				🔹 **User Roles**:
				- **Buyers**: Customers looking to purchase agricultural products.
				- **Sellers**: Vendors listing and selling their products.

				🔹 **Buyer Dashboard Features**:
				- **Orders**: View and manage placed orders.
				- **Order Tracking**: Track shipment status.
				- **Purchase History**: View past transactions.
				- **Saved Addresses**: Manage delivery locations.
				- **Chats**: Communicate with sellers.
				- **Settings**: Update profile and preferences.

				🔹 **Seller Dashboard Features**:
				- **My Products**: Manage product listings.
				- **Orders**: View and fulfill customer orders.
				- **Earnings**: Track revenue and payments.
				- **Analytics**: View sales performance insights.
				- **Chats**: Connect with buyers.
				- **Settings**: Configure store and profile settings.

				Please provide responses strictly based on Agro Mart's offerings, user roles, and available website features.`,
			},
			{"role": "user", "content": userInput.Message},
		},
	}

	jsonData, err := json.Marshal(ollamaReq)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to encode request"})
		return
	}

	resp, err := http.Post("http://127.0.0.1:11434/api/chat", "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to connect to AI service"})
		return
	}
	defer resp.Body.Close()

	var responseText string
	decoder := json.NewDecoder(resp.Body)

	for {
		var ollamaResp OllamaResponse
		if err := decoder.Decode(&ollamaResp); err == io.EOF {
			break
		} else if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read AI response"})
			return
		}
		responseText += ollamaResp.Message.Content
	}

	c.JSON(http.StatusOK, gin.H{"reply": responseText})
}
