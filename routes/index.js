const universityRouter = require('./university.route');

function route(app) {
  app.get('/api', (req, res) => {
    res.send('Hello World');
  });

  app.use('/api/university', universityRouter);

}

module.exports = route;