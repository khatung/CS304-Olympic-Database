INSERT INTO medalcount VALUES (0, 0, 0, 0);
INSERT INTO medalcount VALUES (0, 0, 1, 1);
INSERT INTO medalcount VALUES (0, 0, 2, 2);
INSERT INTO medalcount VALUES (0, 1, 0, 1);
INSERT INTO medalcount VALUES (0, 1, 1, 2);
INSERT INTO medalcount VALUES (0, 1, 2, 3);
INSERT INTO medalcount VALUES (0, 2, 0, 2);
INSERT INTO medalcount VALUES (0, 2, 1, 3);
INSERT INTO medalcount VALUES (0, 2, 2, 4);
INSERT INTO medalcount VALUES (1, 0, 0, 1);
INSERT INTO medalcount VALUES (1, 0, 1, 2);
INSERT INTO medalcount VALUES (1, 0, 2, 3);
INSERT INTO medalcount VALUES (1, 1, 0, 2);
INSERT INTO medalcount VALUES (1, 1, 1, 3);
INSERT INTO medalcount VALUES (1, 1, 2, 4);
INSERT INTO medalcount VALUES (1, 2, 0, 3);
INSERT INTO medalcount VALUES (1, 2, 1, 4);
INSERT INTO medalcount VALUES (1, 2, 2, 5);
INSERT INTO medalcount VALUES (2, 0, 0, 2);
INSERT INTO medalcount VALUES (2, 0, 1, 3);
INSERT INTO medalcount VALUES (2, 0, 2, 4);
INSERT INTO medalcount VALUES (2, 1, 0, 3);
INSERT INTO medalcount VALUES (2, 1, 1, 4);
INSERT INTO medalcount VALUES (2, 1, 2, 5);
INSERT INTO medalcount VALUES (2, 2, 0, 4);
INSERT INTO medalcount VALUES (2, 2, 1, 5);
INSERT INTO medalcount VALUES (2, 2, 2, 6);

INSERT INTO countrymedal VALUES ('United-States', 2, 2, 2);
INSERT INTO countrymedal VALUES ('Great-Britain', 1, 2, 2);
INSERT INTO countrymedal VALUES ('China', 1, 2, 1);
INSERT INTO countrymedal VALUES ('Russia', 1, 1, 2);
INSERT INTO countrymedal VALUES ('Germany', 1, 0, 1);

INSERT INTO nationalitycolor VALUES ('United-States', 2, 136, 209);
INSERT INTO nationalitycolor VALUES ('Great-Britain', 13, 71, 161);
INSERT INTO nationalitycolor VALUES ('China', 255, 23, 68);
INSERT INTO nationalitycolor VALUES ('Russia', 211, 47, 47);
INSERT INTO nationalitycolor VALUES ('Germany', 251, 192, 45);

INSERT INTO sport VALUES (1, 'Shooting');
INSERT INTO sport VALUES (2, 'Swimming');
INSERT INTO sport VALUES (3, 'Volleyball');

INSERT INTO coach VALUES (1, 'William Smith', 45, 'Male');
INSERT INTO coach VALUES (2, 'Jacob Davis', 50, 'Male');
INSERT INTO coach VALUES (3, 'Eva Jones', 45, 'Female');

INSERT INTO participant VALUES (1, 'Sophia Jones', 'United-States');
INSERT INTO participant VALUES (2, 'United-States-Volleyball-Male-Team', 'United-States');
INSERT INTO participant VALUES (3, 'Mason Miller', 'United-States');
INSERT INTO participant VALUES (4, 'Noah Brown', 'United-States');
INSERT INTO participant VALUES (5, 'Aiden Davis', 'United-States');
INSERT INTO participant VALUES (6, 'Joshua Wilson', 'United-States');
INSERT INTO participant VALUES (7, 'Liam Miller', 'United-States');
INSERT INTO participant VALUES (8, 'Andrew Smith', 'United-States');
INSERT INTO participant VALUES (9, 'Grace Wilson', 'United-States');

