import db from './db.js';

class Book {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM books', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static getBooksByAuthor(author_id) {
    return new Promise((resolve, reject) => {

      db.query('SELECT * FROM books WHERE author_id = ?', [author_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static addBook(title, genre, author_id) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO books (title, genre, author_id) VALUES (?, ?, ?)', [title, genre, author_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }


}

export default Book;
