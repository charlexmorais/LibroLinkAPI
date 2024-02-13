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

}
