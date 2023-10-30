import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import jwtConfig from '../../config/jwtConfig';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/signup', async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).send('All field should be non empty');
  }

  const hash = await bcrypt.hash(password, 13);

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, hashpass: hash },
  });

  if (!created) {
    return res.status(400).send('Email already in use');
  }

  const plainUser = user.get();
  delete plainUser.hashpass;

  const { accessToken, refreshToken } = generateTokens(plainUser);

  return res
    .cookie(jwtConfig.access.name, accessToken)
    .cookie(jwtConfig.refresh.name, refreshToken)
    .sendStatus(200);
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('All field should be non empty');
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).send('Invalid email');
  }

  const isValid = await bcrypt.compare(password, user?.hashpass);

  if (!isValid) {
    return res.status(400).send('Invalid  password');
  }

  const plainUser = user.get();
  delete plainUser.hashpass;

  const { accessToken, refreshToken } = generateTokens(plainUser);

  return res
    .cookie(jwtConfig.access.name, accessToken)
    .cookie(jwtConfig.refresh.name, refreshToken)
    .sendStatus(200);
});

apiAuthRouter.get('/logout', (req, res) =>
  res.clearCookie(jwtConfig.access.name).clearCookie(jwtConfig.refresh.name).redirect('/'),
);

export default apiAuthRouter;
