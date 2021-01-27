-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-01-2021 a las 10:36:39
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
-- Base de datos: `bbdd_farmacia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamentos`
--

DROP TABLE IF EXISTS `medicamentos`;
CREATE TABLE IF NOT EXISTS `medicamentos` (
  `referencia` varchar(12) COLLATE latin1_spanish_ci NOT NULL,
  `farmaceutica` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `precio_compra` int(20) NOT NULL,
  `precio_venta` int(20) NOT NULL,
  `unidades` int(20) NOT NULL,
  PRIMARY KEY (`referencia`),
  UNIQUE KEY `referencia` (`referencia`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `medicamentos`
--

INSERT INTO `medicamentos` (`referencia`, `farmaceutica`, `nombre`, `precio_compra`, `precio_venta`, `unidades`) VALUES
('12345678901a', 'pfizer', 'sars2', 12, 15, 0),
('460054QGR808', 'Eu Enim Corporation', 'Frye', 16, 19, 0),
('583707YCT359', 'Mollis Dui LLP', 'Nicholson', 16, 20, 86),
('506720MTJ773', 'Lorem Consulting', 'Wiley', 8, 30, 15),
('031296HDR089', 'Lacinia Mattis LLP', 'Ballard', 12, 25, 18),
('798081OLF238', 'Libero Mauris Corp.', 'James', 17, 30, 100),
('437555FXD675', 'Ornare Tortor At Consulting', 'Rivera', 5, 28, 40),
('290524SZX410', 'Placerat Augue Sed Foundation', 'Barton', 9, 19, 3),
('329033FBJ150', 'Non Limited', 'Conrad', 15, 22, 62),
('947730UKW762', 'Et Malesuada Inc.', 'Blanchard', 7, 20, 57),
('301254BVZ844', 'Non Enim Mauris Ltd', 'Sanders', 14, 25, 38),
('261945VOD610', 'Leo Vivamus Ltd', 'Spears', 2, 20, 99),
('986196PDS538', 'Elit Pharetra Ut Foundation', 'Ortiz', 3, 30, 65),
('890416PFP833', 'Fermentum Fermentum Arcu Inc.', 'Conner', 18, 23, 46),
('271078TSS939', 'Erat Vel Pede Associates', 'Buchanan', 16, 29, 0),
('543465PLR245', 'Vitae Aliquet Nec Limited', 'Le', 12, 28, 72),
('665201AAN988', 'Fusce Dolor Quam Inc.', 'Levine', 8, 21, 55),
('007862PMB142', 'Tincidunt Associates', 'Schmidt', 14, 22, 28),
('717933LGQ016', 'Nibh Vulputate Mauris LLP', 'William', 16, 29, 19),
('334933YEZ355', 'Semper Institute', 'Valdez', 5, 22, 7),
('897682MQL013', 'Ultricies Ornare Ltd', 'Frederick', 5, 21, 92),
('304731UJI092', 'Non Enim Commodo Foundation', 'Wilcox', 2, 22, 40),
('391770PSV306', 'Orci Industries', 'James', 17, 21, 57),
('713703OFB990', 'Eu Company', 'Riddle', 7, 19, 95),
('583044FZP901', 'Integer Urna Vivamus LLC', 'Oneill', 14, 24, 80),
('155975VPW403', 'Ut Sagittis Corporation', 'Booker', 4, 30, 38),
('245078OSC738', 'Sit Amet Luctus Foundation', 'Estrada', 12, 29, 23),
('081243QCC597', 'Quis Arcu Corporation', 'Webb', 8, 30, 13),
('863578ADJ406', 'Nonummy Corporation', 'Ray', 14, 29, 86),
('621838JCS587', 'Erat Corp.', 'Burnett', 7, 27, 13),
('960087UZL681', 'Enim Sed LLC', 'Howard', 11, 23, 74),
('274880XZW633', 'Orci Quis Lectus Consulting', 'Benson', 9, 25, 2),
('837298YVX374', 'Leo Cras Vehicula Associates', 'Pugh', 5, 29, 11),
('934071LMR853', 'At Arcu Vestibulum Corporation', 'Giles', 11, 24, 4),
('098341YJC259', 'Est Limited', 'Salazar', 12, 25, 96),
('750550OFN476', 'Vivamus Rhoncus Company', 'Summers', 8, 24, 98),
('511068ADU902', 'Etiam Ltd', 'Wynn', 11, 20, 7),
('139550NZY862', 'Duis Dignissim Tempor Inc.', 'Bennett', 13, 20, 95),
('857357YDQ382', 'Eu Odio LLC', 'Mathis', 15, 26, 6),
('865001SOE035', 'Diam Dictum Incorporated', 'Sanford', 1, 19, 32),
('278014CPI972', 'Aenean Eget Magna Associates', 'Carroll', 11, 22, 29),
('729369RUK896', 'Nisi Dictum Augue Limited', 'Hampton', 10, 28, 74),
('633208RYZ201', 'Dis Parturient Montes Corp.', 'Head', 10, 19, 8),
('432526UQX070', 'Sit Inc.', 'Parsons', 9, 29, 84),
('203369JVD524', 'Sapien Cursus In PC', 'Avery', 14, 20, 18),
('836381TXD532', 'Quisque Ornare Tortor LLC', 'Preston', 1, 27, 39),
('111727IAL557', 'Integer Associates', 'Little', 8, 20, 95),
('029147BOD843', 'Nam Tempor Corporation', 'Hull', 9, 22, 21),
('279812HAK649', 'Aliquam Company', 'Wolf', 8, 24, 85),
('946710NAJ507', 'Leo Elementum Foundation', 'Hudson', 18, 21, 56),
('120142BAA148', 'Iaculis Nec Company', 'Lane', 9, 24, 16),
('193497GMX823', 'Id Risus Consulting', 'Gardner', 9, 21, 78),
('951474DZI985', 'Adipiscing Corp.', 'Lucas', 13, 23, 32),
('736272OCC760', 'Accumsan Interdum Libero Corp.', 'Langley', 6, 24, 22),
('100379XQQ831', 'Libero Corp.', 'Goodwin', 14, 19, 77),
('689861UAF129', 'Et Institute', 'Kennedy', 17, 24, 29),
('823697QNO254', 'Eu Dolor Egestas Institute', 'Randall', 1, 23, 29),
('066293FQL953', 'Sit Amet Orci Corporation', 'Pickett', 11, 20, 62),
('825546AOS237', 'Vestibulum Lorem Consulting', 'Fischer', 17, 19, 38),
('074323RAS106', 'Quam Curabitur Foundation', 'Cross', 17, 23, 84),
('948855HFR207', 'Facilisis Industries', 'Solomon', 13, 20, 89),
('471150XJH902', 'Sed PC', 'David', 15, 27, 7),
('815443IYD002', 'Mauris Foundation', 'Murphy', 10, 24, 18),
('295311XAM247', 'Sapien Consulting', 'Francis', 15, 29, 100),
('094028SER352', 'Cursus Et Institute', 'Cabrera', 14, 28, 9),
('789479RTH043', 'Tortor At Risus Limited', 'Murphy', 9, 24, 6),
('933536CDG061', 'Aliquam Enim Corporation', 'Porter', 2, 24, 45),
('220383FMF118', 'A Purus Duis Incorporated', 'Knapp', 18, 24, 92),
('258756HLQ248', 'Purus Accumsan Interdum Institute', 'Madden', 14, 23, 10),
('581736OZA898', 'Cum Corp.', 'Kirby', 3, 25, 83),
('582424UUB512', 'Quis Turpis Vitae Corp.', 'Macias', 18, 20, 57),
('328447LTH839', 'Enim Foundation', 'Hickman', 12, 26, 22),
('145265XOE724', 'Ipsum Ac Mi Associates', 'Gomez', 5, 21, 28),
('064224JJG860', 'Sit Amet Ltd', 'Merrill', 6, 26, 68),
('791152ZLA228', 'Lorem Consulting', 'Jacobson', 10, 27, 31),
('026587IVS285', 'Justo Sit Amet Consulting', 'Leonard', 2, 20, 99),
('218734KVF341', 'Mauris Company', 'Guerrero', 4, 27, 68),
('635083DOU433', 'Id Nunc Company', 'Wiley', 16, 22, 76),
('148736NWF908', 'Ipsum Industries', 'Wilkins', 7, 26, 50),
('447457ZNK867', 'Suspendisse Limited', 'Richardson', 11, 26, 85),
('058451XCD735', 'Phasellus Ltd', 'Dillard', 4, 26, 14),
('707768GRN714', 'Felis Corporation', 'Hull', 18, 23, 40),
('661944LSJ559', 'Imperdiet Nec Consulting', 'Williams', 18, 22, 13),
('472311EYT967', 'Nulla LLC', 'Hamilton', 12, 26, 73),
('663210PGV466', 'At LLC', 'Nunez', 2, 23, 46),
('580863BOJ932', 'Ornare Tortor At LLC', 'Short', 3, 25, 9),
('120201FMO450', 'Nulla Cras Eu PC', 'Castro', 11, 30, 65),
('909181XRK794', 'Ultrices Sit Foundation', 'Dale', 12, 28, 81),
('310014DZJ498', 'Metus Aenean Sed Associates', 'Grimes', 3, 24, 2),
('782990PDT904', 'Orci Luctus Inc.', 'Bradshaw', 4, 19, 62),
('722442NQN246', 'Nisl Maecenas Limited', 'Blake', 7, 23, 47),
('577778FEL263', 'Quisque Ornare Tortor Consulting', 'Small', 14, 26, 15),
('956279KYO554', 'Ornare Placerat Institute', 'Reid', 1, 29, 49),
('513183DPC311', 'Egestas Nunc Sed PC', 'Frye', 11, 19, 88),
('730118PXN921', 'Tortor Nunc Associates', 'Hess', 18, 25, 10),
('529143MUE278', 'Donec Corp.', 'Anthony', 1, 25, 75),
('996847DQI033', 'Turpis PC', 'Rios', 7, 20, 71),
('809599WWV739', 'Lectus Pede LLC', 'Melton', 18, 28, 32),
('688911XGO943', 'Eu Augue Porttitor Foundation', 'Dorsey', 3, 23, 100),
('583712LEV861', 'Nam Nulla Magna LLC', 'Lowe', 13, 24, 97),
('563895AJH961', 'Pede Et LLP', 'Luna', 2, 21, 19),
('476477MHT950', 'Laoreet Lectus Quis Institute', 'William', 14, 23, 54),
('611953IYS076', 'Pede Ltd', 'Zimmerman', 11, 22, 61),
('027332OXJ805', 'Dictum Company', 'Edwards', 14, 23, 86),
('003361PMU464', 'Dolor Dolor Corporation', 'Camacho', 17, 25, 92),
('288223NLX923', 'Augue Eu Tempor LLC', 'Frye', 11, 21, 52),
('456226YHT661', 'Ornare Sagittis Consulting', 'Fulton', 5, 20, 61),
('321926HIY254', 'Aliquet Diam Sed Limited', 'Fischer', 15, 20, 29),
('452787YXE740', 'Et Ultrices Corp.', 'Cox', 5, 29, 98),
('117771MHM567', 'Vestibulum Mauris Magna Company', 'Dalton', 15, 25, 90),
('204843KNE472', 'Cras Corp.', 'Barr', 4, 24, 19),
('717529BLL274', 'Nunc Sed Orci Incorporated', 'Brennan', 15, 28, 51),
('616762OVX730', 'Aliquam Auctor Foundation', 'Snyder', 8, 30, 10),
('822358HVE011', 'Nascetur Consulting', 'Lloyd', 17, 26, 92),
('749751GXU121', 'Arcu Nunc LLC', 'Curtis', 11, 20, 36),
('994649QMO341', 'Lorem Donec Elementum Associates', 'Blackwell', 6, 20, 31),
('99999999999F', 'werwe', 'qewrqw', 6, 5, 2),
('33333333333N', 'regre', 'dfgsdf', 6, 6, 58),
('44444444444H', 'try', 'rety', 7, 7, 884),
('99999999999M', 'ert', 'erw', 6, 6, 1789),
('99999999999L', 'ytru', 'tyru', 9, 8, 1001),
('66666666666m', 'tyu', 'rtyu', 9, 7, 1001),
('66666666666K', 'rdeg', 'dfg', 9, 7, 1001),
('67867897987J', 'yjutyu', 'ghjh', 6, 7, 89),
('54744546465J', 'fghdfg', 'fdghdfg', 67, 98, 56);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `nombre` varchar(24) COLLATE latin1_spanish_ci NOT NULL,
  `contrasena` varchar(24) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`nombre`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `contrasena`) VALUES
('mario', '123456');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
