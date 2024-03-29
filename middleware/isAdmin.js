const error = require("../utils/error");

const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN") {
      throw error("You are not allowed to this route!", 403);
    }
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = isAdmin;
