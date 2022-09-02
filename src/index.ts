import "./lib/db";
import express from "express";
import commentRoutes from "./routes/comment";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());

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
