DROP DATABASE IF EXISTS dorfdash;
CREATE DATABASE dorfdash;

\c dorfdash

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR (20) NOT NULL,
  email VARCHAR (40) UNIQUE NOT NULL
);

CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  event_name VARCHAR (40) UNIQUE,
  host_email VARCHAR (40),
  date VARCHAR (20),
  time VARCHAR (20),
  description VARCHAR (255),
  location VARCHAR (50)
);

CREATE TABLE riders (
  id SERIAL PRIMARY KEY,
  rider_email VARCHAR (40) UNIQUE,
  event_name VARCHAR (40),
  driver_email VARCHAR (40) DEFAULT NULL,
  location VARCHAR (50),
  phone VARCHAR (10),
  CONSTRAINT "FK_Riders.event_name"
    FOREIGN KEY (event_name)
      REFERENCES events(event_name),
  CONSTRAINT "FK_Riders.rider_email"
    FOREIGN KEY (rider_email)
      REFERENCES users(email),
  CONSTRAINT "FK_Riders.driver_email"
    FOREIGN KEY (driver_email)
      REFERENCES users(email)
);

CREATE TABLE drivers (
  id SERIAL PRIMARY KEY,
  driver_email VARCHAR (40) UNIQUE,
  event_name VARCHAR (40),
  phone VARCHAR (10),
  location VARCHAR (50),
  vehicle_info VARCHAR (50),
  CONSTRAINT "FK_Drivers.driver_email"
    FOREIGN KEY (driver_email)
      REFERENCES users(email)
);

ALTER DATABASE dorfdash OWNER TO postgres;
