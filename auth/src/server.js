const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () =>
  console.log(`Auth server has started on port ${PORT}`),
);
