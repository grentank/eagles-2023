const isAuth = (req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  res.redirect('/');
};

export default isAuth;
