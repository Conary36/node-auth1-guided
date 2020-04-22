const bcrypt = require('bcryptjs');

const router = require("express").Router();

const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {

    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);

  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
