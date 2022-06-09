import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

const env = process.env.NODE_ENV === 'production' || 'development';

dotenv.config({
  path: path.resolve(__dirname, `../.env.${env === 'development' ? 'dev' : 'prod'}` )
});
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (_, res: Response) => {
  res.send('It`s from express');
});

app.listen(PORT, () => {
  console.log(`Hi there! Server started on port ${PORT}`);
});
