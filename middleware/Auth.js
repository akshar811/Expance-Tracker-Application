const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  let { token } = req.cookies;

  if (token) {
    let decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decode.id;
    next();
  } else {
    res.send("First Login");
  }
};

const authorize = (req, res, next) => {
  if (req.cookies.role !== "admin") {
    res.send("You are not authorized to access this page.");
  } else {
    next();
  }
};

module.exports = { Auth , authorize };
