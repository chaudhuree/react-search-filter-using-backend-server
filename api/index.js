const express = require("express");
const cors = require("cors");
const users = require("./users");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  const { search } = req.query;
  console.log(search);
  const keys = ["first_name", "last_name", "email"];
  const searchUser = (data) => {
    return data.filter((user) => {
      return keys.some((key) => user[key].toLowerCase().includes(search));
    });
  };
  // res.json(users)
  // console.log(searchUser(users));
  search ? res.json(searchUser(users)) : res.json(users);
});
app.listen(5000, () => console.log("api running on port no 5000"));
