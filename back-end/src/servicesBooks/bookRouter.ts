// userRoutes.js
import express from "express";

import { verifyToken } from "../auth/token";
import {  db } from "./app.settings";
import { BookServices } from "./bookServices";
const bookservices =new BookServices(db)
const bookRouter = express.Router();

bookRouter.use(verifyToken);

bookRouter.get("/", async (req, res) => {
  // ... (lógica para obter todos os usuários)
  try {
    const books = await bookservices.getAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

bookRouter.get("/:id", async (req, res) => {
  // ... (lógica para obter um usuário por ID)
  try {
    const { id } = req.params;
    const user = await bookservices.find(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
bookRouter.post("/", async (req, res) => {
  // ... (lógica para criar um livro)
  try {
    const user = await bookservices.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

bookRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userDataToUpdate = req.body;

    const existingUser = await bookservices.find(id);

    if (!existingUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const updatedUser = await bookservices.update(id, userDataToUpdate);

    res.json({ message: "Usuário atualizado com sucesso", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
bookRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await bookservices.delete(id);
    res.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ... (outras rotas para usuários)

export default bookRouter;
