const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

server.use(cors());
server.use(bodyParser.json());
const users = [];

server.post("/login", (req, res) => {
  const user = req.body;
  console.log(user);
  console.log(users);
  const result = users.find(u => {
    return u.name === user.name && u.password === user.password;
  });
  console.log(result);
  if (result) {
    res.send("exist");
  }
});

server.post("/register", (req, res) => {
  const user = req.body;
  if (user) {
    users.push(user);
    res.send("successful");
  }
});
server.listen(4141, () => {
  console.log("===== server is running on port 4141 =====  ");
});
