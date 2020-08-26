const express = require("express");
const cors = require("cors");

// Fire dotenv
require("dotenv").config();

// Express app
const app = express();

// Set template engine
app.set("view engine", "ejs");

// Fire middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));


// Fire routers
const indexRouter = require("./routes/indexRoute");

// Fire routes middleware
app.use('/', indexRouter);

// Listening PORT
const port = process.env.PORT || 3000;

// Set port to listen
app.listen(port, () => {
  console.log(`App is now online at port ${port}`);
});



