import { Database } from "@db/sqlite";
import IReviewRepository from "#interfaces/IReviewRepository.ts";

export default class ReviewRepository implements IReviewRepository {
    private database: Database;

    constructor(database: Database) {
      this.database = database;
    }
    
    findAllByBookId(id: string): Record<string, string>[] {
        return this.database.prepare("SELECT review FROM reviews WHERE book_id = ?").all(id);
    }

    
}