import { Router } from "express";
import { CommentModel, IComment } from "../models/comment";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const comments: IComment[] = await CommentModel.find().exec();
    return res.json(comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const comment: IComment = req.body;

    const commentExists = await CommentModel.findOne({
      name: comment.name,
      comment: comment.comment
    }).exec();

    if (commentExists) {
      return res
        .status(409)
        .json({ error: "There is already another comment with this name" });
    }
    const newComment = await CommentModel.create(comment);
    return res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
