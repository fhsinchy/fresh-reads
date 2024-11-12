import { Handlers } from "$fresh/server.ts";
import ReviewRepository from "#repositories/ReviewRepository.ts";
import db from "#services/db.ts";

export const handler: Handlers<null> = {
    GET(_req, ctx) {
      const reviews = new ReviewRepository(db).findAllByBookId(ctx.params.id);

      return new Response(JSON.stringify(reviews));
    },

    // async POST(req, ctx) {
    //   const review = await req.json();


    // }
  };