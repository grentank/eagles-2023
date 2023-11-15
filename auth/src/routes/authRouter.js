const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../../db/models');
const generateTokens = require('../utils/generateTokens');
const jwtConfig = require('../config/jwtConfig');
const cookiesConfig = require('../config/cookiesConfig');

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValid = await bcrypt.compare(password, user.hashpass);
    if (!isValid) return res.status(400).json({ message: 'Invalid password' });

    const plainUser = user.get();
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens({
      user: plainUser,
    });
    res
      .status(200)
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .json({ user: plainUser, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

authRouter.post('/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, hashpass: await bcrypt.hash(password, 10) },
    });
    if (!created)
      return res.status(400).json({ message: 'Email already exists' });

    const plainUser = user.get();
    delete plainUser.hashpass;
    const { accessToken, refreshToken } = generateTokens({
      user: plainUser,
    });
    res
      .status(200)
      .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
      .json({ user: plainUser, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

authRouter.get('/logout', (req, res) => {
  res.clearCookie(jwtConfig.refresh.name).sendStatus(200);
});

module.exports = authRouter;
