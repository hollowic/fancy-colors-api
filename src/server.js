const ENV = require("./environment");
const PORT = process.env.PORT || 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const server = require("http").createServer(app);

// PG database client/connection setup
const db = require("./db/index");

app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json("hello: world");
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}, in ${ENV}`);
});
