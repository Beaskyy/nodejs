const authorize = (req, res, next) => {
  const { user } = req.query;

  if (req.user === "john") {
    res.send({ name: "John", id: 3 });
    next();
  } else {
    res.status(401).send("Unauthorized");
    next();
  }
};

module.exports = authorize;