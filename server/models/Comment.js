import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  userName: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Comment = model("comment", commentSchema);

export default Comment;
