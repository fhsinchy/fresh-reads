import { Handlers } from "$fresh/server.ts";
import BookRepository from "#repositories/BookRepository.ts";
import db from "#services/db.ts";

export const handler: Handlers<null> = {
    GET(_req, ctx) {
      const book = new BookRepository(db).findById(ctx.params.id);

      return new Response(JSON.stringify(book));
    },
  };