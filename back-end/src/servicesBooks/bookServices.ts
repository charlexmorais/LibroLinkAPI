import { InterfaceCrud } from "../servicesUsers/interfaces";
// modelo de interface
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

  async create(payload: Omit<UsersModel, "id">): Promise<UsersModel> {
    try {
      const {
        titulo,
        autor,
        categoria,
        ano_publicacao,
        descricao,
        preco,
        disponivel,
      } = payload;

      const query = `
     INSERT INTO livros ( titulo ,autor,categoria,ano_publicacao,descricao,preco,disponivel) 
      VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *;
`;
      const values = [
        titulo,
        autor,
        categoria,
        ano_publicacao,
        descricao,
        preco,
        disponivel,
      ];
      const result = await this.db.query(query, values);

      return result.rows[0];
    } catch (error) {
      console.error("Error while creating the user:", error);
      throw new Error("Error while creating the user.");
    }
  }
  async getAll(): Promise<UsersModel[]> {
    const result = await this.db.query("SELECT * FROM livros");
    return result.rows as UsersModel[];
  }
  async find(id: string): Promise<UsersModel | null> {
    try {
      const result = await this.db.query("SELECT * FROM livros WHERE id = $1", [
        id,
      ]);
      console.log("Result:", result);
      return result.rows[0] || null;
    } catch (error) {
      console.error("Error in find function:", error);
      throw error;
    }
  }
  async update(id: string, payload: Partial<UsersModel>): Promise<UsersModel> {
    const {
      titulo,
      autor,
      categoria,
      ano_publicacao,
      descricao,
      preco,
      disponivel,
    } = payload;

    if (
      titulo ||
      autor ||
      categoria ||
      ano_publicacao ||
      descricao ||
      preco ||
      disponivel
    ) {
      let values;
      let query;

      if (
        titulo ||
        autor ||
        categoria ||
        ano_publicacao ||
        descricao ||
        preco ||
        disponivel
      ) {
        values = [
          titulo,
          autor,
          categoria,
          ano_publicacao,
          descricao,
          preco,
          disponivel,
          id,
        ];
        query =
          "UPDATE livros SET titulo =$1, autor =$2, categoria=$3, ano_publicacao=$4, descricao=$5, preco=$6, disponivel=$7 WHERE id = $8 RETURNING *;";
      }

      const result = await this.db.query(query, values);

      return result.rows[0];
    } else {
      throw new Error("Nenhum campo de atualização fornecido.");
    }
  }
  async delete(id: string): Promise<void> {
    await this.db.query("DELETE FROM livros WHERE id = $1", [id]);
  }
}
