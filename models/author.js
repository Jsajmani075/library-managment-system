import db from './db.js';

class Author {
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM authors', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static getAuthorById(author_id) {
    return new Promise((resolve, reject) => {
      
      db.query('SELECT * FROM authors WHERE author_id = ?', [author_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

export default Author;
