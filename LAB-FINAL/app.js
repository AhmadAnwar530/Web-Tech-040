const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect('mongodb://127.0.0.1:27017/SemesterProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Route to list existing records
const sugarLevelRouter = require('./routes/api/sugarlevelRoutes');
app.use('/', sugarLevelRouter);

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
