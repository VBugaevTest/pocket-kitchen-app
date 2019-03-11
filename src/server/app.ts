import { Application, Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

app.get('/', function (req: Request, res: Response) {
  res.send('Hello there from Pocket Kitchen App!');
});

app.listen(3000, function () {
  console.log('Pocket Kitchen App listening on port 3000!');
});