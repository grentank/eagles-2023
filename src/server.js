import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import jsxRender from './jsxRender';
import renderRouter from './routes/renderRouter';
import moviesApiRouter from './routes/api/moviesApiRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import resLocals from './middlewares/resLocals';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(resLocals);

app.use('/', renderRouter);
app.use('/api/movies/', moviesApiRouter);
app.use('/api/auth', apiAuthRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
