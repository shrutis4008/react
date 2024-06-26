import { db } from "../db.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(
    q,
    [req.body.email, req.body.username, req.body.password],
    (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");

      //Hash the password and create a user
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(req.body.password, salt);

      const q =
        "INSERT INTO users(`username`,`email`,`password`) VALUES (?);"
      const values = [req.body.username, req.body.email, req.body.password];

      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
      });
    }
  );
};

export const login = (req, res) => {
const q = "SELECT * from users WHERE username=? AND password=?"
// const values =[
//   req.body.usrname,
//   req.body.password
// ]
if (err) return res.json(err);
if (data.length === 0) return res.status(404).json('User not found!')

db.query(
  q,
  [req.body.username, req.body.password],
  (err, data) => {
    if (err) return res.jason("login failed")
    if (data.length) return res.status(409).json("User already exists!");
  })




};
export const logout = (req, res) => {};
