// appConfig.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

export const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port:  5433,
});

db.connect();

export const SECRET = process.env.SECRET || 'secreto'; // Substitua 'secreto' pelo seu valor padrão, se necessário
export const port = process.env.PORT || 3000;
