import express from 'express';
import { EstateResolver } from './resolvers/estate.resolver';

const app = express();
const port = 3000;

const estates = new EstateResolver();

app.get('/estates', (req, res) => {
  const params = req.query;
  const result = estates.getEstates(params);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
