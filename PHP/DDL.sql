-- Data Definition Queries
-- table for user login, can be admin or subscriber

CREATE TABLE IF NOT EXISTS NewUser (
    userID SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    phoneNum varchar(20) NOT NULL,
    preferences varchar(255),
    status varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Appointments (
    aptID SERIAL PRIMARY KEY,
    userID int DEFAULT NULL,
    service varchar(100) NOT NULL,
    timeSlot timestamp NOT NULL,
    FOREIGN KEY(userID) REFERENCES NewUser
);

CREATE TABLE IF NOT EXISTS ProductBacklog (
    backlogID SERIAL PRIMARY KEY,
    productName varchar(255) NOT NULL,
    type varchar(255) NOT NULL,
    purchasePrice int NOT NULL,
    sellingPrice int NOT NULL
);

CREATE TABLE IF NOT EXISTS Sales (
    salesID SERIAL PRIMARY KEY,
    total int
);

INSERT INTO NewUser (
    name,
    email,
    phoneNum,
    preferences,
    status )
VALUES
('Meagan Welch', 'megrosewel@gmail.com', '360-556-1083', 'no', 'admin' );

-- Inserts sample data for jobID, jobName, and description into
-- the Jobs table.
INSERT INTO Appointments (userID, service, timeSlot )
VALUES
('1', 'Balayage', '2024-04-16 08:00:00');
