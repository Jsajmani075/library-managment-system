import express from 'express';
import { registerMember, borrowBook, getOverdueBooks } from '../controllers/membersController.js';

const router = express.Router();

router.post('/', registerMember); 
router.post('/borrow', borrowBook); 
router.get('/overdue/:member_id', getOverdueBooks);  

export default router;