INSERT INTO participantsport VALUES (1, 1);
INSERT INTO participantsport VALUES (2, 3);
INSERT INTO participantsport VALUES (3, 3);
INSERT INTO participantsport VALUES (4, 3);
INSERT INTO participantsport VALUES (5, 3);
INSERT INTO participantsport VALUES (6, 3);
INSERT INTO participantsport VALUES (7, 3);
INSERT INTO participantsport VALUES (8, 3);
INSERT INTO participantsport VALUES (9, 2);


INSERT INTO mentorship VALUES (1, 1);
INSERT INTO mentorship VALUES (2, 2);
INSERT INTO mentorship VALUES (9, 3);

INSERT INTO athlete VALUES(1, 25, 'Female', 56, 180, 0, 0, 0, 1);
INSERT INTO athlete VALUES(2, 29, 'Male', 75, 181, 0, 0, 0, 3);
INSERT INTO athlete VALUES(3, 30, 'Male', 78, 185, 0, 0, 0, 4);
INSERT INTO athlete VALUES(4, 32, 'Male', 68, 175, 0, 0, 0, 5);
INSERT INTO athlete VALUES(5, 28, 'Male', 85, 190, 0, 0, 0, 6);
INSERT INTO athlete VALUES(6, 27, 'Male', 68, 176, 0, 0, 0, 7);
INSERT INTO athlete VALUES(7, 31, 'Male', 73, 182, 0, 0, 0, 8);
INSERT INTO athlete VALUES(8, 27, 'Female', 55, 177, 0, 0, 0, 9);

INSERT INTO team VALUES (1, 6, 2);

INSERT INTO partofteam VALUES (2, 1);
INSERT INTO partofteam VALUES (3, 1);
INSERT INTO partofteam VALUES (4, 1);
INSERT INTO partofteam VALUES (5, 1);
INSERT INTO partofteam VALUES (6, 1);
INSERT INTO partofteam VALUES (7, 1);



INSERT INTO coach VALUES (6, 'Albert Robinson', 50, 'Male');
INSERT INTO coach VALUES (7, 'Isabella Stevenson', 48, 'Female');
INSERT INTO coach VALUES (8, 'Jessica Harris', 45, 'Female');
INSERT INTO coach VALUES (9, 'Thomas Hastings', 52, 'Male');
INSERT INTO coach VALUES (10, 'Leo Lewis', 51, 'Male');

INSERT INTO participant VALUES (10, 'Great-Britain-Volleyball-Male-Team', 'Great-Britain');
INSERT INTO participant VALUES (11, 'Hugo Adams', 'Great-Britain');
INSERT INTO participant VALUES (12, 'Leo Wilson', 'Great-Britain');
INSERT INTO participant VALUES (13, 'John Burton', 'Great-Britain');
INSERT INTO participant VALUES (14, 'Thomas Lewis', 'Great-Britain');
INSERT INTO participant VALUES (15, 'Rex Payne', 'Great-Britain');
INSERT INTO participant VALUES (16, 'Wilfred Walker', 'Great-Britain');
INSERT INTO participant VALUES (17, 'Grais Bridget', 'Great-Britain');
INSERT INTO participant VALUES (18, 'Rose Harper', 'Great-Britain');

INSERT INTO participantsport VALUES (10, 3);
INSERT INTO participantsport VALUES (11, 3);
INSERT INTO participantsport VALUES (12, 3);
INSERT INTO participantsport VALUES (13, 3);
INSERT INTO participantsport VALUES (14, 3);
INSERT INTO participantsport VALUES (15, 3);
INSERT INTO participantsport VALUES (16, 3);
INSERT INTO participantsport VALUES (17, 1);
INSERT INTO participantsport VALUES (18, 2);
INSERT INTO participantsport VALUES (14, 1);
INSERT INTO participantsport VALUES (14, 2);

INSERT INTO mentorship VALUES (10, 6);
INSERT INTO mentorship VALUES (14, 9);
INSERT INTO mentorship VALUES (14, 10);
INSERT INTO mentorship VALUES (17, 8);
INSERT INTO mentorship VALUES (18, 7);

