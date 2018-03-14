const express = require('express');
const userRouter = express.Router();

const User = require('../models/userModels');

userRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  User
    .findOne({ username: username })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

userRouter.post('/new-user', (req, res) => {
const userInfo = req.body;
const newUser = new User(userInfo);
newUser
  .save()
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(500).json(err);
  });
});
module.exports = userRouter;