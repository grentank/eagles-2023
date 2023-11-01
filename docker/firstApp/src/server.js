import express from 'express';
import path from 'path';
import apiRouter from './routes/apiRouter';
import indexRouter from './routes/indexRouter';
import customRender from './utils/customRender';

require('dotenv').config();

const PORT = process.env.PORT ?? 3005;

const app = express();

app.engine('js', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'js');
app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
