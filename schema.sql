DROP DATABASE IF EXISTS kp;
CREATE DATABASE kp;
USE kp;

CREATE TABLE managers (
  id INT NOT NULL auto_increment,
  created_at TIMESTAMP DEFAULT NOW(),
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE accounts (
  id INT NOT NULL auto_increment,
  created_at TIMESTAMP DEFAULT NOW(),
  manager_id INT NOT NULL,
  stage VARCHAR(255) NOT NULL,
  employees INT,
  zipcode INT,
  PRIMARY KEY (id),
  FOREIGN KEY (manager_id) REFERENCES managers(id)
);

CREATE TABLE recommendations (
  id INT NOT NULL auto_increment,
  created_at TIMESTAMP DEFAULT NOW(),
  account_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);

INSERT INTO managers (name) VALUES
('Ginny'),
('Jonathan'),
('Ashley'),
('Sakura'),
('James');


INSERT INTO accounts (manager_id, stage, employees, zipcode) VALUES
(1, 'Familiarize', 75, 90812),
(2, 'Initiate', 800, 93413),
(3, 'Engage', 56, 34512),
(4, 'Familiarize', 89, 12345),
(5, 'Initiate', 124, 12345);
