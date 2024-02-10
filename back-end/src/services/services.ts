// importando interface
import { InterfaceCrud } from "./interfaces";
// importando crypto
import * as bcrypt from "bcrypt";
// criando model
interface UsersModel {
  titulo: string;
  autor: string;
  categoria: string;
  descricao: string;
  ano_publicacao: string;
  preco: string;
  disponivel: boolean;
}
// criando classe interface
export class Services implements  InterfaceCrud<UsersModel>{
 db:any;
}