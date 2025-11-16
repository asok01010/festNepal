-- Insert admin user only if it doesn't exist
INSERT INTO user (id, name, email, password)
SELECT 1, 'Ashok', 'asok.tim010@gmail.com', 'Ashok@123'
WHERE NOT EXISTS (SELECT 1 FROM user WHERE id = 1);
