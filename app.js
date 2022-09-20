const express = require('express');
const route = require('./routes');

require('./config/db.config');

const app = express();
const port = process.env.PORT || 3000;

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 