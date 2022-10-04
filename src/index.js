require("./lib/db");
const express = require("express");
const commentRoutes = require("./routes/comment");
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /comments to view all the comments" });
});

app.use("/comments", commentRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});