CREATE TABLE `tradingbox`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ticker` VARCHAR(15) NOT NULL,
  `trader` VARCHAR(25) NOT NULL,
  `order_date` DATETIME NOT NULL,
  `share` INT(11) NOT NULL,
  `price` INT(11) NOT NULL,
  `order_type` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tradingbox`.`tricker` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `tradingbox`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ticker` VARCHAR(15) NOT NULL,
  `share` INT NOT NULL,
  `price` INT NOT NULL,
  `order_date` DATETIME NOT NULL
  PRIMARY KEY (`id`));

ALTER TABLE `tradingbox`.`orders` 
ADD COLUMN `isExecuted` BIT(1) NULL AFTER `ticker`;

ALTER TABLE `tradingbox`.`books` 
ADD COLUMN `order_type` VARCHAR(45) NULL AFTER `trader`;


