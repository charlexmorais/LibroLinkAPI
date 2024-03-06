

// index.js
import bookRouter from "./servicesBooks/bookRouter";
import { app, port } from "./servicesUsers/app.config";
import loginRouter from "./servicesUsers/login.Router";
import usuariosRouter from "./servicesUsers/userRouter";

// ... (middleware de tratamento de erros)

app.use("/login", loginRouter);
app.use("/usuarios", usuariosRouter);
app.use("/livros" , bookRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
