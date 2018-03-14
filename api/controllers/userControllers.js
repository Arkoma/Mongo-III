const express = require('express');
const userRouter = express.Router();

const User = require('../models/userModels');

userRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  User
    .findOne({ username: username })
    .then(user => {
      console.log('user: ', user, 'res: ', res);
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = userRouter;