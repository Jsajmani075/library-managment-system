import express from 'express';
import { createAuthor, updateAuthor, deleteAuthor } from '../controllers/authorsController.js';

const router = express.Router();

router.post('/', createAuthor);  
router.put('/:author_id', updateAuthor);  
router.delete('/:author_id', deleteAuthor); 

export default router;
