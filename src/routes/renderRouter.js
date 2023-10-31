import express from 'express';
import { Movie, User } from '../../db/models';
import verifyAccessToken from '../middlewares/verifyAccessToken';
import checkNotAuth from '../middlewares/checkNotAuth';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/movies', async (req, res) => {
  const initState = {};
  const movies = await Movie.findAll({ include: User });
  initState.movies = movies;
  res.render('Layout', initState);
});

// /movies/3
router.get('/movies/:movieId/', async (req, res) => {
  const movie = await Movie.findByPk(req.params.movieId);
  res.render('Layout', { movie });
});

router.get('/login', checkNotAuth, (req, res) =>
  res.render('Layout'),
);

router.get('/signup', checkNotAuth, (req, res) =>
  res.render('Layout'),
);

router.get('/account', verifyAccessToken, (req, res) =>
  res.render('Layout'),
);
router.get('/search', verifyAccessToken, async (req, res) => {
  const initState = {};
  const movies = await Movie.findAll({ include: User });
  initState.movies = movies;
  res.render('Layout', initState);
});

export default router;
