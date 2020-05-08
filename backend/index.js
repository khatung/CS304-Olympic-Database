const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user_routes');
const dbRoutes = require('./routes/db_routes');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/db", dbRoutes);

const port = 3001;

app.listen(port, () => {
  console.log("Server is running on port 3001");
});
