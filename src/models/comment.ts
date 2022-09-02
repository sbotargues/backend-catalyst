import { model, Schema, Document } from "mongoose";

interface IComment extends Document {
  name: string;
  comment: string;
}

const CommentSchema = new Schema({
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const CommentModel = model<IComment>("Comment", CommentSchema);

export { CommentModel, IComment };
