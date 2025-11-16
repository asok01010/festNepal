-- Insert admin user only if it doesn't exist
INSERT INTO user (id, name, email, password)
SELECT 1, 'Admin', 'admin@example.com', 'hashedpassword'
WHERE NOT EXISTS (SELECT 1 FROM user WHERE id = 1);