INSERT INTO athlete VALUES(9, 35, 'Male', 78, 184, 0, 0, 0, 11);
INSERT INTO athlete VALUES(10, 33, 'Male', 68, 174, 0, 0, 0, 12);
INSERT INTO athlete VALUES(11, 29, 'Male', 85, 188, 0, 0, 0, 13);
INSERT INTO athlete VALUES(12, 29, 'Male', 68, 174, 0, 0, 0, 14);
INSERT INTO athlete VALUES(13, 30, 'Male', 73, 180, 0, 0, 0, 15);
INSERT INTO athlete VALUES(14, 33, 'Male', 75, 185, 0, 0, 0, 16);
INSERT INTO athlete VALUES(15, 25, 'Female', 65, 176, 0, 0, 0, 17);
INSERT INTO athlete VALUES(16, 21, 'Female', 55, 177, 0, 0, 0, 18);

INSERT INTO team VALUES (2, 6, 10);

INSERT INTO partofteam VALUES (9, 2);
INSERT INTO partofteam VALUES (10, 2);
INSERT INTO partofteam VALUES (11, 2);
INSERT INTO partofteam VALUES (12, 2);
INSERT INTO partofteam VALUES (13, 2);
INSERT INTO partofteam VALUES (14, 2);



INSERT INTO coach VALUES (11, 'Fai Wu', 45, 'Male');
INSERT INTO coach VALUES (12, 'Ninhong Yijun', 47, 'Female');
INSERT INTO coach VALUES (13, 'Xiurong Dan', 65, 'Female');

INSERT INTO participant VALUES (19, 'Jin Lo', 'China');
INSERT INTO participant VALUES (20, 'Lihua Hsu', 'China');
INSERT INTO participant VALUES (21, 'Tung Zhou', 'China');
INSERT INTO participant VALUES (22, 'Hop Kai-shek', 'China');
INSERT INTO participant VALUES (23, 'Daiyu Dan', 'China');
INSERT INTO participant VALUES (24, 'Renxiang Kuo', 'China');

INSERT INTO participantsport VALUES (19, 1);
INSERT INTO participantsport VALUES (20, 1);
INSERT INTO participantsport VALUES (21, 2);
INSERT INTO participantsport VALUES (22, 2);
INSERT INTO participantsport VALUES (23, 2);
INSERT INTO participantsport VALUES (24, 2);

INSERT INTO mentorship VALUES (19, 11);
INSERT INTO mentorship VALUES (20, 12);
INSERT INTO mentorship VALUES (21, 13);
INSERT INTO mentorship VALUES (22, 13);
INSERT INTO mentorship VALUES (23, 13);
INSERT INTO mentorship VALUES (24, 13);

INSERT INTO athlete VALUES(17, 25, 'Male', 70, 168, 0, 0, 0, 19);
INSERT INTO athlete VALUES(18, 27, 'Female', 55, 150, 0, 0, 0, 20);
INSERT INTO athlete VALUES(19, 26, 'Male', 75, 172, 0, 0, 0, 21);
INSERT INTO athlete VALUES(20, 21, 'Male', 70, 165, 0, 0, 0, 22);
INSERT INTO athlete VALUES(21, 22, 'Female', 57, 155, 0, 0, 0, 23);
INSERT INTO athlete VALUES(22, 23, 'Female', 56, 160, 0, 0, 0, 24);


INSERT INTO coach VALUES (14, 'Misalov Zakharovich', 91, 'Male');
INSERT INTO coach VALUES (15, 'Markin Kruschchev', 75, 'Male');
INSERT INTO coach VALUES (16, 'Dasha Semenov', 57, 'Female');

