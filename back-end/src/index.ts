// importando express
import express from "express";
// importando Client
import { Client } from "pg";
// importando dotenv
import dotenv from "dotenv";
import { LoginServices } from "./services/loginServices";
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
import * as bcrypt from "bcrypt";
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
db.connect();
const loginservices = new LoginServices(db);

// db.connect((err) => {
//   if (err) {
//     console.error("Erro ao conectar ao banco de dados:", err.stack);
//     return;
//   }
//   console.log("Conexão bem-sucedida com o banco de dados");
//   // Você pode começar a executar consultas ou outras operações aqui.
// });

// // criar login para acesso na aplicacao web
// // enviando dados usando post

app.post("/login", async (req, res, next) => {
  try {
    const { usuario, senha } = req.body;
    const foundUser = await loginservices.searchingUser(usuario);

    if (foundUser) {
      const correctPassword = await bcrypt.compare(senha, foundUser.senha);

      if (correctPassword) {
        const token = jwt.sign({ usuario: foundUser.usuario }, SECRET, {
          expiresIn: 300, // expires in 5 minutes
        });
        return res.json({ auth: true, token: token });
      }
    }

    res.status(401).json({ auth: false, message: "Credenciais inválidas." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao tentar fazer login." });
  }
});
