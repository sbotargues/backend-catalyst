const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};


  // Find a single User with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findById(id)
      .then((data) => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving User with id=" + id });
      });
  };

  // Update a User by the id in the request
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        console.log("data", data)
        console.log("req.body", req.body)
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`,
          });
        } else res.send({ message: "User was updated successfully.", data });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  };
