const logoutRouter = require('express').Router();

logoutRouter.get('/', async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.accessToken) {
    return res.sendStatus(401);
  }

  res.clearCookie('accessToken', {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true
  });

  return res.sendStatus(204);
});

module.exports = logoutRouter;