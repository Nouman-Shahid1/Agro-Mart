package routes

import (
	"fmt"
	"net/http"
	"net/smtp"
	"os"

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
	senderEmail := os.Getenv("SMTP_USER")
	senderPassword := os.Getenv("SMTP_PASS")

	err = sendEmail(contact, senderEmail, senderPassword)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to send email", "error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "Email sent successfully!"})
}

func sendEmail(contact Contact, email string, pass string) error {
	// SMTP Server Configuration
	smtpHost := "smtp.mailersend.net"
	smtpPort := "587"

    adminEmail := ""


	subject := fmt.Sprintf("New Contact Form Submission from %s", contact.Name)
	body := fmt.Sprintf(
		"Name: %s\nEmail: %s\nNumber: %d\nMessage: %s",
		contact.Name, contact.Email, contact.Number, contact.Message,
	)
	message := []byte("From: " + email + "\r\n" + 
	"Subject: " + subject + "\r\n\r\n" +
	body)

	auth := smtp.PlainAuth("", email, pass, smtpHost)
	// Send the emai
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, email, []string{adminEmail}, message)
	return err
}
