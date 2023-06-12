const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const req = require("express/lib/request");
// const res = require("express/lib/response");

const app = express();

var ACTIVE_SESSION = false;
var ACTIVE_USER = null;
var ACTIVE_ID = null;

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
  multipleStatements: true
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});


app.use(express.json());


app.post("/register", (req, res) => {
  const emailREQ = req.body.email;
  const passwordREQ = req.body.password;

  console.log(emailREQ);
  console.log(passwordREQ);

  if (emailREQ != "" && passwordREQ != "") {
    let user = {
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
        ACTIVE_ID = result[0].id;
        // callback();
      } else {
        res.send({ message: "Wrong login/pass" });
      }
    }
  );
});

function callback(){
  db.query(
    "SELECT ID FROM users WHERE email = ?",
    [ACTIVE_USER],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        console.log("SET ACTIVE_ID");
        ACTIVE_ID = result.ID;
      } else {
        res.send({ message: "Wrong email" });
      }
    }
  );
}

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
    ACTIVE_ID = null;
    res.send({userSignedOutSuccesfully: true});
  } else {
    res.send({userSignedOutSuccesfully: false});
  }
});

app.post("/getAdressesETH", (req, res) => {

    let actualUserAddress;
    let addresses = [];

    db.query(
      `select address from eth_addresses where user_id = (select id from users where email = ?);`,
      [ACTIVE_USER],
      (err, result) => {
        if (err) {
          res.send({err: err});
        }
        if (result.length > 0) {
          console.log("[res]: ", result);
          actualUserAddress = result;
          res.send(result)
        } else {
          res.send({ message: "DB error" });
        }
      }
    );
});

app.post("/getAdressesAndDateETH", (req, res) => {

  let actualUserAddress;
  let addresses = [];

  db.query(
    `select address, created_at from eth_addresses where user_id = (select id from users where email = ?);`,
    [ACTIVE_USER],
    (err, result) => {
      if (err) {
        res.send({err: err});
      }
      if (result.length > 0) {
        console.log("[res]: ", result);
        actualUserAddress = result;
        res.send(result)
      } else {
        res.send({ message: "DB error" });
      }
    }
  );
});

app.listen("3000", () => {
    console.log("running server server");
});

app.post("/addWallet", (req, res) => {
  const nameREQ = req.body.name;
  const addressREQ = req.body.address;

  console.log(nameREQ);
  console.log(addressREQ);

  if (nameREQ && addressREQ) {
    // Create an object with the values to be inserted
    let addressQ = {
      address: addressREQ,
      user_id: Number(ACTIVE_ID),
      name: nameREQ,
    };

    let sql = "INSERT INTO eth_addresses SET ?";
    let query = db.query(sql, addressQ, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("");
    });
  } else {
    res.send("Name and address are required...");
  }
});