INSERT INTO participant VALUES (25, 'Russia-Volleyball-Male-Team', 'Russia');
INSERT INTO participant VALUES (26, 'Georgi Tarasovna', 'Russia');
INSERT INTO participant VALUES (27, 'Alexi Orlov', 'Russia');
INSERT INTO participant VALUES (28, 'Nikolai Andreevna', 'Russia');
INSERT INTO participant VALUES (29, 'Fyodor Andreevna', 'Russia');
INSERT INTO participant VALUES (30, 'Vladimir Semenov', 'Russia');
INSERT INTO participant VALUES (31, 'Aleksander Savelievich', 'Russia');
INSERT INTO participant VALUES (32, 'Boris Vasiliev', 'Russia');
INSERT INTO participant VALUES (33, 'Aleksandra Gorvachev', 'Russia');
INSERT INTO participant VALUES (34, 'Serpionova Stepanov', 'Russia');

INSERT INTO participantsport VALUES (25, 3);
INSERT INTO participantsport VALUES (26, 3);
INSERT INTO participantsport VALUES (27, 3);
INSERT INTO participantsport VALUES (28, 3);
INSERT INTO participantsport VALUES (29, 3);
INSERT INTO participantsport VALUES (30, 3);
INSERT INTO participantsport VALUES (31, 3);
INSERT INTO participantsport VALUES (32, 1);
INSERT INTO participantsport VALUES (33, 2);
INSERT INTO participantsport VALUES (33, 1);
INSERT INTO participantsport VALUES (34, 1);
INSERT INTO participantsport VALUES (27, 1);
INSERT INTO participantsport VALUES (27, 2);

INSERT INTO mentorship VALUES (25, 14);
INSERT INTO mentorship VALUES (32, 15);
INSERT INTO mentorship VALUES (33, 15);
INSERT INTO mentorship VALUES (24, 15);
INSERT INTO mentorship VALUES (27, 15);
INSERT INTO mentorship VALUES (33, 16);
INSERT INTO mentorship VALUES (27, 16);

INSERT INTO athlete VALUES(23, 29, 'Male', 80, 180, 0, 0, 0, 26);
INSERT INTO athlete VALUES(24, 32, 'Male', 88, 188, 0, 0, 0, 27);
INSERT INTO athlete VALUES(25, 32, 'Male', 82, 182, 0, 0, 0, 28);
INSERT INTO athlete VALUES(26, 28, 'Male', 89, 189, 0, 0, 0, 29);
INSERT INTO athlete VALUES(27, 34, 'Male', 83, 183, 0, 0, 0, 30);
INSERT INTO athlete VALUES(28, 39, 'Male', 87, 187, 0, 0, 0, 31);
INSERT INTO athlete VALUES(29, 38, 'Male', 85, 185, 0, 0, 0, 32);
INSERT INTO athlete VALUES(30, 22, 'Female', 78, 178, 0, 0, 0, 33);
INSERT INTO athlete VALUES(31, 27, 'Female', 79, 179, 0, 0, 0, 34);

INSERT INTO team VALUES (3, 6, 25);

INSERT INTO partofteam VALUES (26, 3);
INSERT INTO partofteam VALUES (27, 3);
INSERT INTO partofteam VALUES (28, 3);
INSERT INTO partofteam VALUES (29, 3);
INSERT INTO partofteam VALUES (30, 3);
INSERT INTO partofteam VALUES (31, 3);


INSERT INTO coach VALUES (17, 'Franzen Neumann', 48, 'Male');
INSERT INTO coach VALUES (18, 'Matti Heinrich', 50, 'Male');
INSERT INTO coach VALUES (19, 'Lucy Kuhn', 45, 'Female');
INSERT INTO coach VALUES (20, 'Fiona Moller', 45, 'Female');

INSERT INTO participant VALUES (35, 'Germany-Volleyball-Male-Team', 'Germany');
INSERT INTO participant VALUES (36, 'Reinald Scholz', 'Germany');
INSERT INTO participant VALUES (37, 'Odilio Eichmann', 'Germany');
INSERT INTO participant VALUES (38, 'Hannes Canter', 'Germany');
INSERT INTO participant VALUES (39, 'Erik Schuster', 'Germany');
INSERT INTO participant VALUES (40, 'theo Kroos', 'Germany');
INSERT INTO participant VALUES (41, 'Maximilian Otto', 'Germany');
INSERT INTO participant VALUES (42, 'Lothar Debus', 'Germany');
INSERT INTO participant VALUES (43, 'Matteo Debus', 'Germany');
INSERT INTO participant VALUES (44, 'Freda Hermann', 'Germany');
INSERT INTO participant VALUES (45, 'Helena Keller', 'Germany');

