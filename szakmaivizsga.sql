-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Feb 11. 20:36
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `szakmaivizsga`
--
CREATE DATABASE IF NOT EXISTS `szakmaivizsga` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `szakmaivizsga`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

CREATE TABLE `felhasznalo` (
  `ID` int(11) NOT NULL,
  `Csaladnev` varchar(50) DEFAULT NULL,
  `Vezeteknev` varchar(50) DEFAULT NULL,
  `Elado` tinyint(1) DEFAULT NULL,
  `Berlo` tinyint(1) DEFAULT NULL,
  `Kor` int(11) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Jelszo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalo`
--

INSERT INTO `felhasznalo` (`ID`, `Csaladnev`, `Vezeteknev`, `Elado`, `Berlo`, `Kor`, `Email`, `Jelszo`) VALUES
(1, 'Csarni', 'Lőrinc', 0, 1, 19, 'csarnil@gmail.com', 'Lolocstraktor2000'),
(2, 'Krizsán', 'Márk', 1, 0, 20, 'krizsanm@gmail.com', 'MarkiDrum1234'),
(3, 'Taskó', 'Enikő', 1, 1, 21, 'taskoe@gmail.com', 'Enikobigb1010'),
(4, 'Gábor', 'Áron', 1, 0, 44, 'nagygabikrisi@gmail.com', 'Gabo2004'),
(5, 'Tóth', 'Andrea', 0, 1, 25, 'tothandi@gmail.com', 'Andi1993'),
(6, 'Nagy', 'Ildikó', 1, 1, 48, 'nagyilda77@gmail.com', 'NagyI1977'),
(7, 'Flaskó', 'Attila', 1, 0, 59, 'atiflasko@gmail.com', 'FlasiAti59'),
(8, 'Várkonyi', 'Dominik', 0, 1, 20, 'varkonyid@gmail.com', 'Varkonyidominagyszinpad20'),
(9, 'Kiss', 'Jolán', 1, 1, 74, 'kissjolimama@gmail.com', 'Unokajoli01'),
(10, 'Horváth', 'István', 0, 1, 75, 'horvathpityesz@gmail.com', 'Istvan1950'),
(11, 'Juhász', 'Ágota', 1, 0, 36, 'juhaszagota@gmail.com', 'Juhasz888'),
(12, 'Huszár', 'Dávid', 0, 1, 25, 'huszardavidka@gmail.com', 'Davidka9786'),
(13, 'Károly', 'Róbert', 1, 1, 67, 'krobert@gmail.com', 'Karolyrobi68'),
(14, 'Makkai', 'László', 1, 1, 52, 'makkailll55@gmail.com', 'MakkaiLlL32'),
(15, 'Orsós', 'Sándor', 1, 0, 22, 'orsossanyikobanya@gmail.com', 'OrsossanyiPerka0'),
(16, 'Buzsik', 'Bianka', 1, 0, 31, 'biankabuzsiklove@gmail.com', 'Buzsikbaba85'),
(17, 'Boros', 'Patrik', 0, 1, 49, 'bppatrikmic@gmail.com', 'BorosBass5467'),
(18, 'Nagy', 'István', 1, 1, 82, 'nagyistvan@gmail.com', 'Nagyapa0922'),
(19, 'Miklósi', 'Ákos', 1, 0, 33, 'commonvibeproject@gmail.com', 'CsibeszAkos0329'),
(20, 'Kékesi', 'Alexandra', 0, 1, 57, 'kekesimandarin@gmail.com', 'Mandi1968');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hirdetes`
--

CREATE TABLE `hirdetes` (
  `ID` int(11) NOT NULL,
  `FelhasznaloID` int(11) DEFAULT NULL,
  `Leiras` text DEFAULT NULL,
  `Elerhetoseg` varchar(100) DEFAULT NULL,
  `Hirdetesnev` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `hirdetes`
--

INSERT INTO `hirdetes` (`ID`, `FelhasznaloID`, `Leiras`, `Elerhetoseg`, `Hirdetesnev`) VALUES
(1, 1, 'Miskolc', '+36-70-934-3071', '2 szobás/80m²'),
(2, 2, 'Budapest', '+36-30-517-2022', '4 szobás/200m²'),
(3, 3, 'Debrecen', '+36-20-654-7021', '3 szobás/160m²'),
(4, 4, 'Kecskemét', '+36-70-554-2435', '1 szobás/60m²'),
(5, 5, 'Parasznya', '+36-30-466-2238', '5 szobás/250m²');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hirdetesadatok`
--

CREATE TABLE `hirdetesadatok` (
  `HirdetesID` int(11) NOT NULL,
  `Orszag` varchar(50) NOT NULL,
  `Varmegye` varchar(50) DEFAULT NULL,
  `Telepules` varchar(50) DEFAULT NULL,
  `Utcahazszam` varchar(100) DEFAULT NULL,
  `Tipus` varchar(50) DEFAULT NULL,
  `Ar` decimal(10,2) DEFAULT NULL,
  `Mikiado` varchar(50) DEFAULT NULL,
  `Allatbarat` tinyint(1) DEFAULT NULL,
  `Kiadasiidotartam` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `hirdetes`
--
ALTER TABLE `hirdetes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FelhasznaloID` (`FelhasznaloID`);

--
-- A tábla indexei `hirdetesadatok`
--
ALTER TABLE `hirdetesadatok`
  ADD PRIMARY KEY (`HirdetesID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `hirdetes`
--
ALTER TABLE `hirdetes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `hirdetes`
--
ALTER TABLE `hirdetes`
  ADD CONSTRAINT `hirdetes_ibfk_1` FOREIGN KEY (`FelhasznaloID`) REFERENCES `felhasznalo` (`ID`);

--
-- Megkötések a táblához `hirdetesadatok`
--
ALTER TABLE `hirdetesadatok`
  ADD CONSTRAINT `hirdetesadatok_ibfk_1` FOREIGN KEY (`HirdetesID`) REFERENCES `hirdetes` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
