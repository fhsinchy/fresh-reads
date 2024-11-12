import BookRepository from "#repositories/BookRepository.ts";
import db from "#services/db.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<null> = {
  GET(_req, _ctx) {
    const bookRepository = new BookRepository(db);

    const books = bookRepository.findAll();

    return new Response(JSON.stringify(books));
  },
};
