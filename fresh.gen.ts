// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_books_id_ from "./routes/api/books/[id].ts";
import * as $api_books_id_reviews from "./routes/api/books/[id]/reviews.ts";
import * as $api_books_index from "./routes/api/books/index.ts";
import * as $api_initialize from "./routes/api/initialize.ts";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/books/[id].ts": $api_books_id_,
    "./routes/api/books/[id]/reviews.ts": $api_books_id_reviews,
    "./routes/api/books/index.ts": $api_books_index,
    "./routes/api/initialize.ts": $api_initialize,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