INSERT INTO participantsport VALUES (35, 3);
INSERT INTO participantsport VALUES (36, 3);
INSERT INTO participantsport VALUES (37, 3);
INSERT INTO participantsport VALUES (38, 3);
INSERT INTO participantsport VALUES (39, 3);
INSERT INTO participantsport VALUES (40, 3);
INSERT INTO participantsport VALUES (41, 3);
INSERT INTO participantsport VALUES (42, 2);
INSERT INTO participantsport VALUES (43, 2);
INSERT INTO participantsport VALUES (44, 2);
INSERT INTO participantsport VALUES (45, 2);

INSERT INTO mentorship VALUES (35, 17);
INSERT INTO mentorship VALUES (42, 18);
INSERT INTO mentorship VALUES (43, 18);
INSERT INTO mentorship VALUES (44, 19);
INSERT INTO mentorship VALUES (45, 20);

INSERT INTO athlete VALUES(32, 28, 'Male', 80, 181, 0, 0, 0, 36);
INSERT INTO athlete VALUES(33, 29, 'Male', 83, 183, 0, 0, 0, 37);
INSERT INTO athlete VALUES(34, 30, 'Male', 85, 185, 0, 0, 0, 38);
INSERT INTO athlete VALUES(35, 31, 'Male', 88, 186, 0, 0, 0, 39);
INSERT INTO athlete VALUES(36, 32, 'Male', 87, 188, 0, 0, 0, 40);
INSERT INTO athlete VALUES(37, 33, 'Male', 79, 180, 0, 0, 0, 41);
INSERT INTO athlete VALUES(38, 32, 'Male', 86, 183, 0, 0, 0, 42);
INSERT INTO athlete VALUES(39, 31, 'Male', 84, 185, 0, 0, 0, 43);
INSERT INTO athlete VALUES(40, 27, 'Female', 75, 177, 0, 0, 0, 44);
INSERT INTO athlete VALUES(41, 26, 'Female', 72, 178, 0, 0, 0, 45);

INSERT INTO team VALUES (4, 6, 35);

INSERT INTO partofteam VALUES (36, 4);
INSERT INTO partofteam VALUES (37, 4);
INSERT INTO partofteam VALUES (38, 4);
INSERT INTO partofteam VALUES (39, 4);
INSERT INTO partofteam VALUES (40, 4);
INSERT INTO partofteam VALUES (41, 4);

INSERT INTO venue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 'MD-Volleball-Stadium');
INSERT INTO venue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 'Olympics-Aquatic-Center');
INSERT INTO venue VALUES ('Vancouver', '6445-Lower-Mall', 'V6T-1Z2', 'Ponderosa-Fire-Range');



INSERT INTO sportevent VALUES (1, 'Volleyball-Group-Match-1-US-VS-GBR', '2020-08-01', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 1);

INSERT INTO participatesinevent VALUES (2, 1, 'Not Available');
INSERT INTO participatesinevent VALUES (10, 1, 'Not Available');


INSERT INTO sportevent VALUES (2, 'Volleyball-Group-Match-2-RUS-VS-GER', '2020-08-01', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 2);

INSERT INTO participatesinevent VALUES (25, 2, 'Not Available');
INSERT INTO participatesinevent VALUES (35, 2, 'Not Available');


INSERT INTO sportevent VALUES (3, 'Volleyball-Group-Match-3-US-VS-RUS', '2020-08-02', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 3);

INSERT INTO participatesinevent VALUES (2, 3, 'Not Available');
INSERT INTO participatesinevent VALUES (25, 3, 'Not Available');


INSERT INTO sportevent VALUES (4, 'Volleyball-Group-Match-4-GBR-VS-GER', '2020-08-02', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 4);

