-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2020 at 07:16 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `aandtlabs`
--

CREATE TABLE `aandtlabs` (
  `keyNo` int(10) NOT NULL,
  `idNum` int(10) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `address1` varchar(20) NOT NULL,
  `address2` varchar(20) NOT NULL,
  `styles` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aandtlabs`
--

INSERT INTO `aandtlabs` (`keyNo`, `idNum`, `firstName`, `lastName`, `address1`, `address2`, `styles`) VALUES
(15, 7878987, 'Hexcode', 'labs', '259/b/8 welmilla', 'nagoda', 'style2,style6,style9'),
(16, 1234678, 'Mastermind ', 'Josh', 'werwer', 'erwer', 'style7,style5,style3');

-- --------------------------------------------------------

--
-- Table structure for table `headboard`
--

CREATE TABLE `headboard` (
  `keyNo` int(10) NOT NULL,
  `idNum` int(15) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(20) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `headboard`
--

INSERT INTO `headboard` (`keyNo`, `idNum`, `firstName`, `lastName`, `email`, `password`, `status`) VALUES
(1, 1500, 'first1', 'last1', 'first1last1@gmail.com', '12345', 1),
(2, 1501, 'first2', 'last2', 'first2last2@gmail.com', '12345', 1),
(3, 1502, 'first3', 'last3', 'first3last3@gmail.com', '12345', 2),
(4, 1503, 'first4', 'last4', 'first4last4@gmail.com', '12345', 2),
(5, 1508, 'first5', 'last5', 'first5last5@gmail.com', '12345', 2),
(8, 1520, 'first6', 'last6', 'first6last6@gmail.com', '34567', 2),
(16, 17057645, 'shashika', 'udayanga', 'shashika@gmail.com', '989898', 3),
(17, 170714714, 'tharaka', 'wijesundara', 'wmtharaka98@gmail.com', '1234567', 3),
(18, 6789781, 'abcd', 'efgh', '12345445g@uom.lk', '1234567', 3);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(10) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `gender` text NOT NULL,
  `email` text NOT NULL,
  `password` int(10) NOT NULL,
  `number` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(1, 'Tharaka', 'wijaae', 'malasase', 'Tharaka@asasa', 0, 6789),
(2, 'Tharaka', 'wije', 'malasase', 'Tharaka@', 0, 6789);

-- --------------------------------------------------------

--
-- Table structure for table `styles`
--

CREATE TABLE `styles` (
  `styleKey` int(11) NOT NULL,
  `name` text NOT NULL,
  `stich_count` text NOT NULL,
  `error_margin` text NOT NULL,
  `prop3` text NOT NULL,
  `prop4` text NOT NULL,
  `prop5` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `styles`
--

INSERT INTO `styles` (`styleKey`, `name`, `stich_count`, `error_margin`, `prop3`, `prop4`, `prop5`) VALUES
(4, 'style1', 'prop1', 'prop1', 'prop1', 'prop1', 'prop1'),
(9, 'style6', '100', '60', 'abc', 'cde', 'efg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aandtlabs`
--
ALTER TABLE `aandtlabs`
  ADD PRIMARY KEY (`keyNo`);

--
-- Indexes for table `headboard`
--
ALTER TABLE `headboard`
  ADD PRIMARY KEY (`keyNo`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `styles`
--
ALTER TABLE `styles`
  ADD PRIMARY KEY (`styleKey`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aandtlabs`
--
ALTER TABLE `aandtlabs`
  MODIFY `keyNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `headboard`
--
ALTER TABLE `headboard`
  MODIFY `keyNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `styles`
--
ALTER TABLE `styles`
  MODIFY `styleKey` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
