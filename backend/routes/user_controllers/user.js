const mysql = require("mysql");
const db = require("../../db");

const handleLogin = async (req, res) => {
	const { login, password } = req.body;

	let query = `SELECT user_id \
	FROM user\
	WHERE login = "${login}" \
	AND password = "${password}" `;

	console.log(query);

	db.query(
		query,
		(err, result, fields) => {
			if (err) throw err;
			console.log(result);
			res.json(result);
		}
	  );

};

const handleRegister = async (req, res) => {
  const { login, password, permission } = req.body;

  if (login == null | password == null | permission == null) {
	  return res.json("Failed to register, missing parameter");
  }

  let insertQuery =
    `INSERT INTO user (login, password, permission) VALUES ("${login}", "${password}", FALSE)`;
  if (permission == "true" || permission == "True" || permission == "TRUE"){
	insertQuery =
    `INSERT INTO user (login, password, permission) VALUES ("${login}", "${password}", TRUE)`;
  }

  let query = mysql.format(insertQuery, [
	login,
	password
  ]);

  console.log(query)
  
  db.query(query, (err, response) => {
    if (err) throw err;
    res.json(response.insertId);
  });

};


const handleUpdate = async (req, res) => {
  const { user_id, login, password, permission } = req.body;

  if (login == null | password == null | permission == null) {
	  return res.json("Failed to register, missing parameter");
  }

  let updateQuery =
    `UPDATE user set login='${login}', password= '${password}', permission=${FALSE} WHERE user_id = ${user_id}`;
  if (permission == "true" || permission == "True" || permission == "TRUE"){
	insertQuery =
    `UPDATE user set login='${login}', password= '${password}', permission=${TRUE} WHERE user_id = ${user_id}`;
  }

  let query = mysql.format(updateQuery, [
	login,
	password
  ]);

  console.log(query)
  
  db.query(query, (err, response) => {
    if (err) throw err;
    res.json(response);
  });

};

const handleDelete = async (req, res) => {
 
  db.query(`DELETE FROM user WHERE user_id = ${req.params.id}`, (err, response) => {
    if (err) throw err;
    res.json(response.insertId);
  });

};

const handleGetAll = async (req, res) => {
  db.query(`SELECT * FROM user`, (err, response) => {
    if (err) throw err;
    res.json(response);
  });


}

module.exports = {
  handleLogin,
  handleRegister,
  handleUpdate,
  handleDelete,
  handleGetAll
};
