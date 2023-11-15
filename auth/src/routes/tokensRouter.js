const express = require('express');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../config/cookiesConfig');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');

const tokensRouter = express.Router();

tokensRouter.get('/refresh', verifyRefreshToken, async (req, res) => {
  const currentRefreshToken = req.cookies[jwtConfig.refresh.name];
  const { user } = jwt.verify(
    currentRefreshToken,
    process.env.REFRESH_TOKEN_SECRET,
  );

  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .status(200)
    .cookie(jwtConfig.refresh.name, refreshToken, cookiesConfig.refresh)
    .json({ user, accessToken });
});

module.exports = tokensRouter;
