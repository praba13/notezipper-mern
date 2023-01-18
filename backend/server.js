const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const app = express();

dotenv.config();

app.use(express.json());

/* app.get('/api/notes', (req, res) => {
  res.send('Api is running');
}); */

/* app.get('/api/notes/:id', (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
}); */

app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running On PORT ${PORT}`.yellow.bold);
});
