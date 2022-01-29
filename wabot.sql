USE wabot;

IF object_id('MessageType', 'U') is null
BEGIN
	CREATE TABLE MessageType (
	    id int,
	    description nvarchar(500)
	);
END

--IF object_id('Message', 'U') is null
--BEGIN
--	CREATE TABLE Message (
--	    id int,
--	    description nvarchar(500)
--	);
--END

--IF object_id('Post', 'U') is null
--BEGIN
--	CREATE TABLE Post (
--	    id int,
--	    description nvarchar(500)
--	);
--END
