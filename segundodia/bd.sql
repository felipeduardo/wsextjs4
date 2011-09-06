SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS `wsext` ;
CREATE SCHEMA IF NOT EXISTS `wsext` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `wsext` ;

-- -----------------------------------------------------
-- Table `wsext`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wsext`.`usuarios` ;

CREATE  TABLE IF NOT EXISTS `wsext`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `usuario` VARCHAR(60) NOT NULL ,
  `senha` VARCHAR(60) NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wsext`.`tipo_despesa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wsext`.`tipo_despesa` ;

CREATE  TABLE IF NOT EXISTS `wsext`.`tipo_despesa` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(60) NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wsext`.`tipo_ganho`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wsext`.`tipo_ganho` ;

CREATE  TABLE IF NOT EXISTS `wsext`.`tipo_ganho` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(60) NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wsext`.`tipo_despesa_ganho`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wsext`.`tipo_despesa_ganho` ;

CREATE  TABLE IF NOT EXISTS `wsext`.`tipo_despesa_ganho` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `nome` VARCHAR(60) NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wsext`.`controle_despesa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wsext`.`controle_despesa` ;

CREATE  TABLE IF NOT EXISTS `wsext`.`controle_despesa` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `valor` VARCHAR(60) NOT NULL ,
  `data` DATE NOT NULL ,
  `tipo_despesa_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_controle_despesa_tipo_despesa` (`tipo_despesa_id` ASC) ,
  CONSTRAINT `fk_controle_despesa_tipo_despesa`
    FOREIGN KEY (`tipo_despesa_id` )
    REFERENCES `wsext`.`tipo_despesa` (`id` )
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wsext`.`controle_ganho`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wsext`.`controle_ganho` ;

CREATE  TABLE IF NOT EXISTS `wsext`.`controle_ganho` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `valor` VARCHAR(60) NOT NULL ,
  `data` DATE NOT NULL ,
  `tipo_ganho_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_controle_ganho_tipo_ganho1` (`tipo_ganho_id` ASC) ,
  CONSTRAINT `fk_controle_ganho_tipo_ganho1`
    FOREIGN KEY (`tipo_ganho_id` )
    REFERENCES `wsext`.`tipo_ganho` (`id` )
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `wsext`.`financa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wsext`.`financa` ;

CREATE  TABLE IF NOT EXISTS `wsext`.`financa` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `valor` VARCHAR(60) NOT NULL ,
  `data` DATE NOT NULL ,
  `tipo_despesa_ganho_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_controle_despesa_ganho_tipo_despesa_ganho1` (`tipo_despesa_ganho_id` ASC) ,
  CONSTRAINT `fk_controle_despesa_ganho_tipo_despesa_ganho1`
    FOREIGN KEY (`tipo_despesa_ganho_id` )
    REFERENCES `wsext`.`tipo_despesa_ganho` (`id` )
    ON DELETE RESTRICT
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
