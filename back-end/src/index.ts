import express from 'express';
import dontev from 'dotenv';
export const SECRET =process.env.SECRET

const cors = require('cors');
dontev.config();
const app = express();
const port= 3000;

app.use(express.json());
app.use(cors());
