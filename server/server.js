const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const decorator = require("./database/decorator");
require("dotenv").config();
require("./configPassport/passport")(passport);

const PORT = process.env.EXPRESS_HOST_PORT;

const app = express();

app.use(express.static("./server/public"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(decorator);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
