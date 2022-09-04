require("./lib/db");
const express = require("express");
const cors = require('cors');
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const authRouter = require("./routes/auth");
const homeRouter = require("./routes/home");
const profileRouter = require("./routes/profile");
const postRouter = require("./routes/post");
const searchRouter = require("./routes/search");
const fileUploadRouter = require("./routes/file-upload-routes")

const app = express();
const port = process.env.PORT || 3333;

//SESSION MIDDLEWARE
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    secret: 'catalyst',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(cors());

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /comments to view all the comments" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// MIDDLEWARE
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ROUTER MIDDLEWARE

 app.use("/auth", authRouter);
 app.use("/home", homeRouter);
 app.use("/profile", profileRouter);
 app.use("/post", postRouter);
 app.use("/search", searchRouter);
 app.use("/", fileUploadRouter);

 // ERROR HANDLING
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

module.exports = app;
