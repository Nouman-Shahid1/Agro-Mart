package routes

import (
	"fmt"
	"net/http"
	"net/smtp"

	"fyp.com/m/models"
	"github.com/gin-gonic/gin"
)

func create_about(context *gin.Context) {
	var about models.Seller_about
	err := context.ShouldBindJSON(&about)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Couldn't parse request data for seller desc"})
		return
	}
	err = about.Save()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldn't save seller desc", "error": err.Error()})
		return
	}
	context.JSON(http.StatusCreated, gin.H{"message": "Seller description added", "event": about})
}

type Contact struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Number  int64  `json:"number"`
	Message string `json:"message"`
}

func contactUs(context *gin.Context) {
	var contact Contact
	err := context.ShouldBindJSON(&contact)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Couldn't parse request data"})
		return
	}

	err = sendEmail(contact)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to send email", "error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Email sent successfully!"})
}

func sendEmail(contact Contact) error {
<<<<<<< HEAD
	// SMTP Server Configuration
	smtpHost := "smtp.mailersend.net"
	smtpPort := "587"
	senderEmail := ""
	senderPassword := ""
    adminEmail := "admin@test.com"
=======
	smtpHost := "localhost"
	smtpPort := "1025"
	recipientEmail := "admin@example.com"
>>>>>>> 5cbd2f48d615622fbc1d8952e3767ba1a6bdb691

	subject := fmt.Sprintf("New Contact Form Submission from %s", contact.Name)
	body := fmt.Sprintf(
		"Name: %s\nEmail: %s\nNumber: %d\nMessage: %s",
		contact.Name, contact.Email, contact.Number, contact.Message,
	)

	message := []byte("From: " + contact.Name + " <" + contact.Email + ">\r\n" +
		"To: " + recipientEmail + "\r\n" +
		"Subject: " + subject + "\r\n\r\n" +
		body)

	// Send the email
	err := smtp.SendMail(smtpHost+":"+smtpPort, nil, contact.Email, []string{recipientEmail}, message)
	return err
}
