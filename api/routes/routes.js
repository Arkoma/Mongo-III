const userRouter = require('../controllers/userControllers');
module.exports = (app) => {
  //add your new routes here
  app.route('/login').post(userRouter);
  app.route('/new-user').post(userRouter);
};
