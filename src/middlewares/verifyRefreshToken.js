import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';
import generateTokens from '../utils/generateTokens';

require('dotenv').config();

export default function verifyRefreshToken(req, res, next) {
  const refresh = req.cookies[jwtConfig.refresh.name];


  try {
    const user = jwt.verify(refresh, process.env.JWT_SIGNATURE_REFRESH);
    const { accessToken, refreshToken } = generateTokens(user);
    res.cookie(jwtConfig.access.name, accessToken).cookie(jwtConfig.refresh.name, refreshToken);

    next();
  } catch (error) {
    return res.redirect('/login');
  }
}
