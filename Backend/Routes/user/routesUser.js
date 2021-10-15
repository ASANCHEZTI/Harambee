const express = require ('express');
const {getAllUsers, editUser, createUser, deleteUser} = require ('../../Controllers/Users/userController.js');

const routesUser = express.Router();
const genericCallback = (res) => (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  };

  routesUser.route('/user').get((req, res) => {
    getAllUsers(genericCallback(res));
  });

routesUser.route('/user').post((req, res) => {
    createUser(req.body, genericCallback(res));
    
});

  module.exports = routesUser;