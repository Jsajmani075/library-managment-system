import express from 'express';
import { createBook, updateBook, deleteBook, getBooks, getBooksByAuthor } from '../controllers/booksController.js';

const router = express.Router();

router.post('/', createBook);  
router.put('/:book_id', updateBook); 
router.delete('/:book_id', deleteBook); 
router.get('/', getBooks);  
router.get('/author/:author_id', getBooksByAuthor); 

export default router;
