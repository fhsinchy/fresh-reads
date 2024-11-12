import { FreshContext } from "$fresh/server.ts";
import db from "#services/db.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
    db.prepare(
        `
          CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            author TEXT
          );
        `,
    ).run();

    db.prepare(
      `
        CREATE TABLE IF NOT EXISTS reviews (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          book_id INTEGER,
          review TEXT
        );
      `,
  ).run();

    db.prepare(
        `
          INSERT INTO books (title, author) VALUES (?, ?);
        `,
    ).run("Crime and Punishment", "Fyodor Dostoyevsky");

    db.prepare(
      `
        INSERT INTO reviews (book_id, review) VALUES (?, ?);
      `,
  ).run(1, "GOAT!");

    const bookRows = db.prepare("SELECT id, title, author FROM books").all();

    console.log("Books:");

    for (const bookRow of bookRows) {
        console.log(bookRow);
    }

    const reviewRows = db.prepare("SELECT id, book_id, review FROM reviews").all();

    console.log("Reviews:");

    for (const reviewRow of reviewRows) {
        console.log(reviewRow);
    }

    return new Response("Database initialized!");
};
