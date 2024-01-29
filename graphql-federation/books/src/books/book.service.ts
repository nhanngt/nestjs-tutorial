import { randomUUID } from 'crypto';
import { Book } from './book.model';
import { faker } from '@faker-js/faker';

export class BookService {
  private books: Book[];

  constructor() {
    this.initBooks();
  }

  findById(id: number): Book {
    if (id >= this.books.length) {
      return null;
    }
    return this.books[id];
  }

  findAll(): Book[] {
    return this.books;
  }

  addNewBook(book: Omit<Book, 'id'>): Book {
    const newBook: Book = {
      ...book,
      id: this.books.length,
    };
    this.books.push(newBook);

    return newBook;
  }

  private initBooks() {
    for (let i = 0; i < 10; i++) {
      const newBook = new Book();
      newBook.id = i;
      newBook.title = faker.lorem.words(4);
      newBook.description = faker.lorem.paragraph(5);
      newBook.published_at = faker.date.past();
      this.books.push(newBook);
    }
  }
}
