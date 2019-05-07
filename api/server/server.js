const express = require("express");
const helmet = require("helmet");
const session = require("express-session");

const userRouter = require("../routes/user-router.js");

const server = express();

const sessionConfig = {
  name: "cookies",
  secret: `don't tell anyone!!`,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 6 * 1,
    secure: false
  },
  resave: false,
  saveUninitialized: true
};

server.use(session(sessionConfig));

server.use(helmet());
server.use(express.json());

server.use("/", userRouter);

server.get("/", (req, res) => {
  res.status(200).send("Server currently running!!");
});

module.exports = server;
