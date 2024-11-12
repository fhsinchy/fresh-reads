import { Handlers } from "$fresh/server.ts";
import { BookRepository } from "../../../repositories/BookRepository.ts";
import Database from "../../../services/Database.ts";

export const handler: Handlers<null> = {
    GET(_req, ctx) {
      const book = new BookRepository(Database).findById(ctx.params.id);

      return new Response(JSON.stringify(book));
    },
  };