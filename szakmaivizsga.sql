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
(1, 'Liff', 'Sonnie', 0, 0, 1, NULL, NULL),
(2, 'Gentery', 'Riane', 0, 0, 2, NULL, NULL),
(3, 'Meade', 'Chrissie', 0, 1, 3, NULL, NULL),
(4, 'McFayden', 'Rory', 1, 1, 4, NULL, NULL),
(5, 'Stribling', 'Aland', 1, 0, 5, NULL, NULL),
(6, 'Jóusef', 'Akna', 1, 1, 55, 'aknafedel@gmail.com', 'Akna5569');

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
(1, 1, 'Miskolc', '+36-70-934-3071', 'Lőrinc'),
(2, 2, 'Budapest', '+36-30-517-2022', 'Márk'),
(3, 3, 'Debrecen', '+36-20-654-7021', 'Enikő'),
(4, 4, 'Kecskemét', '+36-70-554-2435', 'Gábor'),
(5, 5, 'Parasznya', '+36-30-466-2238', 'Andrea');

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
  `Mikiado` tinyint(1) DEFAULT NULL,
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
