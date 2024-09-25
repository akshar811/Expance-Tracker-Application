const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User_Schema");


const signup = async (req, res) => {
  let { username, email, password , role} = req.body;
  let users = await User.findOne({ email: email });
  if (!users) {
    bcrypt.hash(password, 10, async (err, hash) => {
      let obj = {
        username: username,
        email: email,
        password: hash,
        role: role
      };
      console.log(password);

      let val = await User.create(obj);
      res.cookie("id", val._id).cookie("Role", val.role);
      res.status(200).json({ msg: "created successfully ", data: val });
    });
  } else {
    res.status(400).json({ msg: "This Email'id Already Exists" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let data = await User.findOne({ email: email });
  if (data) {
    bcrypt.compare(password, data.password, (err, result) => {
      if (result) {
        let token = jwt.sign({ id: data._id }, process.env.JWT_SECRET , { expiresIn: '1h' });
        res.cookie("token", token).cookie("id", data._id).cookie("Role", data.role);
        res.status(200).json({ message: "Log in Successfully", data });
      } else {
        res.send({ msg: "Password incorrect" });
      }
    });
  } else {
    res.send({ msg: "User not found" });
  }
};

module.exports = { signup, login };
