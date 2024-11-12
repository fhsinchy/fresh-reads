import { FreshContext } from "$fresh/server.ts";
import { BookRepository } from "../../repositories/BookRepository.ts";
import db from "../../services/Database.ts";
// import BookDTO from "../../dtos/BookDTO.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const bookRepository = new BookRepository(db)

  const books = bookRepository.findAll();
//   const responseBooks: BookDTO[] = [];

//   console.log(books);

//   books.forEach(book => responseBooks.push(new BookDTO(book.title, book.author)))
  
  return new Response(JSON.stringify(books));
};