INSERT INTO participatesinevent VALUES (10, 4, 'Not Available');
INSERT INTO participatesinevent VALUES (35, 4, 'Not Available');


INSERT INTO sportevent VALUES (5, 'Volleyball-Group-Match-5-US-VS-GER', '2020-08-03', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 5);

INSERT INTO participatesinevent VALUES (2, 5, 'Not Available');
INSERT INTO participatesinevent VALUES (35, 5, 'Not Available');


INSERT INTO sportevent VALUES (6, 'Volleyball-Group-Match-6-GBR-VS-RUS', '2020-08-03', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '2525-Lower-Mall', 'V6T-1Z4', 6);

INSERT INTO participatesinevent VALUES (10, 6, 'Not Available');
INSERT INTO participatesinevent VALUES (25, 6, 'Not Available');



INSERT INTO sportevent VALUES (7, '10-Meter-Riffle-Shooting-Men-Qualifier-1', '2020-08-01', 1);

INSERT INTO eventvenue VALUES ('Vancouver', '6445-Lower-Mall', 'V6T-1Z2', 7);

INSERT INTO participatesinevent VALUES (14, 7, 'Not Available');
INSERT INTO participatesinevent VALUES (19, 7, 'Not Available');
INSERT INTO participatesinevent VALUES (32, 7, 'Not Available');
INSERT INTO participatesinevent VALUES (27, 7, 'Not Available');


INSERT INTO sportevent VALUES (8, '10-Meter-Riffle-Shooting-Female-Qualifier-1', '2020-08-02', 1);

INSERT INTO eventvenue VALUES ('Vancouver', '6445-Lower-Mall', 'V6T-1Z2', 8);

INSERT INTO participatesinevent VALUES (1, 8, 'Not Available');
INSERT INTO participatesinevent VALUES (14, 8, 'Not Available');
INSERT INTO participatesinevent VALUES (17, 8, 'Not Available');
INSERT INTO participatesinevent VALUES (33, 8, 'Not Available');


INSERT INTO sportevent VALUES (9, '10-Meter-Pistol-Shooting-Men-Qualifier-1', '2020-08-02', 1);

INSERT INTO eventvenue VALUES ('Vancouver', '6445-Lower-Mall', 'V6T-1Z2', 9);

INSERT INTO participatesinevent VALUES (14, 9, 'Not Available');
INSERT INTO participatesinevent VALUES (19, 9, 'Not Available');
INSERT INTO participatesinevent VALUES (32, 9, 'Not Available');
INSERT INTO participatesinevent VALUES (27, 9, 'Not Available');


INSERT INTO sportevent VALUES (10, '10-Meter-Pistol-Shooting-Female-Qualifier-1', '2020-08-01', 1);

INSERT INTO eventvenue VALUES ('Vancouver', '6445-Lower-Mall', 'V6T-1Z2', 10);

INSERT INTO participatesinevent VALUES (1, 10, 'Not Available');
INSERT INTO participatesinevent VALUES (14, 10, 'Not Available');
INSERT INTO participatesinevent VALUES (17, 10, 'Not Available');
INSERT INTO participatesinevent VALUES (34, 10, 'Not Available');



INSERT INTO sportevent VALUES (11, '100-Meter-Freestyle-Swimming-Female-Qualifier-1', '2020-08-05', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 11);

INSERT INTO participatesinevent VALUES (9, 11, 'Not Available');
INSERT INTO participatesinevent VALUES (19, 11, 'Not Available');
INSERT INTO participatesinevent VALUES (23, 11, 'Not Available');
INSERT INTO participatesinevent VALUES (24, 11, 'Not Available');
INSERT INTO participatesinevent VALUES (44, 11, 'Not Available');


INSERT INTO sportevent VALUES (12, '100-Meter-Buterfly-Swimming-Female-Qualifier-1', '2020-08-06', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 12);

