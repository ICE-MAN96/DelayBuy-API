CREATE DATABASE delaybuy;

USE delaybuy;

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    priority ENUM('low','medium','high') DEFAULT 'medium',
    status ENUM('cooling','bought','canceled') DEFAULT 'cooling',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
