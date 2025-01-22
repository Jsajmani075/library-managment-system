import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  
  password: '',  
  database: 'library_system' 
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } 
  else {
    console.log('Connected to the database');
  }
});

export default db;
