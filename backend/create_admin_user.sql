-- Direct insert admin user (bypassing email verification)
INSERT INTO users (email, password, username, role) 
VALUES (
    'muhammadnoumansha140@gmail.com', 
    '$2a$14$ajq8Q7fbtFRQvXpdCYpOaOWWgp4VFQDMMG5/uZasvEAp2VO/2RvAa', -- This is "Nouman" hashed
    'Nouman', 
    'admin'
);