INSERT INTO participatesinevent VALUES (9, 12, 'Not Available');
INSERT INTO participatesinevent VALUES (18, 12, 'Not Available');
INSERT INTO participatesinevent VALUES (27, 12, 'Not Available');
INSERT INTO participatesinevent VALUES (44, 12, 'Not Available');
INSERT INTO participatesinevent VALUES (45, 12, 'Not Available');


INSERT INTO sportevent VALUES (13, '100-Meter-Breststrock-Swimming-Female-Qualifier-1', '2020-08-07', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 13);

INSERT INTO participatesinevent VALUES (9, 13, 'Not Available');
INSERT INTO participatesinevent VALUES (18, 13, 'Not Available');
INSERT INTO participatesinevent VALUES (23, 13, 'Not Available');
INSERT INTO participatesinevent VALUES (27, 13, 'Not Available');
INSERT INTO participatesinevent VALUES (44, 13, 'Not Available');


INSERT INTO sportevent VALUES (14, '100-Meter-Reverse-Swimming-Female-Qualifier-1', '2020-08-08', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 14);

INSERT INTO participatesinevent VALUES (9, 14, 'Not Available');
INSERT INTO participatesinevent VALUES (18, 14, 'Not Available');
INSERT INTO participatesinevent VALUES (24, 14, 'Not Available');
INSERT INTO participatesinevent VALUES (27, 14, 'Not Available');
INSERT INTO participatesinevent VALUES (45, 14, 'Not Available');


INSERT INTO sportevent VALUES (15, '100-Meter-Freestyle-Swimming-Male-Qualifier-1', '2020-08-05', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 15);

INSERT INTO participatesinevent VALUES (14, 15, 'Not Available');
INSERT INTO participatesinevent VALUES (21, 15, 'Not Available');
INSERT INTO participatesinevent VALUES (22, 15, 'Not Available');
INSERT INTO participatesinevent VALUES (33, 15, 'Not Available');
INSERT INTO participatesinevent VALUES (42, 15, 'Not Available');


INSERT INTO sportevent VALUES (16, '100-Meter-Buterfly-Swimming-Male-Qualifier-1', '2020-08-06', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 16);

INSERT INTO participatesinevent VALUES (14, 16, 'Not Available');
INSERT INTO participatesinevent VALUES (21, 16, 'Not Available');
INSERT INTO participatesinevent VALUES (42, 16, 'Not Available');
INSERT INTO participatesinevent VALUES (33, 16, 'Not Available');
INSERT INTO participatesinevent VALUES (43, 16, 'Not Available');


INSERT INTO sportevent VALUES (17, '100-Meter-Breststrock-Swimming-Male-Qualifier-1', '2020-08-07', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 17);

INSERT INTO participatesinevent VALUES (14, 17, 'Not Available');
INSERT INTO participatesinevent VALUES (21, 17, 'Not Available');
INSERT INTO participatesinevent VALUES (22, 17, 'Not Available');
INSERT INTO participatesinevent VALUES (33, 17, 'Not Available');
INSERT INTO participatesinevent VALUES (43, 17, 'Not Available');


INSERT INTO sportevent VALUES (18, '100-Meter-Reverse-Swimming-Male-Qualifier-1', '2020-08-08', 2);

INSERT INTO eventvenue VALUES ('Vancouver', '6080-Garden-Boulevard', 'V6T-1Z1', 18);

INSERT INTO participatesinevent VALUES (14, 18, 'Not Available');
INSERT INTO participatesinevent VALUES (43, 18, 'Not Available');
INSERT INTO participatesinevent VALUES (22, 18, 'Not Available');
INSERT INTO participatesinevent VALUES (33, 18, 'Not Available');
INSERT INTO participatesinevent VALUES (42, 18, 'Not Available');




INSERT INTO user VALUES (1, 'khatung', '123456', TRUE);
INSERT INTO user VALUES (2, 'iancmx', '123456', TRUE);
INSERT INTO user VALUES (3, 'yasardh', '123456', TRUE);
INSERT INTO user VALUES (4, 'guest-1', '123456', FALSE);
INSERT INTO user VALUES (5, 'guest-2', '123456', FALSE);
