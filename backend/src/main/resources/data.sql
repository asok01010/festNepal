INSERT INTO user (name, email, password) 
SELECT 1, 'Ashok Timalsina', 'asok.tim010@gmail.com', 'Ashok@123'
WHERE NOT EXISTS (SELECT 1 FROM user WHERE id = 1);




