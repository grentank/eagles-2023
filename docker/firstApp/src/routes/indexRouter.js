import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const inDocker = process.env.INDOCKER;
  console.log(inDocker);
  res.render('Layout', { inDocker });
});

export default router;
