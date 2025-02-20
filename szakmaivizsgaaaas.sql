-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: mysql:3306
-- Létrehozás ideje: 2025. Feb 20. 11:18
-- Kiszolgáló verziója: 9.1.0
-- PHP verzió: 8.2.25

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
-- Tábla szerkezet ehhez a táblához `AspNetRoleClaims`
--

CREATE TABLE `AspNetRoleClaims` (
  `Id` int NOT NULL,
  `RoleId` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `ClaimType` longtext COLLATE utf8mb4_hungarian_ci,
  `ClaimValue` longtext COLLATE utf8mb4_hungarian_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `AspNetRoles`
--

CREATE TABLE `AspNetRoles` (
  `Id` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Name` varchar(256) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `NormalizedName` varchar(256) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `ConcurrencyStamp` longtext COLLATE utf8mb4_hungarian_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `AspNetUserClaims`
--

CREATE TABLE `AspNetUserClaims` (
  `Id` int NOT NULL,
  `UserId` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `ClaimType` longtext COLLATE utf8mb4_hungarian_ci,
  `ClaimValue` longtext COLLATE utf8mb4_hungarian_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `AspNetUserLogins`
--

CREATE TABLE `AspNetUserLogins` (
  `LoginProvider` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `ProviderKey` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `ProviderDisplayName` longtext COLLATE utf8mb4_hungarian_ci,
  `UserId` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `AspNetUserRoles`
--

CREATE TABLE `AspNetUserRoles` (
  `UserId` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `RoleId` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `AspNetUsers`
--

CREATE TABLE `AspNetUsers` (
  `Id` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Csaladnev` longtext COLLATE utf8mb4_hungarian_ci,
  `Vezeteknev` longtext COLLATE utf8mb4_hungarian_ci,
  `Elado` tinyint(1) NOT NULL,
  `Berlo` tinyint(1) DEFAULT NULL,
  `Kor` int DEFAULT NULL,
  `Email` varchar(256) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Jelszo` longtext COLLATE utf8mb4_hungarian_ci,
  `UserName` varchar(256) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `NormalizedUserName` varchar(256) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `NormalizedEmail` varchar(256) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext COLLATE utf8mb4_hungarian_ci,
  `SecurityStamp` longtext COLLATE utf8mb4_hungarian_ci,
  `ConcurrencyStamp` longtext COLLATE utf8mb4_hungarian_ci,
  `PhoneNumber` longtext COLLATE utf8mb4_hungarian_ci,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `AspNetUserTokens`
--

CREATE TABLE `AspNetUserTokens` (
  `UserId` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `LoginProvider` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Value` longtext COLLATE utf8mb4_hungarian_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

CREATE TABLE `felhasznalo` (
  `ID` int NOT NULL,
  `Csaladnev` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Vezeteknev` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Elado` tinyint(1) DEFAULT NULL,
  `Berlo` tinyint(1) DEFAULT NULL,
  `Kor` int DEFAULT NULL,
  `Email` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Jelszo` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL
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
(6, 'Jóusef', 'Akna', 1, 1, 55, 'aknafedel@gmail.com', 'Akna5569'),
(17, 'Enko', 'Tasko', 1, 1, 19, 'taskoe@kkszki.hu', '20051019');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hirdetes`
--

CREATE TABLE `hirdetes` (
  `ID` int NOT NULL,
  `FelhasznaloID` int DEFAULT NULL,
  `Leiras` text COLLATE utf8mb4_hungarian_ci,
  `Elerhetoseg` varchar(100) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Hirdetesnev` varchar(100) COLLATE utf8mb4_hungarian_ci DEFAULT NULL
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
  `HirdetesID` int NOT NULL,
  `Orszag` varchar(50) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `Varmegye` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Telepules` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Utcahazszam` varchar(100) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Tipus` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Ar` decimal(10,2) DEFAULT NULL,
  `Mikiado` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL,
  `Allatbarat` tinyint(1) DEFAULT NULL,
  `Kiadasiidotartam` varchar(50) COLLATE utf8mb4_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `__EFMigrationsHistory`
--

CREATE TABLE `__EFMigrationsHistory` (
  `MigrationId` varchar(150) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `ProductVersion` varchar(32) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `__EFMigrationsHistory`
--

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`) VALUES
('20250220111606_CreateDb', '8.0.12');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `AspNetRoleClaims`
--
ALTER TABLE `AspNetRoleClaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`);

--
-- A tábla indexei `AspNetRoles`
--
ALTER TABLE `AspNetRoles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RoleNameIndex` (`NormalizedName`);

--
-- A tábla indexei `AspNetUserClaims`
--
ALTER TABLE `AspNetUserClaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetUserClaims_UserId` (`UserId`);

--
-- A tábla indexei `AspNetUserLogins`
--
ALTER TABLE `AspNetUserLogins`
  ADD PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  ADD KEY `IX_AspNetUserLogins_UserId` (`UserId`);

--
-- A tábla indexei `AspNetUserRoles`
--
ALTER TABLE `AspNetUserRoles`
  ADD PRIMARY KEY (`UserId`,`RoleId`),
  ADD KEY `IX_AspNetUserRoles_RoleId` (`RoleId`);

--
-- A tábla indexei `AspNetUsers`
--
ALTER TABLE `AspNetUsers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  ADD KEY `EmailIndex` (`NormalizedEmail`);

--
-- A tábla indexei `AspNetUserTokens`
--
ALTER TABLE `AspNetUserTokens`
  ADD PRIMARY KEY (`UserId`,`LoginProvider`,`Name`);

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
-- A tábla indexei `__EFMigrationsHistory`
--
ALTER TABLE `__EFMigrationsHistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `AspNetRoleClaims`
--
ALTER TABLE `AspNetRoleClaims`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `AspNetUserClaims`
--
ALTER TABLE `AspNetUserClaims`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT a táblához `hirdetes`
--
ALTER TABLE `hirdetes`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `AspNetRoleClaims`
--
ALTER TABLE `AspNetRoleClaims`
  ADD CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `AspNetUserClaims`
--
ALTER TABLE `AspNetUserClaims`
  ADD CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `AspNetUserLogins`
--
ALTER TABLE `AspNetUserLogins`
  ADD CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `AspNetUserRoles`
--
ALTER TABLE `AspNetUserRoles`
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `AspNetUserTokens`
--
ALTER TABLE `AspNetUserTokens`
  ADD CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE;

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
