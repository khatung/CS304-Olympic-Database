CREATE DATABASE IF NOT EXISTS olympic;
USE olympic;

CREATE TABLE medalcount (
	gold_medal_count int NOT NULL,
	silver_medal_count int NOT NULL,
	bronze_medal_count int NOT NULL,
	total_medal_count int NOT NULL,
	PRIMARY KEY(gold_medal_count, silver_medal_count, bronze_medal_count),
	CONSTRAINT positive_count CHECK (gold_medal_count >= 0 AND silver_medal_count >= 0 AND bronze_medal_count >= 0 AND total_medal_count >= 0),
	CONSTRAINT sum_correct CHECK (gold_medal_count + silver_medal_count + bronze_medal_count = total_medal_count)
);


CREATE TABLE countrymedal (
	country_name varchar (255) PRIMARY KEY,
	gold_medal_count int NOT NULL,
	silver_medal_count int NOT NULL,
	bronze_medal_count int NOT NULL,
	FOREIGN KEY (gold_medal_count, silver_medal_count, bronze_medal_count) REFERENCES medalcount(gold_medal_count, silver_medal_count, bronze_medal_count) ON DELETE CASCADE
);


CREATE TABLE nationalitycolor (
	nationality varchar(30) PRIMARY KEY,
	colour_red  int NOT NULL,
	colour_green int NOT NULL,
	colour_blue int NOT NULL,
	FOREIGN KEY (nationality) REFERENCES countrymedal(country_name) ON DELETE CASCADE,
	CONSTRAINT colour_min CHECK (colour_red >= 0 AND colour_blue >= 0 AND colour_green >= 0),
	CONSTRAINT colour_max CHECK (colour_red <= 255 AND colour_blue <= 255 AND colour_green <= 255)
);


CREATE TABLE sport (
	sport_id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(255) NOT NULL
);


CREATE TABLE coach (
	coach_id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	age int NOT NULL,
	sex varchar(30) NOT NULL,
	CONSTRAINT check_sex_coach CHECK (sex IN ('Male', 'Female', 'Others', 'N/A')),
	CONSTRAINT check_age_coach CHECK (age >= 18 AND age <= 110)
);


CREATE TABLE participant (
	participant_id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	country varchar (255),
	FOREIGN KEY (country) REFERENCES  nationalitycolor(nationality) ON DELETE CASCADE
); 

CREATE TABLE participantsport (
	participant_id int NOT NULL,
	sport_id int NOT NULL,
	PRIMARY KEY (participant_id, sport_id),
	FOREIGN KEY (participant_id) REFERENCES participant(participant_id) ON DELETE CASCADE,
	FOREIGN KEY (sport_id) REFERENCES sport(sport_id) ON DELETE CASCADE
);


CREATE TABLE mentorship (
	participant_id int NOT NULL,
	coach_id int NOT NULL,
	PRIMARY KEY (participant_id, coach_id),
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id) ON DELETE CASCADE,
	FOREIGN KEY(coach_id) REFERENCES coach(coach_id) ON DELETE CASCADE
);


CREATE TABLE athlete (
	athlete_id int PRIMARY KEY AUTO_INCREMENT,
	age int NOT NULL, 
	sex varchar(30) NOT NULL,
	weight double NOT NULL,
	height double NOT NULL,
	gold_medal_count int,
	silver_medal_count int,
	bronze_medal_count int,
	participant_id int NOT NULL,
	FOREIGN KEY (participant_id) REFERENCES participant(participant_id) ON DELETE CASCADE,
	FOREIGN KEY (gold_medal_count, silver_medal_count, bronze_medal_count) REFERENCES medalcount(gold_medal_count, silver_medal_count, bronze_medal_count) ON DELETE CASCADE,
	CONSTRAINT check_sex_athlete CHECK (sex IN ('Male', 'Female', 'Others', 'N/A')),
	CONSTRAINT check_age_athlete CHECK (age >= 18 AND age <= 110)
);


CREATE TABLE team (
	team_id int PRIMARY KEY AUTO_INCREMENT,
	size int NOT NULL,
	participant_id int NOT NULL,
	FOREIGN KEY (participant_id) REFERENCES participant(participant_id) ON DELETE CASCADE
);


CREATE TABLE partofteam(
	athlete_id int NOT NULL,
	team_id int NOT NULL,
	PRIMARY KEY(athlete_id, team_id),
	FOREIGN KEY(athlete_id) REFERENCES athlete(athlete_id) ON DELETE CASCADE,
	FOREIGN KEY(team_id) REFERENCES team(team_id) ON DELETE CASCADE
);


CREATE TABLE sportevent (
	event_id  int PRIMARY KEY AUTO_INCREMENT,
	name varchar(255) UNIQUE NOT NULL,
	date Date NOT NULL,
	sport_id int NOT NULL,
	FOREIGN KEY (sport_id) REFERENCES sport(sport_id) ON DELETE CASCADE
);
	

CREATE TABLE venue (
	city varchar(25) NOT NULL,
	street varchar(25) NOT NULL,
	zip_code varchar(25) NOT NULL,	
	name varchar(25) NOT NULL,
	PRIMARY KEY(city, street, zip_code) 
);

CREATE TABLE eventvenue (
	city varchar(25) NOT NULL,
	street varchar(25) NOT NULL,
	zip_code varchar(25) NOT NULL,
	event_id int NOT NULL,
	PRIMARY KEY(city, street, zip_code, event_id),
	FOREIGN KEY (city, street, zip_code) REFERENCES venue(city, street, zip_code) ON DELETE CASCADE,
	FOREIGN KEY (event_id) REFERENCES sportevent(event_id) ON DELETE CASCADE
);

CREATE TABLE participatesinevent (
	participant_id int NOT NULL,
	event_id int NOT NULL,
	result_description varchar(255) NOT NULL,
	PRIMARY KEY (participant_id, event_id),
	FOREIGN KEY(participant_id) REFERENCES participant(participant_id) ON DELETE CASCADE,
	FOREIGN KEY(event_id) REFERENCES sportevent(event_id) ON DELETE CASCADE,	
	CONSTRAINT event_result_description CHECK (result_description IN ('Won', 'Lost', 'Draw', 'Disqualified', 'Qualified', 'Not Qualified', 'Withdrew', 'Not Available'))
);

CREATE TABLE user (
	user_id int PRIMARY KEY AUTO_INCREMENT,
	login varchar(25) NOT NULL UNIQUE,
	password varchar(25) NOT NULL,
	permission boolean
);
