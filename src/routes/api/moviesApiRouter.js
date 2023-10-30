import express from 'express';
import { Movie, User } from '../../../db/models';
import verifyAccessToken from '../../middlewares/verifyAccessToken';
import checkAuthor from '../../middlewares/checkAuthor';

const router = express.Router();

router.post('/', verifyAccessToken, async (req, res) => {
  const { title, year, type, img } = req.body;
  const movie = await Movie.create({
    title,
    year,
    type,
    img,
    userId: res.locals.user.id,
  });
  const movieWithAuthor = await Movie.findOne({
    where: { id: movie.id },
    include: User,
  });
  res.json(movieWithAuthor);
});

router.delete(
  '/:movieId',
  verifyAccessToken,
  checkAuthor,
  async (req, res) => {
    const { movieId } = req.params;
    await Movie.destroy({ where: { id: movieId } });
    res.sendStatus(200);
  },
);

router.patch(
  '/:movieId',
  verifyAccessToken,
  checkAuthor,
  async (req, res) => {
    await Movie.update(req.body, {
      where: { id: req.params.movieId },
    });
    res.sendStatus(200);
  },
);

export default router;
