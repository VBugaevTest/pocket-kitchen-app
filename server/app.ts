// lib/app.ts
import express from 'express';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Pocket Kitchen App');
});

app.listen(3000, function () {
  console.log('Pocket Kitchen App listening on port 3000!');
});