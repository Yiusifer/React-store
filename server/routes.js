const router = require("express").Router();
const db = require("./configs/db.configs");

router.get("/", (req, res) => {
  const getAllUsers = () => {
    return db.query("SELECT * FROM users;").then((data) => {
      console.log("data:", data);
      return data.rows;
    });
  };
  getAllUsers().then((data) => {
    console.log("Users:  " + data);
    res.json({ users: data });
  });
});

module.exports = router;