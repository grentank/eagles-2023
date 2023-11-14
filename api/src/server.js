const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () =>
  console.log(`API server has started on port ${PORT}`),
);
