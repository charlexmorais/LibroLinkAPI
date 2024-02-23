// loginRoutes.js
import express from 'express';
import { loginservices, jwt, bcrypt, SECRET } from './authServices';

const loginRouter = express.Router();

loginRouter.post("/", async (req, res, next) => {
  // ... (lógica de login)

    try {
      const { usuario, senha } = req.body;
      const foundUser = await loginservices.getByUsername(usuario);
  
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

export default loginRouter;
