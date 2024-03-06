// userRoutes.js
import express from "express";
import { UsersService } from "./loginServices";
import { verifyToken } from "../auth/token";
import { app, db } from "./app.config";
const loginservices =new UsersService(db)
const usuariosRouter = express.Router();

usuariosRouter.use(verifyToken);

usuariosRouter.get("/", async (req, res) => {
  // ... (lógica para obter todos os usuários)
  try {
    const usuarios = await loginservices.getAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

usuariosRouter.get("/:id", async (req, res) => {
  // ... (lógica para obter um usuário por ID)
  try {
    const { id } = req.params;
    const user = await loginservices.find(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/usuarios", async (req, res) => {
  try {
    const user = await loginservices.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
usuariosRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userDataToUpdate = req.body;

    const existingUser = await loginservices.find(id);

    if (!existingUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const updatedUser = await loginservices.update(id, userDataToUpdate);

    res.json({ message: "Usuário atualizado com sucesso", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
usuariosRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await loginservices.delete(id);
    res.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ... (outras rotas para usuários)

export default usuariosRouter;
