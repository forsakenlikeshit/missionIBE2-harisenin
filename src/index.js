const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');

const courseRouter = require('./routes/course.router');
const tutorRouter = require('./routes/tutor.router');
const kategoriRouter = require('./routes/kategori.router');
const reviewRouter = require('./routes/review.router');

require('./models');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/course', courseRouter);
app.use('/tutor', tutorRouter);
app.use('/kategori', kategoriRouter);
app.use('/review', reviewRouter);

app.get('/', (req, res) => {
  res.send('videobelajar API Running');
});

const PORT = process.env.SERVER_PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected!');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
