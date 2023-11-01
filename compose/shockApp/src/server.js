import express from 'express';
import path from 'path';
import apiRouter from './routes/apiRouter';
import indexRouter from './routes/indexRouter';
import customRender from './utils/customRender';

const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const { createClient } = require('redis');

const redisClient = createClient({
  url: process.env.REDIS,
  legacyMode: true,
});
redisClient.connect().catch(console.error);

require('dotenv').config();

const PORT = process.env.PORT ?? 3002;

const app = express();

app.engine('js', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'js');
app.use(express.static('public'));
app.use(express.json());

app.use(session({
  name: 'sId',
  store: new RedisStore({ client: redisClient }),
  secret: 'fjdsfhsue',
  resave: false,
  saveUninitialized: false,
  maxAge: 365 * 24 * 60 * 60 * 1000,
}));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
