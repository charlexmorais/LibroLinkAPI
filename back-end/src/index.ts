// importando express
import express from "express";
// importando Client
import { Client } from "pg";
// importando dotenv
import dotenv from "dotenv";
// export SECRET
export const SECRET = process.env.SECRET;
// constantes
const port = 3000;
const app = express();
//  dotenv carrega variaveis de ambiente
dotenv.config();
// compartilhamento de recursos entre origens
const cors = require("cors");
// analisa os corpos das requisiçoes
const bodyparse = require("body-parser");
// jwt gera tokens e verifica
const jwt = require("jsonwebtoken");

// funcoes de acesso
app.use(express.json());
app.use(cors());

// abrir conexao com o banco de dados
export const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5433,
});

// estabelecendo conexao com banco de dados
// bd.connect();
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
    return;
  }
  console.log("Conexão bem-sucedida com o banco de dados");
  // Você pode começar a executar consultas ou outras operações aqui.
});

// criar login para acesso na aplicacao web 
// enviando dados usando post

app.post("/login",async(req,res)=>{

})