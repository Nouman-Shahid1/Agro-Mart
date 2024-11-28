package models

import (
	"log"

	"fyp.com/m/db"
)

type Product struct{
	ID int64 `json:"id"`
	Name string `json:"name"`
	Description string `json:"description"`
	ImagePath string `json:"imagepath"`
	UserID int64 `json:"userId"`
}



func (u *Product) Save() error {
	query := "INSERT INTO products(name, description, imagepath, user_id) VALUES(?,?,?,?)"
	stmt, err := db.DB.Prepare(query)
	if err != nil {
		log.Printf("Error preparing while saving seller_description query: %v\n", err)
	}

	defer stmt.Close()
	result, err := stmt.Exec(u.Name, u.Description, u.ImagePath, u.UserID)
	
	if err != nil {
		log.Printf("Error executing save product query: %v\n", err)
	}
	id, err := result.LastInsertId()
	u.ID = id
	return err
}