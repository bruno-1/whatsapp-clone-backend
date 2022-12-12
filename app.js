import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello Word!');
});

export default app;
