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
                      
async searchingUser (usuario:string): Promise<UsersModel | null> {

  const query ="SELECT* FROM usuarios WHERE usuario =$1 "
   const result = await this.db.query(query, [usuario]);
  return result.rows[0] || null;
  // result retorna objeto , onde contem  a propriedade rows 
}
}