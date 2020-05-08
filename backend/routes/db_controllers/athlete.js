const mysql = require("mysql");
const db = require("../../db");

const newAthlete = async (req, res) => {
  const {
    age,
    sex,
    weight,
    height,
    gold_medal_count,
    silver_medal_count,
    bronze_medal_count,
    name,
    country,
  } = req.body || {};

  const sum =
    parseInt(gold_medal_count) +
    parseInt(silver_medal_count) +
    parseInt(bronze_medal_count);

  await db.query(
    `SELECT * FROM medalcount \
  WHERE gold_medal_count = ${gold_medal_count} \
AND silver_medal_count = ${silver_medal_count} \
AND bronze_medal_count = ${bronze_medal_count} `,
    async (err, result) => {
      if (err) throw err;
      if (!result[0]) {
        let insertMCquery = `INSERT INTO medalcount VALUES (${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count}, ${sum})`;
        console.log(insertMCquery);
        await db.query(insertMCquery, (err, res) => {
          if (err) throw err;
        });
      }

      let insertQuery1 = `INSERT INTO participant (name, country) VALUES ('${name}', '${country}')`;
      db.query(insertQuery1, (err, result) => {
        if (err) throw err;
        let insertQuery2 = `INSERT INTO athlete (age, sex, weight, height, gold_medal_count, silver_medal_count, bronze_medal_count, participant_id) VALUES (${age}, "${sex}", ${weight}, ${height}, ${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count}, ${result.insertId})`;
        db.query(insertQuery2, (err, resp) => {
          if (err) throw err;
          res.json(resp.insertId);
        });
      });
    }
  );
};

const updateAthlete = async (req, res) => {
  const {
    athlete_id,
    age,
    sex,
    weight,
    height,
    gold_medal_count,
    silver_medal_count,
    bronze_medal_count,
    participant_id,
  } = req.body || {};

  const sum =
    parseInt(gold_medal_count) +
    parseInt(silver_medal_count) +
    parseInt(bronze_medal_count);

  await db.query(
    `SELECT * FROM medalcount \
  WHERE gold_medal_count = ${gold_medal_count} \
AND silver_medal_count = ${silver_medal_count} \
AND bronze_medal_count = ${bronze_medal_count} `,
    async (err, result) => {
      if (err) throw err;
      if (!result[0]) {
        let insertMCquery = `INSERT INTO medalcount VALUES (${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count}, ${sum})`;
        console.log(insertMCquery);
        await db.query(insertMCquery, (err, res) => {
          if (err) throw err;
        });
      }
      let updateQuery = `UPDATE athlete SET age = ${age}, sex = "${sex}", weight = ${weight}, height = ${height}, gold_medal_count = ${gold_medal_count}, silver_medal_count = ${silver_medal_count}, bronze_medal_count = ${bronze_medal_count} WHERE athlete_id = ${athlete_id}`;

      console.log(updateQuery);

      db.query(updateQuery, (err, resp) => {
        if (err) throw err;
        res.json(resp.insertId);
      });
    }
  );
};

const deleteAthlete = async (req, res) => {
  db.query(
    `DELETE FROM athlete WHERE athlete_id = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const getInfo = async (req, res) => {
  db.query(
    `SELECT * FROM athlete WHERE athlete_id = ${req.params.id}`,
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const allAthletes = async (req, res) => {
  db.query(
    "SELECT A.athlete_id AS id, P.name, A.age, A.sex, A.weight, A.height, P.country, A.gold_medal_count, A.silver_medal_count, A.bronze_medal_count FROM athlete A, participant P WHERE A.participant_id = P.participant_id",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const numAthleteAgeCountry = async (req, res) => {
  db.query(
    "SELECT A.athlete_id AS id, P.country AS country, COUNT(*) AS number_of_athletes, AVG(A.age) AS average FROM athlete A, participant P WHERE A.participant_id = P.participant_id  GROUP BY P.country",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const ageAthletes = async (req, res) => {
  const { min, max } = req.body;
  query = `SELECT A.athlete_id AS id, P.name, A.age,  A.gold_medal_count, A.silver_medal_count, A.bronze_medal_count FROM athlete A, participant P WHERE A.participant_id = P.participant_id AND A.age <= ${max} AND A.age >= ${min}`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const groupAthletes = async (req, res) => {
  const { parameter } = req.body;
  query = `SELECT  ${parameter}, COUNT(*) AS count FROM athlete A, participant P WHERE A.participant_id = P.participant_id GROUP By ${parameter}`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const sportSelection = async (req, res) => {
  const { parameter } = req.body;
 query = `SELECT A.athlete_id AS id, P.name FROM athlete A, participant P, sport S, participantsport PS WHERE A.participant_id = P.participant_id AND PS.participant_id = P.participant_id AND PS.sport_id = S.sport_id AND S.name = '${parameter}' ORDER BY P.name asc`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const sportDivision = async (req, res) => {
  const { parameter } = req.body;
    let query = `SELECT A.athlete_id as id, P.name\
      FROM athlete A, participant P \
      WHERE A.participant_id = P.participant_id and not exists (SELECT S.sport_id \ 
                                                                FROM sport S \
                                                                WHERE S.sport_id NOT IN( \
                                                                SELECT PS.sport_id FROM  participantsport PS\
                                                                WHERE P.participant_id = PS.participant_id ))`;
  db.query(query, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};


module.exports = {
  newAthlete,
  updateAthlete,
  deleteAthlete,
  getInfo,
  allAthletes,
  numAthleteAgeCountry,
  ageAthletes,
  groupAthletes,
  sportSelection,
  sportDivision
};
