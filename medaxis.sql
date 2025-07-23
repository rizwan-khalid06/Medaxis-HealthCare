-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2025 at 09:43 AM
-- Server version: 11.7.2-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medaxis`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat_history`
--

CREATE TABLE `chat_history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_input` text NOT NULL,
  `bot_response` text NOT NULL,
  `description` text DEFAULT NULL,
  `precautions` text DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chat_history`
--

INSERT INTO `chat_history` (`id`, `user_id`, `user_input`, `bot_response`, `description`, `precautions`, `timestamp`) VALUES
(1, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 15:51:27'),
(2, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:33:23'),
(3, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:35:05'),
(4, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:38:22'),
(5, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:38:35'),
(6, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:38:46'),
(7, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:38:48'),
(8, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:39:16'),
(9, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:39:19'),
(10, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:39:25'),
(11, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:41:04'),
(12, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:41:05'),
(13, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:41:16'),
(14, 17, ' pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:43:48'),
(15, 17, ' pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:44:04'),
(16, 17, ' pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:44:06'),
(17, 17, 'pain behind eyes, body pain, fever, dizziness, fatigue', 'Dengue', 'an acute infectious disease caused by a flavivirus (species Dengue virus of the genus Flavivirus), transmitted by aedes mosquitoes, and characterized by headache, severe joint pain, and a rash. â called also breakbone fever, dengue fever.', '[\"drink papaya leaf juice\",\"avoid fatty spicy food\",\"keep mosquitos away\",\"keep hydrated\"]', '2025-05-04 16:53:10');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(17, 'dauood', 'dauood437@gmail.com', '$2b$10$TiALSH3hnkWsqJLpdaOqvOezXrlgKEjbntwGh3zjExsYbatJlQlFO'),
(18, 'dauood', 'dauood437@gmail.com', '$2b$10$GzPp5aFVzLfhVcBH1GZ6/.MmqTCqmQe15KZgzJ7CSIEjIleqBMZhy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat_history`
--
ALTER TABLE `chat_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat_history`
--
ALTER TABLE `chat_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chat_history`
--
ALTER TABLE `chat_history`
  ADD CONSTRAINT `chat_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
