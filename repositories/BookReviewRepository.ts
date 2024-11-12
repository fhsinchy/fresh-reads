import { Database } from "@db/sqlite";

export default class BookReviewRepository {
    private database: Database;

    constructor(database: Database) {
      this.database = database;
    }

    findBookWithAllReviewsByBookId(id: string){
        return this.database.prepare("SELECT title, author, review FROM books LEFT JOIN reviews ON books.id = reviews.book_id WHERE books.id = 1;").all(id);
    }
}