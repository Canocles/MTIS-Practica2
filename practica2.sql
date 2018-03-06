-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-02-2018 a las 22:31:17
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `practica1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigopostal`
--

CREATE TABLE `codigopostal` (
  `codigo` varchar(5) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `provincia` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `codigopostal`
--

INSERT INTO `codigopostal` (`codigo`, `localidad`, `provincia`) VALUES
('02070', 'Albacete', 'Albacete'),
('03177', 'San Fulgencio', 'Alicante'),
('03188', 'Cala Higuera', 'Alicante'),
('03559', 'Alicante', 'Alicante'),
('03660', 'Horna Baja', 'Alicante'),
('03690', 'San Vicente del Raspeig', 'Alicante'),
('03700', 'Quijote', 'Alicante'),
('03720', 'Benissa', 'Alicante'),
('33111', 'Infiesta', 'Asturias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `presupuesto`
--

CREATE TABLE `presupuesto` (
  `idPresupuesto` int(11) NOT NULL,
  `fechaPresupuesto` date NOT NULL,
  `idCliente` int(11) NOT NULL,
  `referenciaProducto` varchar(20) NOT NULL,
  `cantidadProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `presupuesto`
--

INSERT INTO `presupuesto` (`idPresupuesto`, `fechaPresupuesto`, `idCliente`, `referenciaProducto`, `cantidadProducto`) VALUES
(3, '2018-06-29', 123, '1231231', 3),
(4, '2018-02-20', 123, '123', 1),
(6, '1992-02-19', 2, '3', 4),
(7, '1992-02-19', 2, '3', 4),
(8, '2018-02-13', 123, '123', 123),
(9, '1992-02-19', 2, '3', 4),
(10, '1992-02-19', 2, '3', 4),
(11, '1992-02-19', 2, '3', 4),
(12, '1992-02-19', 2, '3', 4),
(13, '1992-02-19', 2, '3', 4),
(14, '1992-02-19', 2, '3', 4),
(15, '1992-02-19', 2, '3', 4),
(16, '1992-02-19', 2, '3', 4),
(17, '1992-02-19', 2, '3', 4),
(18, '1992-02-19', 2, '3', 4),
(19, '1992-02-19', 2, '3', 4),
(20, '1992-02-19', 2, '3', 4),
(21, '1992-02-19', 2, '3', 4),
(22, '1992-02-19', 2, '3', 4),
(23, '1992-02-19', 2, '3', 4),
(24, '1992-02-19', 2, '3', 4),
(25, '1992-02-19', 2, '3', 4),
(26, '1992-02-19', 2, '3', 4),
(28, '1992-02-19', 2, '3', 4),
(29, '1992-02-19', 2, '3', 4),
(30, '1992-02-19', 2, '3', 4),
(31, '2018-02-06', 12, '12', 12),
(32, '2018-02-06', 12, '12', 12),
(33, '2018-02-06', 12, '12', 12),
(34, '2018-02-06', 12, '12', 12),
(35, '2018-02-20', 100, '1123', 12),
(36, '2018-02-20', 100, '1123', 12),
(37, '2018-02-20', 12, '123', 12),
(38, '2018-02-20', 12, '12', 12),
(39, '2018-02-20', 12, '12', 12),
(40, '2018-02-20', 12, '12', 12),
(41, '2018-02-20', 12, '12', 12),
(42, '2018-02-20', 12, '12', 12),
(43, '2018-02-20', 1, '12', 0),
(44, '2018-02-20', 1, '12', 2),
(45, '2018-02-20', 1, '12', 2),
(46, '2018-02-20', 2, '12', 2),
(47, '2018-02-20', 3, '12', 2),
(48, '2018-02-20', 3, '12', 2),
(49, '2018-02-20', 3, '2', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soapkey`
--

CREATE TABLE `soapkey` (
  `clave` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `soapkey`
--

INSERT INTO `soapkey` (`clave`) VALUES
('soapkeydeprueba12345678');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `codigopostal`
--
ALTER TABLE `codigopostal`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `presupuesto`
--
ALTER TABLE `presupuesto`
  ADD PRIMARY KEY (`idPresupuesto`);

--
-- Indices de la tabla `soapkey`
--
ALTER TABLE `soapkey`
  ADD PRIMARY KEY (`clave`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `presupuesto`
--
ALTER TABLE `presupuesto`
  MODIFY `idPresupuesto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
