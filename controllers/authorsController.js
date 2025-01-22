import db from '../models/db.js';

// create author
export const createAuthor = (req, res) => {

  const { name, bio } = req.body;
  
  const query = 'INSERT INTO authors (name, bio) VALUES (?, ?)';

  db.query(query, [name, bio], (err, results) => {

    if (err) return res.status(500).json({ 
      message: 'Error creating author', error: err 
    });
    res.status(201).json({
       message: 'Author created successfully', authorId: results.insertId
       });
  });
};

// Update  author
export const updateAuthor = (req, res) => {
  const { author_id } = req.params;
  const { name, bio } = req.body;

  const query = 'UPDATE authors SET name = ?, bio = ? WHERE id = ?';
  db.query(query, [name, bio, author_id], (err, results) => {
    if (err) return res.status(500).json({
       message: 'Error updating author', error: err
       });
    res.status(200).json({ 
      message: 'Author updated successfully' 
    });
  });
};

// Delete  author
export const deleteAuthor = (req, res) => {
  const { author_id } = req.params;

  const query = 'DELETE FROM authors WHERE id = ?';
  
  db.query(query, [author_id], (err, results) => {

    if (err) return res.status(500).json({ 
      message: 'Error deleting author', error: err
     });
    res.status(200).json({ 
      message: 'Author deleted successfully' 
    });
  });
};
