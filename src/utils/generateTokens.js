import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwtConfig';

require('dotenv').config();

const generateTokens = (payload) => ({
  accessToken: jwt.sign(payload, process.env.JWT_SIGNATURE_ACCESS, {
    expiresIn: jwtConfig.access.expiresIn.toString(),
  }),
  refreshToken: jwt.sign(payload, process.env.JWT_SIGNATURE_REFRESH, {
    expiresIn: jwtConfig.refresh.expiresIn.toString(),
  }),
});

export default generateTokens;
