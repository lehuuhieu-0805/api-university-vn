const universityV1Router = require('./university.v1.route');
const universityV2Router = require('./university.v2.route');

function route(app) {
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.use('/api/v1/university', universityV1Router);

  app.use('/api/v2/university', universityV2Router);

}

module.exports = route;