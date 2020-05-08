const mysql = require("mysql");
const db = require("../../db");

const nationalities = async (req, res) => {
  db.query("SELECT name, country FROM participant", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const ageBetweenSport = async (req, res) => {
  const { minage, maxage } = req.params;

  db.query(
    `SELECT P.name AS name, A.age AS age, S.name AS sport, P.country AS country \
    FROM participant P, participantsport PS, athlete A, sport S \
    WHERE PS.participant_id = A.participant_id \
    and PS.participant_id = P.participant_id \
    and PS.sport_id = S.sport_id \
    and A.age >= ${minage} and A.age <= ${maxage}`,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const allParticipants = (req, res) => {
  db.query("SELECT * FROM participant", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const getInfo = async (req, res) => {
  db.query(
    `SELECT * FROM participant WHERE participant_id = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const deleteParticipant = async (req, res) => {
  db.query(
    `DELETE FROM participant WHERE participant_id = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

module.exports = {
  nationalities,
  ageBetweenSport,
  allParticipants,
  getInfo,
  deleteParticipant,
};
