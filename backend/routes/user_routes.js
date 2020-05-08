const express = require("express");
const router = express.Router();


// Controllers
const user = require("./user_controllers/user");

router.post("/register", user.handleRegister);
router.post("/login", user.handleLogin);
router.post("/update", user.handleUpdate);
router.delete("/delete/:id", user.handleDelete);
router.get("/", user.handleGetAll);

module.exports = router;