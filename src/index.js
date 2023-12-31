const express = require("express");
const usersRoutes = require("./routes/users.js");

const app = express();

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Hello World",
  });
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
