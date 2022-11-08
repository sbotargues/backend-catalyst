require("./lib/db");
const express = require("express");
const commentRoutes = require("./app/routes/comment");
const questionsRoutes = require("./app/routes/questions");
const eventsRoutes = require('./app/routes/event')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());
app.use(bodyParser.json())

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /comments to view all the comments" });
});

app.use("/comments", commentRoutes);
app.use("/words", commentRoutes);
app.use("/questions", questionsRoutes);
app.use("/events", eventsRoutes)
require("./app/routes/auth")(app);
require("./app/routes/user")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});