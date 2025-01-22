import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import memberRoutes from './routes/memberRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/members', memberRoutes);

app.listen(port, () => {
  console.log(`Server running on :${port}`);
});
