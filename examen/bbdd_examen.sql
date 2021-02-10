-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-02-2021 a las 10:02:43
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bbdd_examen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `NIF` varchar(12) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `Apellido_1` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `Apellido_2` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `Direccion` varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  `poblacion` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `cp` int(11) NOT NULL,
  `Provincia` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `telefono` double NOT NULL,
  `mail` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `genero` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `estado_civil` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `hijos` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `estado_laboral` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `Vivienda` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `coche` varchar(10) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`NIF`, `nombre`, `Apellido_1`, `Apellido_2`, `Direccion`, `poblacion`, `cp`, `Provincia`, `telefono`, `mail`, `genero`, `estado_civil`, `hijos`, `estado_laboral`, `Vivienda`, `coche`) VALUES
('MARIO', '123456', '', '', '', '', 0, '', 0, '', '', '', '', '', '', ''),
('76035771W', 'mairo', 'wer', 'rewt', 'wert', 'ewrt', 48992, 'wert', 698856321, 'rewt@dewf', 'H', 'S', 'S', 'E', 'N', 'S');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
