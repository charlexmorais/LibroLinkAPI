// importando interface
import { InterfaceCrud } from "./interfaces";

interface Usersmodel{
    titulo:string;
    autor:string;
    categoria:string;
    descricao:string;
    ano_publicacao:number;
    preco:number;
    disponivel:boolean;
}
export class bookstoreService implements InterfaceCrud<UsersModel> {

    db: any; // Conexão com o banco de dados.  melhorar codigo 

    constructor(db: any) {
      this.db = db;
    }
  

}