import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';
import generateTokens from '../utils/generateTokens';

require('dotenv').config();

export default function verifyRefreshToken(req, res, next) {
  const refresh = req.cookies[jwtConfig.refresh.name];

  try {
    // console.log(1);
    const user = jwt.verify(
      refresh,
      process.env.JWT_SIGNATURE_REFRESH,
    );
    // console.log(2, user);
    delete user.exp;
    delete user.iat;
    const { accessToken, refreshToken } = generateTokens(user);
    // console.log(3);
    res
      .cookie(jwtConfig.access.name, accessToken)
      .cookie(jwtConfig.refresh.name, refreshToken);

    next();
  } catch (error) {
    console.log(error);
    return res.redirect('/login');
  }
}
