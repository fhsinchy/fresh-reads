import { FreshContext } from "$fresh/server.ts";
import db from "../../services/Database.ts";

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
          INSERT INTO books (title, author) VALUES (?, ?);
        `,
    ).run("Crime and Punishment", "Fyodor Dostoyevsky");

    const rows = db.prepare("SELECT id, title, author FROM books").all();

    console.log("Books:");

    for (const row of rows) {
        console.log(row);
    }

    return new Response("Database initialized!");
};
