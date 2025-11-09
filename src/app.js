const express = require("express");
const app = express();
// app.use("/", (req, res) => {
//   res.send("Akshay world");
// });

app.get("/user", (req, res) => {
  res.send({ firstName: "Akshay", lastName: "Kumar" });
});
app.post("/user", (req, res) => {
  res.send("Data has been posted successfully");
});
app.delete("/user", (req, res) => {
  res.send("Data has been deleted successfully");
});
app.use("/test", (req, res) => {
  res.send("Hello world");
});
app.use("/hello", (req, res) => {
  res.send("Hello Hello world");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
