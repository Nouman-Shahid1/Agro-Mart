package utils

import (
	"crypto/rand"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

func HashPassword(pass string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(pass), 14)
	return string(bytes), err
}

func CheckPassword(pass, hashpass string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashpass), []byte(pass))
	return err == nil
}

func GenerateVerificationCode() string {
	b := make([]byte, 3)
	rand.Read(b)
	return fmt.Sprintf("%06d", (int(b[0])<<16|int(b[1])<<8|int(b[2]))%1000000)
}

