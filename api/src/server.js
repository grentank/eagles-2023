const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiPostsRouter = require('./routes/apiPostsRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/posts', apiPostsRouter);

app.listen(PORT, () =>
  console.log(`API server has started on port ${PORT}`),
);
