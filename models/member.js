import db from './db.js';

class Member {
  static getAllMembers() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM members', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  static getMemberById(member_id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM members WHERE member_id = ?', [member_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

export default Member;
