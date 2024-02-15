import { InterfaceCrud } from "./interfaces";
import * as bcrypt from "bcrypt";

// criando model , interface tipo contrato  typescript com objetos
interface UsersModel {
  usuario: string;
  senha: string;
  salt: string;
  email: string;
}
export class LoginServices implements InterfaceCrud<UsersModel> {
  db: any;
  async searchingUser (usuario:string): Promise<UsersModel | null> {

    const query ="SELECT* FROM usuarios WHERE usuario =$1 "
     const result = await this.db.query(query, [usuario]);
    return result.rows[0] || null;
    // result retorna objeto , onde contem  a propriedade rows 
  }
  
}
