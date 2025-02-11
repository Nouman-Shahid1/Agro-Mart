package routes

import (
	"net/http"
	"os"
	"strconv"
	"sync"

	"fyp.com/m/models"
	"fyp.com/m/utils"
	"github.com/gin-gonic/gin"
)

var verificationCodes = sync.Map{}
var UserInfo = sync.Map{}

func getUsers(context *gin.Context) {
	users, err := models.GetAllUsers()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch users", "error": err.Error()})
		return
	}
	context.JSON(http.StatusOK, users)
}

func signUp(context *gin.Context) {
	var user models.User
	err := context.ShouldBindJSON(&user)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Couldnt parse request data"})
		return
	}
	Email := os.Getenv("SMTP_USER")
	Password := os.Getenv("SMTP_PASS")
	verificationCode := utils.GenerateVerificationCode()

	verificationCodes.Store(user.Email, verificationCode)
	UserInfo.Store(user.Email, user)
	SendVerificationEmail(user.Email, verificationCode, Email, Password )
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to send verification email", "error": err.Error()})
		return
	}


	context.JSON(http.StatusOK, gin.H{"message": "Verification email sent"})
}

func verifyEmail(context *gin.Context) {
	var request struct {
		Email string `json:"email" binding:"required"`
		Code  string `json:"code" binding:"required"`
	}

	if err := context.ShouldBindJSON(&request); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Invalid request"})
		return
	}

	// Retrieve stored verification code
	storedCode, ok := verificationCodes.Load(request.Email)
	if !ok || storedCode != request.Code {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid verification code"})
		return
	}
	userData, exists := UserInfo.Load(request.Email)
	if !exists {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "User data not found"})
		return
	}

	// Type assert userData to User struct
	user, ok := userData.(models.User)
	if !ok {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to parse user data"})
		return
	}
	// Remove verification code after use
	verificationCodes.Delete(request.Email)
	UserInfo.Delete(request.Email)


	err := user.Save()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt save user", "error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{"message": "User verified and registered", "event": user})
}


func login(context *gin.Context) {
	var user models.User

	err := context.ShouldBindJSON(&user)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Couldnt parse login data"})
		return
	}
	err = user.ValidateCredential()
	if err != nil {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Couldnt authenticate user"})
		return
	}
	accesstoken, refreshtoken , err := utils.GenerateToken(user.Username, user.ID, user.Role)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt generate user token"})
	}

	context.JSON(http.StatusOK, gin.H{"message": "Login succesful", "accessToken": accesstoken, "refreshToken": refreshtoken})
}

func deleteUser(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse user id for delete"})
		return
	}
	err = models.Delete(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "COuldnt delete user"})
		return
	}
}

func updateUser(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt parse user id for update"})
		return
	}
	user, err := models.GetUserbyID(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt get user to update user data", "error": err.Error()})
		return
	}
	var payload struct {
		Role string `json:"role" binding:"required"`
	}
	err = context.ShouldBindJSON(&payload)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt bind update user data", "error": err.Error()})
		return
	}
	user.Role = payload.Role
	err = user.UpdateUser()

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt update user"})
		return
	}
	context.JSON(http.StatusOK, gin.H{"message": "Update succesfully"})
}

func getUser(context *gin.Context) {
	id, err := strconv.ParseInt(context.Param("id"), 10, 64)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt convert parse user id for get"})
		return
	}
	user, err := models.GetUserbyID(id)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Couldnt fetch user"})
		return
	}
	context.JSON(http.StatusOK, user)

}


func refreshToken(context *gin.Context) {
	var body struct {
		RefreshToken string `json:"refreshToken"`
	}

	if err := context.ShouldBindJSON(&body); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Invalid request"})
		return
	}

	userID, err := utils.VerifyRefreshToken(body.RefreshToken)
	if err != nil {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid or expired refresh token"})
		return
	}
	user, err := models.GetUserbyID(userID)
	if err != nil {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid user ID"})
		return
	}
	accessToken, refreshToken, err := utils.GenerateToken(user.Username, userID, user.Role)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not generate new tokens"})
		return
	}

	context.JSON(http.StatusOK, gin.H{
		"accessToken":  accessToken,
		"refreshToken": refreshToken,
	})
}

func logout(context *gin.Context) {
    // Clear the token from the client (done client-side, just confirming the action on the server)
    context.JSON(http.StatusOK, gin.H{"message": "Logout successful"})
}