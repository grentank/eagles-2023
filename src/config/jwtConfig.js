const jwtConfig = {
  access: {
    name: 'accessToken',
    expiresIn: 1000 * 3,
  },
  refresh: {
    name: 'refreshToken',
    expiresIn: 1000 * 60 * 60 * 12,
  },
};

export default jwtConfig;
