import db from './db.js';

class BorrowHistory {
  static getBorrowHistory() {
    return new Promise((resolve, reject) => {

      db.query('SELECT * FROM borrow_history', (err, results) => {
        
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static getOverdueBooks(member_id) {
    return new Promise((resolve, reject) => {

      const today = new Date().toISOString().split('T')[0]; 
      db.query(
        'SELECT * FROM borrow_history WHERE member_id = ? AND return_date < ? AND returned = FALSE',
        [member_id, today],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }


}

export default BorrowHistory;
