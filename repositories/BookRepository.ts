import { Database } from "@db/sqlite";
import IBookRepository from "#interfaces/IBookRepository.ts";

export default class BookRepository implements IBookRepository {
    private database: Database;

    constructor(database: Database) {
      this.database = database;
    }
  
    findAll(): Record<string, string>[] {
      return this.database.prepare("SELECT title, author FROM books").all();
    }

    findById(id: string): Record<string, string> | undefined {
      return this.database.prepare("SELECT title, author FROM books WHERE id = ?").get(id);
    }
}