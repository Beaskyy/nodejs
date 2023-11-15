const authorize = (req, res, next) => {

  if (req.query.user === "john") {
    res.send({ name: "John", id: 3 });
    next();
  } else {
    res.status(401).send("Unauthorized");
    next();
  }
};

module.exports = authorize;
