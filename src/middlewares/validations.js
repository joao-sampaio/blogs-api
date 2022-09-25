const valDisplayName = (req, res, next) => {
  const data = req.body;
  const { displayName } = data;
  if (displayName.length < 8) {
    res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  } else {
    next();
  }
};

const valPassword = (req, res, next) => {
  const data = req.body;
  const { password } = data;
  if (password.length < 6) {
    res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  } else {
    next();
  }
};

const valEmail = async (req, res, next) => {
  const data = req.body;
  const { email } = data;
  if (!/^(.+)@(.+)$/.test(email)) {
    res.status(400).json({ message: '"email" must be a valid email' });
  } else {
    next();
  }
};

module.exports = {
  valDisplayName,
  valEmail,
  valPassword,
};