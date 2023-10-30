import express from 'express';
import { Movie } from '../../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    title, year, type, img,
  } = req.body;
  const movie = await Movie.create({
    title, year, type, img,
  });
  res.json(movie);
});

router.delete('/:movieId', async (req, res) => {
  const { movieId } = req.params;
  await Movie.destroy({ where: { id: movieId } });
  res.sendStatus(200);
});

router.patch('/:movieId', async (req, res) => {
  await Movie.update(req.body, { where: { id: req.params.movieId } });
  res.sendStatus(200);
});

export default router;
