-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: mysql:3306
-- Létrehozás ideje: 2025. Ápr 03. 07:38
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
-- Tábla szerkezet ehhez a táblához `aspnetroleclaims`
--

CREATE TABLE `aspnetroleclaims` (
  `Id` int NOT NULL,
  `RoleId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ClaimType` longtext COLLATE utf8mb4_general_ci,
  `ClaimValue` longtext COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetroles`
--

CREATE TABLE `aspnetroles` (
  `Id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Name` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NormalizedName` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ConcurrencyStamp` longtext COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `aspnetroles`
--

INSERT INTO `aspnetroles` (`Id`, `Name`, `NormalizedName`, `ConcurrencyStamp`) VALUES
('0797dc41-e78a-48e4-a65d-1d88b325fcdf', 'Admin', 'ADMIN', NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetuserclaims`
--

CREATE TABLE `aspnetuserclaims` (
  `Id` int NOT NULL,
  `UserId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ClaimType` longtext COLLATE utf8mb4_general_ci,
  `ClaimValue` longtext COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetuserlogins`
--

CREATE TABLE `aspnetuserlogins` (
  `LoginProvider` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ProviderKey` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ProviderDisplayName` longtext COLLATE utf8mb4_general_ci,
  `UserId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetuserroles`
--

CREATE TABLE `aspnetuserroles` (
  `UserId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `RoleId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `aspnetuserroles`
--

INSERT INTO `aspnetuserroles` (`UserId`, `RoleId`) VALUES
('02bcffd6-4279-4c5d-a190-f97b9873a5d7', '0797dc41-e78a-48e4-a65d-1d88b325fcdf'),
('2df77e72-c1c5-4807-bdc0-7c238477ba0b', '0797dc41-e78a-48e4-a65d-1d88b325fcdf');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetusers`
--

CREATE TABLE `aspnetusers` (
  `Id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Keresztnev` longtext COLLATE utf8mb4_general_ci,
  `Vezeteknev` longtext COLLATE utf8mb4_general_ci,
  `Kor` int DEFAULT NULL,
  `UserName` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NormalizedUserName` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Email` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `NormalizedEmail` varchar(256) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `EmailConfirmed` tinyint(1) NOT NULL,
  `PasswordHash` longtext COLLATE utf8mb4_general_ci,
  `SecurityStamp` longtext COLLATE utf8mb4_general_ci,
  `ConcurrencyStamp` longtext COLLATE utf8mb4_general_ci,
  `PhoneNumber` longtext COLLATE utf8mb4_general_ci,
  `PhoneNumberConfirmed` tinyint(1) NOT NULL,
  `TwoFactorEnabled` tinyint(1) NOT NULL,
  `LockoutEnd` datetime DEFAULT NULL,
  `LockoutEnabled` tinyint(1) NOT NULL,
  `AccessFailedCount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `aspnetusers`
--

INSERT INTO `aspnetusers` (`Id`, `Keresztnev`, `Vezeteknev`, `Kor`, `UserName`, `NormalizedUserName`, `Email`, `NormalizedEmail`, `EmailConfirmed`, `PasswordHash`, `SecurityStamp`, `ConcurrencyStamp`, `PhoneNumber`, `PhoneNumberConfirmed`, `TwoFactorEnabled`, `LockoutEnd`, `LockoutEnabled`, `AccessFailedCount`) VALUES
('02005282-de1b-4307-81a9-5b77d8a23d80', 'Dániel', 'Disznós', 38, 'DisznosDani', 'DISZNOSDANI', 'disznosdani@gmail.com', 'DISZNOSDANI@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEJWhVWvxCZ5+6ryMU2zDkjd+gqAhqF0m1geC0AIBLBxoqaYj/oz4A1WA4jiBJ7X6Zg==', 'SXITRAIRWA7IHA6VBP4V6WJSGZFF4C7S', 'a4c29041-6e6d-4795-a39d-7c1b0d40a48b', NULL, 0, 0, NULL, 1, 0),
('02bcffd6-4279-4c5d-a190-f97b9873a5d7', 'Admin', 'Admin', 20, 'Admin', 'ADMIN', 'admin@admin.com', 'ADMIN@ADMIN.COM', 0, 'AQAAAAIAAYagAAAAENC7gTR11aAywGsPM8Pw11qBfNIpeebvNTEb09IpRsEdv7lH1+FmTkYGUJPpFogIRw==', 'JVQMAYFH37UXI27HT6MMM4TMPEVUPRTU', '99756ceb-9c98-45d8-8441-aa0052bb2756', NULL, 0, 0, NULL, 1, 0),
('059f4c1d-a92b-4334-8488-d2563b28a8bf', 'Gábor', 'Gabonás', 36, 'GabonasGabi', 'GABONASGABI', 'gabonasgabi@gmail.com', 'GABONASGABI@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEMThjVMjW7cA7XvfklgzXp77/SejJuJ/S2KfuDlx7L1M2SOACkHtr+bW18XXuP/EaA==', 'WFP3LSXI7RQUOQ25MRWHOCKEHV67ZXH7', '209c4cfb-9537-4433-8556-d56583127c23', NULL, 0, 0, NULL, 1, 0),
('261cc2e8-b817-4c57-9d6f-0d994c2a9b2f', 'Valamkinrj', 'sdfdg', 55, 'VAlaki', 'VALAKI', 'valaki@gmail.com', 'VALAKI@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEKMLydxbyDHB47dqWviIqp93GVJOaoKdcx0xvNCywHOHE+lpmHM06NM/J+u2o9lP7g==', 'CNDDMHWIPXI34RR5KJX4TL2XDKNK346Q', 'aa794383-1247-4088-8e4a-0144220099db', NULL, 0, 0, NULL, 1, 0),
('2df77e72-c1c5-4807-bdc0-7c238477ba0b', 'Almafa', 'Ága', 20, 'Alma', 'ALMA', 'alma@gmail.com', 'ALMA@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEDZt6iGOUMB5yn8N2BmQ/yOFqJlDbSiuIl3RSbLG7wdJOQ28d2Mlc126vrB/S7Z6eA==', 'M5KNT5BP37UVGUZ2I2S6EN7ZNJQ5XYSY', '67f2bd75-72b0-475c-aa75-e50d2ab08c0c', NULL, 0, 0, NULL, 1, 0),
('5dcb0c0a-5819-4dfd-920a-c3a09f09f11b', 'Enikő', 'Hajas', 32, 'Tacsi', 'TACSI', 'tacsipacsi@gmail.com', 'TACSIPACSI@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAECc17KFG/eiTb299xKI210PtgslKkHtUg+CCuXz3aF0B6/A9rpyQ+ZfdDoH+Ids7SA==', 'BYGPBZBJ7RM7GZI5F6X6L6LLNEFWXMID', '09c5edd7-b6ca-4cfa-8e40-b19072175431', NULL, 0, 0, NULL, 1, 0),
('5f16efd0-6b85-4da6-a39e-ddccb339287a', 'József', 'Juhász', 60, 'JuhaszJauozsi', 'JUHASZJAUOZSI', 'juhaszjozsi@freemail.hu', 'JUHASZJOZSI@FREEMAIL.HU', 0, 'AQAAAAIAAYagAAAAEOF/jf+r4HZX0qoLun9mJ0UMCVuVSziDl73MXq8arNEEHltbbeqO13w6bC9uiiHynA==', '6GI4IJFUWWETOFGTFGZLNM5J3Z3HVKZG', '9c87007c-771e-43f0-a8b8-99b2909c65e5', NULL, 0, 0, NULL, 1, 0),
('7c641063-5576-46e8-9aa9-fa394a37b8c9', 'Karesz', 'Kombajn', 47, 'KombajnKaresz', 'KOMBAJNKARESZ', 'karesz.kombajn@gmail.com', 'KARESZ.KOMBAJN@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEKgZAL94Fn4xTJVuc3x3gZLu5escGPFZzlFpZ3CVMJFIeEGdP2zeuZI8IYJ9Lkqc4A==', '7UVJSFNRUYH4DJ22NAE2EEIPYU6OZVLO', '15c84226-27a9-499d-b5ec-cc0f0bc9d1d9', NULL, 0, 0, NULL, 1, 0),
('80ea5fc3-39c1-4cd8-a7b9-c7c5111c0539', 'Tamás', 'Tehenes', 45, 'TehenesTomi', 'TEHENESTOMI', 'tehenestomi@gmail.hu', 'TEHENESTOMI@GMAIL.HU', 0, 'AQAAAAIAAYagAAAAEC/9pGeT99Jj1Rew/IATiapHNjcakd0dkM1TwGlcHORGfr6lQjjyZjaiZ2516DmxyA==', '5BNYKFMEEF25PJJ44Q6WR3AGUR5XBGHN', 'f11c2ff7-8247-4a9e-9d6e-3be36e9d7a07', NULL, 0, 0, NULL, 1, 0),
('84bb70a3-2d02-4187-ae2b-9cdcd2cd5de4', 'Márk', 'Krizsán', 19, 'krzsnrk', 'KRZSNRK', 'krizsanm@gmail.com', 'KRIZSANM@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEHUd9cgBsSXRKxmWtJ6K5RLsCJq1QmppaZGx5LX5JKS2q4In3C++bS1+2nEnbIs5iw==', 'OFQHWSX2TZW7QPT5MS27JZW5O7OPLR3U', '433032ac-eb77-45d7-9d00-815f1de0a798', NULL, 0, 0, NULL, 1, 0),
('8b0ca52a-252d-425a-9099-c6f42aaaf336', 'László', 'Kaszás', 48, 'KaszasLaci', 'KASZASLACI', 'kaszas.laci@gmail.com', 'KASZAS.LACI@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAELsYR5mR69iJ+jo0AR3P+nHpdBjosf957fNLSEZnv0eTCqYMHuA32U1sJruHWa5OYw==', 'CP6D5AZNJ7XGQH7MTLBEB2HROYBCNROZ', '828ccc7e-96ed-4405-a4ce-5c80770bfcba', NULL, 0, 0, NULL, 1, 0),
('90c2b6ef-4183-4269-a992-cd3cb19af3e6', 'Béla', 'Borász', 59, 'Boraszba', 'BORASZBA', 'boraszbela@gmail.com', 'BORASZBELA@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEDA7rrRChwtukfneZoFiY5e/BLVxmpLxE4ZDSgkVsx2SiLxe8kAx9vY3x4pxHoUWyA==', '64FGQ44QYA4MU2WMKEFTB3FQQ3EN55ZY', '994b0f84-9c42-46f0-bdc7-7f5b285b061e', NULL, 0, 0, NULL, 1, 0),
('9bb156e4-2d2e-481d-b612-2a4a3951d200', 'Bence', 'Baromfis', 30, 'BaromfisBence', 'BAROMFISBENCE', 'baromfisbence@gmail.com', 'BAROMFISBENCE@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEFGdlXzKepZmypZd6k09jkigdkbUNN+7WaNZOAhc2UDK4QY4BeCKsx2FPnXN9tD/fA==', 'K453JDOJOUPCJS5CSIMFDMGXIQYASXYZ', 'a371ce1a-3324-4c37-aad5-dac2abae7249', NULL, 0, 0, NULL, 1, 0),
('a30c7159-389b-4628-8256-4b05dc900c8b', 'Márton', 'Mézes', 41, 'MezesMarci', 'MEZESMARCI', 'mezesmarci@gmail.com', 'MEZESMARCI@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAECgCLTwuSRCHgFVAyEpMovUg80kqog+QB1jfDUCUhzq/7WU+bDbUhCsQZhHwsf0kiw==', 'CG4P7VX2XOZYEVZMUO7CXJRAMG3LHTGX', '544e6c07-0824-4760-ba41-93a43ac54cfb', NULL, 0, 0, NULL, 1, 0),
('c64569ef-2ba9-4981-86a6-102ad2707438', 'István', 'Permetező', 44, 'PermetezoPista', 'PERMETEZOPISTA', 'permetezopista@citromail.hu', 'PERMETEZOPISTA@CITROMAIL.HU', 0, 'AQAAAAIAAYagAAAAEDg5OUCl3OC39nDNL8H7j9YLxvSZJFPkGcj4TbnJqN+983qjb6WXyNLBJifqkqCZYQ==', 'I5BQR7LAALRHDYP5K2SGEDY7GSGLNXQF', '42b74c54-a51a-4a7d-866b-fe87bb21271a', NULL, 0, 0, NULL, 1, 0),
('d4fdf283-04f0-414b-9ca7-9ab9166021d9', 'Józsi', 'Akna', 24, 'Senky', 'SENKY', 'seni@gmnail.com', 'SENI@GMNAIL.COM', 0, 'AQAAAAIAAYagAAAAEMwKwbwtMCp2MIpwfARHmDCVhBU2c1iKH46OoqCrUS4ND4TWo+rXew0AmMPL97di0A==', 'IIE6VP7IR5W7YE5Q2UV6E2EH66ESFGHR', '4e554660-0ae2-4ab2-9a0e-2884ff913999', NULL, 0, 0, NULL, 1, 0),
('d85925dc-dfc6-47ee-af0b-27aa71c8f4e9', 'Taki', 'Traktor', 53, 'Traktorfiu', 'TRAKTORFIU', 'Traktorfiu@gmail.com', 'TRAKTORFIU@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEOHof+31uJDNFfJ1PPULIl6JWIVi7iLkRTzgZb/IX2p6XuU+zSRqNalpGa0Vi4grgA==', 'BRSYP3DMSPJANTKCF7XEDYRQ3CFBGERE', 'fbb656b7-1144-4e66-9196-33b07c318196', NULL, 0, 0, NULL, 1, 0),
('ec919da6-70a7-42a6-875e-40560eb67dc0', 'Ferenc', 'Szőlős', 50, 'SzolosFero', 'SZOLOSFERO', 'szolosfero@gmail.com', 'SZOLOSFERO@GMAIL.COM', 0, 'AQAAAAIAAYagAAAAEJmXJuDYK8hQBSJWz39ZDOgJzQEgOGZXCORwsnzUUEO4O5x0p8ZId8zxP8PzMoR2SQ==', 'VGR6CLXZ7QBQPLXP7CKZNYFUDUV2X2UP', '36a72bae-8518-4031-ae3d-0bfeccd7a015', NULL, 0, 0, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `aspnetusertokens`
--

CREATE TABLE `aspnetusertokens` (
  `UserId` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `LoginProvider` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Value` longtext COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hirdetes`
--

CREATE TABLE `hirdetes` (
  `ID` char(36) COLLATE utf8mb4_general_ci NOT NULL,
  `FelhasznaloID` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Hirdetesnev` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Leiras` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `Ar` int NOT NULL,
  `Elerhetoseg` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Orszag` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Varmegye` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Telepules` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Tipus` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Kiadasiidotartam` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Gyerekbarat` tinyint(1) NOT NULL,
  `Allatbarat` tinyint(1) NOT NULL,
  `Utca` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Hazszam` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ImageData` longblob NOT NULL,
  `FileName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ContentType` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `hirdetes`
--

INSERT INTO `hirdetes` (`ID`, `FelhasznaloID`, `Hirdetesnev`, `Leiras`, `Ar`, `Elerhetoseg`, `Orszag`, `Varmegye`, `Telepules`, `Tipus`, `Kiadasiidotartam`, `Gyerekbarat`, `Allatbarat`, `Utca`, `Hazszam`, `ImageData`, `FileName`, `ContentType`) VALUES
('2136a830-b298-458c-991b-1a03fc5fd446', 'a30c7159-389b-4628-8256-4b05dc900c8b', 'Panorámás lakás erkéllyel', 'Kiadó modern lakás erkéllyel és panorámás kilátással.', 32000000, '+36 70 999 8888', 'Magyarország', 'Győr-Moson-Sopron', 'Győr', 'lakás', '7', 1, 0, 'Bartók Béla út', '21', '', '', ''),
('384920bc-caa0-4c76-8543-c76407918457', '261cc2e8-b817-4c57-9d6f-0d994c2a9b2f', 'string', 'string', 5500, 'string', 'string', 'string', 'string', 'string', 'string', 1, 1, NULL, NULL, '', '', ''),
('3f383177-2b45-4028-b224-2b284bda875d', '2df77e72-c1c5-4807-bdc0-7c238477ba0b', 'Alma', 'Alma', 25544, 'Alma', 'Alma', 'Alma', 'Alma', 'stAlmaring', 'Alma', 1, 1, NULL, NULL, '', '', ''),
('7a4fc073-077f-4229-b87c-f6d5a26c0fed', '02bcffd6-4279-4c5d-a190-f97b9873a5d7', 'Vidéki ház gyümölcsöskerttel', 'Hangulatos vidéki ház eladó, nagy kerttel és gyümölcsfákkal.', 48000000, '+36 70 888 9999', 'Magyarország', 'Somogy', 'Kaposvár', 'ház', '7', 1, 1, 'Rózsa utca', '16', '', '', ''),
('a16b5718-cf48-4b3e-adb3-b51bf6fa5259', 'd85925dc-dfc6-47ee-af0b-27aa71c8f4e9', 'Kiadó szoba fiataloknak', 'Albérletként kiadó egy külön bejáratú szoba diákoknak vagy fiatal dolgozóknak.', 90000, '+36 20 666 7777', 'Magyarország', 'Hajdú-Bihar', 'Debrecen', 'szoba', '6', 0, 0, 'Kossuth tér', '7', '', '', ''),
('a3e6c457-c1f7-43ac-afe6-2ce54be131ab', 'c64569ef-2ba9-4981-86a6-102ad2707438', 'Csendes családi ház kerttel', 'Felújított családi ház nagy kerttel, csendes környéken.', 67000000, '+36 30 222 3333', 'Magyarország', 'Fejér', 'Székesfehérvár', 'ház', '24', 1, 1, 'Arany János utca', '14', '', '', ''),
('b55005ee-dac7-44f2-b896-c23082836cb6', '02005282-de1b-4307-81a9-5b77d8a23d80', 'Családi ház kerttel', 'Tágas családi ház kerttel és garázzsal a város szélén.', 75000000, '+36 30 123 4567', 'Magyarország', 'Pest', 'Gödöllő', 'ház', '5', 1, 1, 'Kossuth Lajos utca', '12', '', '', ''),
('ebd5cd88-18d4-402a-9f37-f28ea0baf7c5', '80ea5fc3-39c1-4cd8-a7b9-c7c5111c0539', 'Balatoni nyaraló', 'Nyaralónak is kiváló, csendes kis ház a Balaton partján.', 92000000, '+36 30 654 3210', 'Magyarország', 'Veszprém', 'Balatonfüred', 'ház', '12', 1, 1, 'Tópart utca', '8', '', '', ''),
('eff6a86a-0b05-41df-a69f-282d23ae47f7', '059f4c1d-a92b-4334-8488-d2563b28a8bf', 'Felújított belvárosi lakás', 'Modern, felújított lakás a belváros szívében, közel a metróhoz.', 55000000, '+36 70 456 7890', 'Magyarország', 'Budapest', 'Budapest', 'lakás', '3', 1, 0, 'Andrássy út', '33', '', '', ''),
('f0be827b-53e2-4668-8cb9-b15c7b5ee4b0', 'ec919da6-70a7-42a6-875e-40560eb67dc0', 'Panorámás lakás a hegyekben', 'Kiadó panorámás lakás a hegyekben, tökéletes pihenésre vagy munkára.', 41000000, '+36 30 777 8888', 'Magyarország', 'Heves', 'Eger', 'lakás', '36', 1, 1, 'Dobó István tér', '5', '', '', ''),
('f4e5664c-9220-41c6-bf28-745708f26d1c', 'd4fdf283-04f0-414b-9ca7-9ab9166021d9', 'Új építésű lakás a Duna-parton', 'Új építésű lakás kiadó a Duna-part közelében, modern berendezéssel.', 62000000, '+36 70 555 4444', 'Magyarország', 'Budapest', 'Budapest', 'lakás', '2', 1, 0, 'Váci út', '99', '', '', ''),
('f9de66b9-c71e-4220-a2c2-5c990c138e07', '5dcb0c0a-5819-4dfd-920a-c3a09f09f11b', 'Bútorozott kiadó szoba', 'Kiadó egy bútorozott szoba egy fiatal dolgozó vagy diák számára.', 85000, '+36 20 789 1234', 'Magyarország', 'Borsod-Abaúj-Zemplén', 'Miskolc', 'szoba', '8', 0, 0, 'Petőfi Sándor utca', '5', '', '', '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `ProductVersion` varchar(32) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetRoleClaims_RoleId` (`RoleId`);

--
-- A tábla indexei `aspnetroles`
--
ALTER TABLE `aspnetroles`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `RoleNameIndex` (`NormalizedName`);

--
-- A tábla indexei `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IX_AspNetUserClaims_UserId` (`UserId`);

--
-- A tábla indexei `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD PRIMARY KEY (`LoginProvider`,`ProviderKey`),
  ADD KEY `IX_AspNetUserLogins_UserId` (`UserId`);

--
-- A tábla indexei `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD PRIMARY KEY (`UserId`,`RoleId`),
  ADD KEY `IX_AspNetUserRoles_RoleId` (`RoleId`);

--
-- A tábla indexei `aspnetusers`
--
ALTER TABLE `aspnetusers`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `UserNameIndex` (`NormalizedUserName`),
  ADD KEY `EmailIndex` (`NormalizedEmail`);

--
-- A tábla indexei `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD PRIMARY KEY (`UserId`,`LoginProvider`,`Name`);

--
-- A tábla indexei `hirdetes`
--
ALTER TABLE `hirdetes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FelhasznaloID` (`FelhasznaloID`);

--
-- A tábla indexei `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `aspnetroleclaims`
--
ALTER TABLE `aspnetroleclaims`
  ADD CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetuserclaims`
--
ALTER TABLE `aspnetuserclaims`
  ADD CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetuserlogins`
--
ALTER TABLE `aspnetuserlogins`
  ADD CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetuserroles`
--
ALTER TABLE `aspnetuserroles`
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `aspnetroles` (`Id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `aspnetusertokens`
--
ALTER TABLE `aspnetusertokens`
  ADD CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE;

--
-- Megkötések a táblához `hirdetes`
--
ALTER TABLE `hirdetes`
  ADD CONSTRAINT `hirdetes_ibfk_1` FOREIGN KEY (`FelhasznaloID`) REFERENCES `aspnetusers` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
