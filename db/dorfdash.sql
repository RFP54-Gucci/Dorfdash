DROP DATABASE IF EXISTS dorfdash;
CREATE DATABASE dorfdash;

\c dorfdash

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR (20) NOT NULL
);

CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  event_name VARCHAR (40),
  host VARCHAR (20),
  date VARCHAR (20),
  time VARCHAR (20),
  description VARCHAR (255),
  location VARCHAR (50)
);

CREATE TABLE riders (
  id SERIAL PRIMARY KEY,
  rider_id INTEGER,
  event_id INTEGER,
  driver_id INTEGER,
  location VARCHAR (50),
  phone VARCHAR (10),
  CONSTRAINT "FK_Riders.event_id"
    FOREIGN KEY (event_id)
      REFERENCES events(event_id),
  CONSTRAINT "FK_Riders.rider_id"
    FOREIGN KEY (rider_id)
      REFERENCES users(user_id),
  CONSTRAINT "FK_Riders.driver_id"
    FOREIGN KEY (driver_id)
      REFERENCES users(user_id)
);

CREATE TABLE drivers (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  event_id INTEGER,
  phone VARCHAR (10),
  location VARCHAR (50),
  CONSTRAINT "FK_Drivers.user_id"
    FOREIGN KEY (user_id)
      REFERENCES users(user_id)
);

ALTER DATABASE dorfdash OWNER TO postgres;
