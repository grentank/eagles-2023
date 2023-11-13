const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiProductsRouter = require('./routes/apiProductsRouter');
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/v1/products', apiProductsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
