let db = require("../models");
let express = require("express");
let api_router = express.Router();

// module.exports = function (app) {
// Find all Users and return them to the user with res.json
api_router.get("/api/users", function (req, res) {
  db.User.findAll({
    include: [db.Post]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

api_router.get("/api/users/:id", function (req, res) {
  // Find one User with the id in req.params.id and return them to the user with res.json
  db.User.findOne({
    where: {
      id: req.params.id
    },
    inclue: [db.nutri_find_db]
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

api_router.post("/api/users", function (req, res) {
  // Create an User with the data available to us in req.body
  console.log(req.body);
  db.User.create(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});

api_router.delete("/api/users/:id", function (req, res) {
  // Delete the User with the id available to us in req.params.id
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbUser) {
    res.json(dbUser);
  });
});

module.exports = api_router;