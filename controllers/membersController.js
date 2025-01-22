import db from '../models/db.js';

// Register new member
export const registerMember = (req, res) => {
  const { name, contact_info } = req.body;
  
  const query = 'INSERT INTO members (name, contact_info) VALUES (?, ?)';
  db.query(query, [name, contact_info], (err, results) => {
    if (err) return res.status(500).json({
       message: 'Error registering member', error: err
       });
    res.status(201).json({ 
      message: 'Member registered successfully', memberId: results.insertId 
    });
  });
};

// Borrow book
export const borrowBook = (req, res) => {
  const { book_id, member_id } = req.body;
  const returnDeadline = new Date();
  returnDeadline.setDate(returnDeadline.getDate() +5);  
  
  const query = 'INSERT INTO borrow_history (book_id, member_id, borrow_date, return_deadline) VALUES (?, ?, NOW(), ?)';
  
  db.query(query, [book_id, member_id, returnDeadline], (err, results) => {

    if (err) return res.status(500).json({ 
      message: 'Error borrowing book', error: err
     });
    res.status(201).json({ 
      message: 'Book borrowed successfully', borrowId: results.insertId 
    });
  });
};

// Get due books for  member
export const getOverdueBooks = (req, res) => {
  const { member_id } = req.params;

  const query = `
    SELECT * FROM borrow_history 
    WHERE member_id = ? 
    AND returned IS NULL 
    AND return_deadline < NOW()
  `;

  db.query(query, [member_id], (err, results) => {
    if (err) {
      return res.status(500).json({

        message: 'Error fetching overdue books',
        error: err,
      });
    }

    res.status(200).json({

      overdueBooks: results,
   
    });
  });
};

