package models

import (
	"fmt"
	"log"

	"example.com/chat/db"
)

type Message struct {
	ID         int64 `json:"id"`
	SenderID   int64
	RecieverID int64  `json:"recieverId" binding:"required"`
	Content    string `json:"content" binding:"required"`
	Time       int64  `json:"time"`
}

func (m *Message) CreateMessage() error {
	query := "INSERT INTO messages(senderid, recieverid, content, time) VALUES(?,?,?,?)"
	stmt, err := db.DB.Prepare(query)
	if err != nil {
		log.Printf("Error preparing while saving product query: %v\n", err)
	}

	defer stmt.Close()
	result, err := stmt.Exec(m.SenderID, m.RecieverID, m.Content, m.Time)

	if err != nil {
		log.Printf("Error executing save product query: %v\n", err)
	}
	id, err := result.LastInsertId()
	m.ID = id
	return err
}

func GetAllMessages(senderID, receiverID, limit, offset int) ([]Message, error) {
	query := `
		SELECT * FROM messages
		WHERE (senderid = ? AND recieverid = ?) OR (senderid = ? AND recieverid = ?)
		ORDER BY time DESC
		LIMIT ? OFFSET ?
	`
	rows, err := db.DB.Query(query, senderID, receiverID, receiverID, senderID, limit, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var messages []Message
	for rows.Next() {
		var msg Message
		if err := rows.Scan(&msg.ID, &msg.SenderID, &msg.RecieverID, &msg.Content, &msg.Time); err != nil {
			return nil, err
		}
		messages = append(messages, msg)
	}

	return messages, nil
}

func GetUserNamebyId(id int64) (string, error) {
	query := "SELECT username FROM users WHERE id = ?"
	row := db.DB.QueryRow(query, id)
	var user string
	err := row.Scan(&user)
	if err != nil {
		return "", fmt.Errorf("error while getting user with id %d: %w", id, err)
	}
	return user, nil
}


func BatchInsertMessages(messages []Message) error {
	if len(messages) == 0 {
		return nil
	}

	query := "INSERT INTO messages(senderid, recieverid, content, time) VALUES "
	values := []interface{}{}

	for _, msg := range messages {
		query += "(?, ?, ?, ?),"
		values = append(values, msg.SenderID, msg.RecieverID, msg.Content, msg.Time)
	}

	// Trim the trailing comma
	query = query[:len(query)-1]

	tx, err := db.DB.Begin()
	if err != nil {
		return err
	}

	stmt, err := tx.Prepare(query)
	if err != nil {
		tx.Rollback()
		return err
	}
	defer stmt.Close()

	_, err = stmt.Exec(values...)
	if err != nil {
		tx.Rollback()
		return err
	}

	return tx.Commit()
}

func GetAllUsers(userID int64) ([]User, error) {
	query := `
		SELECT DISTINCT u.id, u.username
		FROM users u
		JOIN messages m ON u.id = m.senderid
		WHERE m.recieverid = ?
	`

	rows, err := db.DB.Query(query, userID)
	if err != nil {
		return nil, fmt.Errorf("error fetching users: %w", err)
	}
	defer rows.Close()

	var users []User
	for rows.Next() {
		var user User
		if err := rows.Scan(&user.ID, &user.Username); err != nil {
			return nil, fmt.Errorf("error scanning user row: %w", err)
		}
		users = append(users, user)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating user rows: %w", err)
	}

	return users, nil
}

type User struct {
	ID       int
	Username string
}
