package models

import (
	"log"

	"fyp.com/m/db"
)

type Order struct {
	ID              int64  `json:"id"`
	BuyerID         int64  `json:"buyerId"`
	SellerID        int64  `json:"sellerId"`
	ProductID       int64  `json:"productId"`
	Name            string `json:"name"`
	Email           string `json:"email"`
	ShippingAddress string `json:"shippingAddress"`
	Country         string `json:"country"`
	State           string `json:"state"`
	City            string `json:"city"`
	PostalCode      int64  `json:"postalCode"`
	PhoneNumber     int64  `json:"phoneNumber"`
	DeliveryOption  string `json:"deliveryOption"`
	CheckoutPrice   int64  `json:"checkoutPrice"`
	OrderStatus     string `json:"orderStatus"`
	PaymentMethod   string `json:"paymentMethod"`
}

func GetAllOrders() ([]Order, error) {
	query := "SELECT * FROM orders"
	rows, err := db.DB.Query(query)
	if err != nil {
		log.Printf("Error querying database: %v\n", err)
		return nil, err
	}
	defer rows.Close()
	var orders []Order
	for rows.Next() {
		var order Order
		err := rows.Scan(&order.ID, &order.BuyerID, &order.SellerID, &order.ProductID, &order.Name, &order.Email, &order.ShippingAddress, &order.Country, 
			&order.State, &order.City, &order.PostalCode, &order.PhoneNumber, &order.DeliveryOption, &order.CheckoutPrice, &order.OrderStatus, &order.PaymentMethod)

		if err != nil {
			log.Printf("Error scanning rows: %v\n", err)
			return nil, err
		}
		orders = append(orders, order)
	}
	return orders, nil
}

func (o *Order) Save() error {
	query := `INSERT INTO orders(
		buyer_id, seller_id, product_id, name, email, shipping_address, 
		country, state, city, postal_code, phone_number, delivery_option, 
		checkout_price, order_status, payment_method
	) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

	stmt, err := db.DB.Prepare(query)
	if err != nil {
		log.Printf("Error preparing save order query: %v\n", err)
		return err
	}
	defer stmt.Close()

	result, err := stmt.Exec(o.BuyerID, o.SellerID, o.ProductID, o.Name, o.Email, o.ShippingAddress, o.Country, o.State, o.City, o.PostalCode, 
		o.PhoneNumber, o.DeliveryOption, o.CheckoutPrice, o.OrderStatus, o.PaymentMethod)

	if err != nil {
		log.Printf("Error executing save order query: %v\n", err)
		return err
	}

	id, err := result.LastInsertId()
	if err != nil {
		log.Printf("Error retrieving last insert ID: %v\n", err)
		return err
	}
	o.ID = id
	return nil
}
