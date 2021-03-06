
/****** Object:  Table [dbo].[equipo]    Script Date: 27/6/2022 08:45:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[equipo](
	[idEquipo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](55) NOT NULL,
	[cantNoticias] [int] NOT NULL,
 CONSTRAINT [PK_equipo] PRIMARY KEY CLUSTERED 
(
	[idEquipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[noticia]    Script Date: 27/6/2022 08:45:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[noticia](
	[idNoticia] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](100) NOT NULL,
	[copete] [varchar](255) NOT NULL,
	[cuerpo] [varchar](max) NOT NULL,
	[epigrafe] [varchar](50) NOT NULL,
	[imagen] [varchar](max) NOT NULL,
 CONSTRAINT [PK_noticia] PRIMARY KEY CLUSTERED 
(
	[idNoticia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[noticiaXequipo]    Script Date: 27/6/2022 08:45:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[noticiaXequipo](
	[idEquipo] [int] NOT NULL,
	[idNoticia] [int] NOT NULL,
 CONSTRAINT [PK_noticiaXequipo] PRIMARY KEY CLUSTERED 
(
	[idEquipo] ASC,
	[idNoticia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[noticiaXequipo]  WITH CHECK ADD  CONSTRAINT [FK_noticiaXequipo_equipo] FOREIGN KEY([idEquipo])
REFERENCES [dbo].[equipo] ([idEquipo])
GO
ALTER TABLE [dbo].[noticiaXequipo] CHECK CONSTRAINT [FK_noticiaXequipo_equipo]
GO
ALTER TABLE [dbo].[noticiaXequipo]  WITH CHECK ADD  CONSTRAINT [FK_noticiaXequipo_noticia] FOREIGN KEY([idNoticia])
REFERENCES [dbo].[noticia] ([idNoticia])
GO
ALTER TABLE [dbo].[noticiaXequipo] CHECK CONSTRAINT [FK_noticiaXequipo_noticia]
GO
USE [master]
GO
ALTER DATABASE [Project] SET  READ_WRITE 
GO
