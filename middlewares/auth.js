const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "xyz";
  const isAuthorize = true;
  if (!isAuthorize) {
    res.status(403).send("You are not authorized to access this route");
  } else {
    next();
  }
};
module.exports = { adminAuth };
const userAuth = (req, res, next) => {
  console.log("User auth is getting checked");
  const token = "xyz";
  const isAuthorize = false;
  if (!isAuthorize) {
    res.status(403).send("You are not authorized to access this route");
  } else {
    next();
  }
};
module.exports = { adminAuth, userAuth };
