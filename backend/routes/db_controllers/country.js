const mysql = require("mysql");
const db = require("../../db");

const atLeastOneGold = async (req, res) => {
  let query =
    "SELECT country_name, gold_medal_count \
    FROM countrymedal \
    WHERE gold_medal_count > 0 \
    ORDER BY country_name asc";

  console.log(query);
  await db.query(query, (err, resp) => {
    if (err) throw err;
    res.json(resp);
  });
};

const mostGoldMedals = async (req, res) => {
  db.query(
    "SELECT country_name, gold_medal_count \
    FROM countrymedal \
    WHERE gold_medal_count = (\
        SELECT MAX(C.gold_medal_count) \
        FROM countrymedal C)\
    ORDER BY country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const mostSilverMedals = async (req, res) => {
  db.query(
    "SELECT country_name, silver_medal_count \
    FROM countrymedal \
    WHERE silver_medal_count = (\
        SELECT MAX(C.silver_medal_count) \
        FROM countrymedal C)\
    ORDER BY country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const mostBronzeMedals = async (req, res) => {
  db.query(
    "SELECT country_name, bronze_medal_count \
    FROM countrymedal \
    WHERE bronze_medal_count = (\
        SELECT MAX(C.bronze_medal_count) \
        FROM countrymedal C)\
    ORDER BY country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const mostTotalMedals = async (req, res) => {
  db.query(
    "SELECT C.country_name, M.total_medal_count \
    FROM countrymedal C, medalcount M \
    WHERE M.total_medal_count = (\
        SELECT MAX(M2.total_medal_count) \
        FROM countrymedal C2, medalcount M2)\
    ORDER BY C.country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};



const leastGoldMedals = async (req, res) => {
  db.query(
    "SELECT country_name, gold_medal_count \
    FROM countrymedal \
    WHERE gold_medal_count = (\
        SELECT MIN(C.gold_medal_count) \
        FROM countrymedal C)\
    ORDER BY country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const leastSilverMedals = async (req, res) => {
  db.query(
    "SELECT country_name, silver_medal_count \
    FROM countrymedal \
    WHERE silver_medal_count = (\
        SELECT MIN(C.silver_medal_count) \
        FROM countrymedal C)\
    ORDER BY country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const leastBronzeMedals = async (req, res) => {
  db.query(
    "SELECT country_name, bronze_medal_count \
    FROM countrymedal \
    WHERE bronze_medal_count = (\
        SELECT MIN(C.bronze_medal_count) \
        FROM countrymedal C)\
    ORDER BY country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};

const leastTotalMedals = async (req, res) => {
  db.query(
    "SELECT C.country_name, M.total_medal_count \
    FROM countrymedal C, medalcount M \
    WHERE M.total_medal_count = (\
        SELECT MIN(M2.total_medal_count) \
        FROM countrymedal C2, medalcount M2)\
    ORDER BY C.country_name asc",
    (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    }
  );
};



const participateAllSports = async (req, res) => {
  let query =
    "SELECT nationality \
    FROM nationalitycolor NC \
    WHERE not exists (SELECT S.sport_id FROM sport S WHERE S.sport_id NOT IN( \
              SELECT PS.sport_id FROM participant P, athlete A, participantsport PS \
                        WHERE NC.nationality = P.country and P.participant_id = PS.participant_id and P.participant_id = A.participant_id))\
    ORDER BY nationality asc";
  console.log(query);
  await db.query(query, (err, resp) => {
    if (err) throw err;
    res.json(resp);
  });
};

const allCountries = async (req, res) => {
  db.query("SELECT * FROM countrymedal", (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const getInfo = async (req, res) => {

  db.query(`SELECT * FROM countrymedal WHERE country_name = '${req.params.name}'`, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const deleteCountry = async (req, res) => {
  db.query(`DELETE FROM countrymedal WHERE country_name = '${req.params.name}'`, (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });

};

const projectCountryMedal = async (req, res) => {
  const { project_columns } = req.body;

  query =  `SELECT ${project_columns} FROM countrymedal`;
  console.log(query);

  db.query(query,  (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};

const projectCountryMedalJoin = async (req, res) => {
  const { project_columns } = req.body;

  query =  `SELECT ${project_columns} FROM countrymedal C, medalcount M WHERE C.gold_medal_count = M.gold_medal_count AND C.silver_medal_count = M.silver_medal_count AND C.bronze_medal_count = M.bronze_medal_count`;
  console.log(query);

  db.query(query,  (err, result, fields) => {
    if (err) throw err;
    res.json(result);
  });
};


const newCountry = async (req, res) => {
    const {
    country_name,
    gold_medal_count,
    silver_medal_count,
    bronze_medal_count,
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
        await db.query(insertMCquery, (err, reslt) => {
          if (err) throw err;
        });
      }
      
      let selQuery1 = `SELECT * FROM countrymedal WHERE country_name = '${country_name}'`;
      db.query(selQuery1, (err, result) => {
        if (err) throw err;
        if (result[0]) {
          res.json("already present");
          return;
        }
        let insertQuery2 = `INSERT INTO countrymedal VALUES ('${country_name}', ${gold_medal_count}, ${silver_medal_count}, ${bronze_medal_count})`;
        db.query(insertQuery2, (err, resp) => {
          if (err) throw err;
          res.json(resp.insertId);
        });
      });
    }
  );
};

const updateCountry = async (req, res) => {
    const {
    country_name,
    gold_medal_count,
    silver_medal_count,
    bronze_medal_count,
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
        await db.query(insertMCquery, (err, reslt) => {
          if (err) throw err;
        });
      }
      
      let selQuery1 = `SELECT * FROM countrymedal WHERE country_name = '${country_name}'`;
      db.query(selQuery1, (err, result) => {
        if (err) throw err;
        if (!result[0]) {
          throw err;
          return;
        }
        let insertQuery2 = `UPDATE countrymedal SET gold_medal_count = ${gold_medal_count}, silver_medal_count = ${silver_medal_count}, bronze_medal_count = ${bronze_medal_count} WHERE country_name = '${country_name}'`;
        db.query(insertQuery2, (err, resp) => {
          if (err) throw err;
          res.json(resp.insertId);
        });
      });
    }
  );
};

module.exports = {
  atLeastOneGold,
  mostGoldMedals,
  mostSilverMedals,
  mostBronzeMedals,
  mostTotalMedals,
  leastGoldMedals,
  leastSilverMedals,
  leastBronzeMedals,
  leastTotalMedals,
  participateAllSports,
  allCountries,
  getInfo,
  deleteCountry,
  projectCountryMedal,
  projectCountryMedalJoin,
  newCountry,
  updateCountry,
};
