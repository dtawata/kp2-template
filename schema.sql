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
  name VARCHAR(255) NOT NULL,
  manager_id INT NOT NULL,
  stage VARCHAR(255) NOT NULL,
  employees INT,
  zipcode INT,
  year INT,
  PRIMARY KEY (id),
  FOREIGN KEY (manager_id) REFERENCES managers(id)
);

CREATE TABLE recommendations (
  id INT NOT NULL auto_increment,
  created_at TIMESTAMP DEFAULT NOW(),
  account_id INT,
  prediction VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (account_id) REFERENCES accounts(id)
);

INSERT INTO managers (name) VALUES
('Ginny'),
('Jonathan'),
('Ashley'),
('Sakura'),
('James');

INSERT INTO accounts (name, manager_id, stage, employees, zipcode, year) VALUES
('AI Company', 1, 'Familiarize', 75, 90812, 2023),
('Tech Central', 2, 'Initiate', 800, 93413, 2022),
('Sports Insight', 3, 'Engage', 56, 34512, 2022),
('Company 213', 4, 'Familiarize', 89, 12345, 2021),
('Osaka', 5, 'Initiate', 124, 12345, 2020),
('Paris', 1, 'Initiate', 290, 12345, 2020),
('Cereal Company', 5, 'Initiate', 14, 12345, 2023),
('eBooks', 2, 'Familiarize', 59, 12345, 2019),
('Learn Guitar', 1, 'Initiate', 407, 12345, 2022);

INSERT INTO recommendations (account_id, prediction) VALUES
(1, 'Initiate'),
(2, 'Initiate'),
(3, 'Engage'),
(4, 'Initiate'),
(5, 'Initiate'),
(6, 'Engage'),
(7, 'Initiate'),
(8, 'Initiate'),
(9, 'Engage');
