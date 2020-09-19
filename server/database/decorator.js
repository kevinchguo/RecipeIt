module.exports = function (req, res, next) {
  req.db = {};
  next();
};
