CREATE LOGIN [Siele] WITH PASSWORD=N'Siele', DEFAULT_DATABASE=[Project], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [Project]
GO
CREATE USER [Project] FOR LOGIN [Siele]
GO
USE [Project]
GO
ALTER ROLE [db_owner] ADD MEMBER [Siele]
GO