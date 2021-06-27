const express = require("express");
const app = express();
const path = require("path");
const data = require('./data.json');
const bodyParser = require("body-parser");

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/static", express.static(path.join(__dirname, "./build/static")));

app.get("/news", function (req, res) {
  console.log(req);
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});

app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: path.join(__dirname, "./build/") });
});

const port = process.env.APP_PORT || 3004;
app.listen(port);
console.log("App is listening on port " + port);
