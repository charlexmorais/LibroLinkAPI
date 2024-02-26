import { InterfaceCrud } from "../servicesUsers/interfaces";
import * as bcrypt from "bcrypt";

interface UsersModel {
    titulo: string;
    autor: string;
    categoria: string;
    descricao: string;
    ano_publicacao: string;
    preco: number;
    disponivel: boolean;
  
  }

export class BookServices implements InterfaceCrud<UsersModel> {

    db: any; // Conexão com o banco de dados.
  
    constructor(db: any) {
      this.db = db;
    }
}   