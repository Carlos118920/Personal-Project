const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const session = require("express-session");
const config = require("./backend/config.js");
const axios = require("axios");
var corsOptions = {
  origin: "http://localhost:3010"
}
const massive = require("massive")
const conn = massive.connectSync({
  connectionString : config.connectString
})

let app = module.exports = express();

app.set("db", conn);
app.set("axios", axios)

let db = app.get("db");

//controllers
let bCtrl = require("./backend/bCtrl")

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: config.sessionSecret
                }));

app.get("/courses/all", bCtrl.getAll);
app.get("/courses/:id", bCtrl.getCourse);
app.post("/submit", bCtrl.submitApplication);
app.get("/api", bCtrl.getLocationData);

let port = 3010;

app.listen(port, () => {
  console.log("Listening on port: " + port);
})
