// importando interface
import { InterfaceCrud } from "./interfaces";

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
// criando funcao pra buscar por usuario no banco de dados 
                      
}