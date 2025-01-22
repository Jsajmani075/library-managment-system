import db from '../models/db.js';

// Create  book
export const createBook = (req, res) => {
  const { title, author_id, genre, availability } = req.body;
  
  const query = 'INSERT INTO books (title, author_id, genre, availability) VALUES (?, ?, ?, ?)';
  const values = [title, author_id, genre, availability];
  
  db.query(query, values, (err, results) => {
    if (err) return res.status(500).json({ 
      message: 'Error creating book', error: err 
    });
    res.status(201).json({ 
      message: 'Book created successfully', bookId: results.insertId
     });
  });
};

// Update book
export const updateBook = (req, res) => {
  const { book_id } = req.params;
  const { title, author_id, genre, availability } = req.body;

  const query = 'UPDATE books SET title = ?, author_id = ?, genre = ?, availability = ? WHERE id = ?';
  const values = [title, author_id, genre, availability, book_id];
  
  db.query(query, values, (err, results) => {
    if (err) return res.status(500).json({
       message: 'Error updating book', error: err 
      });
    res.status(200).json({ 
      message: 'Book updated successfully' 
    });
  });
};

// Delete book
export const deleteBook = (req, res) => {
  const { book_id } = req.params;

  const query = 'DELETE FROM books WHERE id = ?';
  
  db.query(query, [book_id], (err, results) => {
    if (err) return res.status(500).json({ 
      message: 'Error deleting book', error: err 
    });
    res.status(200).json({
       message: 'Book deleted successfully' 
      });
  });
};

// books by a specific author
export const getBooksByAuthor = (req, res) => {
  const { author_id } = req.params;

  const query = 'SELECT * FROM books WHERE author_id = ?';
  db.query(query, [author_id], (err, results) => {
    if (err) return res.status(500).json({
       message: 'Error fetching books by author', error: err 
      });
    res.status(200).json({ 
      books: results 

    });
  });
};

// all books
export const getBooks = (req, res) => {
  const query = 'SELECT * FROM books';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({
       message: 'Error fetching books', error: err 
      });
    res.status(200).json({ 
      books: results 
    });
  });
};
