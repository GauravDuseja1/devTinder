const express = require("express");
const { adminAuth, userAuth } = require("../middlewares/auth");

const app = express();
app.use("/admin", adminAuth);
// app.use("/user");
app.get("/user/login", (req, res) => {
  res.send("User login succesfully");
});
app.get("/user", userAuth, (req, res) => {
  res.send("User route is accessed");
});
app.get("/admin/getAllData", (req, res) => {
  res.send("Get all admin data");
});
app.get("/admin/updateData", (req, res) => {
  res.send("Get all updated data");
});
app.use(
  "/ram",
  (req, res, next) => {
    console.log("This is first middleware for /user route");
    // res.send("Akshay world");
    next();
  },
  (req, res) => {
    console.log("This is second middleware");
    res.send("Response from second middleware");
  },
  (req, res) => {
    console.log("This is second middleware");
    // res.send("Response from second middleware");
  }
);

// app.get("/user", (req, res) => {
//   res.send({ firstName: "Akshay", lastName: "Kumar" });
// });
// app.post("/user", (req, res) => {
//   res.send("Data has been posted successfully");
// });
// app.delete("/user", (req, res) => {
//   res.send("Data has been deleted successfully");
// });
// app.use("/test", (req, res) => {
//   res.send("Hello world");
// });
// app.use("/hello", (req, res) => {
//   res.send("Hello Hello world");
// });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
