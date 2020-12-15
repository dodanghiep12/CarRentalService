CREATE DATABASE  IF NOT EXISTS `car_rental_service`;
USE `car_rental_service`;

DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `usercarinfo`;
DROP TABLE IF EXISTS `carstock`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO users (user_name, password, first_name, last_name)
VALUES ('Dummy1','pwd','Hiep','Do'),
('Dummy2','pwd','Adam','Do'),
('Dummy3','pwd','Jacob','Do');


CREATE TABLE `usercarinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(200) DEFAULT NULL,
  `color` varchar(200) NOT NULL,
  `userID` int(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO usercarinfo (brand, color, userID)
VALUES ('What is OOP?','Object Oriented programming',1),
('What is Inheritance?','getting behaviors and attributes from a base class',1),
('What is Encapsuluation is?','Hiding data and providing methods to access them',1),
('What is Abstraction?','Hiding implementation, showing functionality',1),
('What is Polymorphism?','Changing behavior and attributes inherited from a super class',1),

('How do you greet someone?','Yo',2),
('What is your favorite game','MineCraft',2),
('What game was the biggest dissapointement in the last decade','Diablo III',2),

('Should you litter','No',3),
('What is recycling','Something you should do',3);

CREATE TABLE `carstock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(200) DEFAULT NULL,
  `color` varchar(200) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO carstock (brand, color)
VALUES ('What is OOP?','Object Oriented programming'),
('What is Inheritance?','getting behaviors and attributes from a base class'),
('What is Encapsuluation is?','Hiding data and providing methods to access them'),
('What is Abstraction?','Hiding implementation, showing functionality'),
('What is Polymorphism?','Changing behavior and attributes inherited from a super class'),

('How do you greet someone?','Yo'),
('What is your favorite game','MineCraft'),
('What game was the biggest dissapointement in the last decade','Diablo III'),

('Should you litter','No'),
('What is recycling','Something you should do');