const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const req = require("express/lib/request");
// const res = require("express/lib/response");

const app = express();

var ACTIVE_SESSION = false;
var ACTIVE_USER = null;

app.use(
  cors() //{
  //origin: "*",
  //})
);

//app.use(express());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "coinwallet",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

app.use(express.json());


app.post("/register", (req, res) => {
  const usernameREQ = req.body.username;
  const emailREQ = req.body.email;
  const passwordREQ = req.body.password;

  console.log(usernameREQ);
  console.log(emailREQ);
  console.log(passwordREQ);

  if (usernameREQ != "" && usernameREQ != "" && usernameREQ != "") {
    let user = {
      username: usernameREQ,
      email: emailREQ,
      password: passwordREQ,
    };
    let sql = "INSERT INTO users SET ?";
    let query = db.query(sql, user, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("User table inserted...");
    });
  } else {
    res.send("Catched null...");
  }
});

app.post("/login", (req, res) => {
  const emailREQ = req.body.email;
  const passwordREQ = req.body.password;

  console.log("backend");
  console.log(emailREQ);
  console.log(passwordREQ);
  console.log("backend");

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [emailREQ, passwordREQ],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
        console.log("ZALOGOWANO");
        ACTIVE_SESSION = true;
        ACTIVE_USER = emailREQ;
      } else {
        res.send({ message: "Wrong login/pass" });
      }
    }
  );
});

app.post("/checkSession", (req, res) => {

    if (ACTIVE_SESSION === true) {
      res.send({ACTIVE_SESSION, ACTIVE_USER});
    } else {
      res.send({ message: "No active session" });
    }

});

app.post("/signout", (req, res) => {

  if (ACTIVE_SESSION === true) {
    ACTIVE_SESSION = false;
    ACTIVE_USER = null;
    res.send({userSignedOutSuccesfully: true});
  } else {
    res.send({userSignedOutSuccesfully: false});
  }

});

app.listen("3000", () => {
    console.log("running server server");
});