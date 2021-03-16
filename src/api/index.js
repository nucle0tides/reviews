import express from 'express';
import bodyParser from 'body-parser';
import reviewsRouter from './routes/review';

const port = 3030;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', (req, res) => {
  res.send('Hello Reviews!');
});

app.use('/api', reviewsRouter);

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting Reviews API');
    console.error(err);
    process.exit();
  }

  console.info(`You can now interact with the API at localhost:${port}`);
});
