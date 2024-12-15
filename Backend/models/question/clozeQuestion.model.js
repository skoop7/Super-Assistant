import mongoose from "mongoose";

const { Schema } = mongoose;

const ClozeQuestionSchema = new Schema({
  preview: { type: String },
  sentence: { type: String },
  blanks: [
    {
      value: { type: String },
      position: { type: Number },
    },
  ],
  points: { type: String },
  options: [{ type: String }],
});

const ClozeQuestion = mongoose.model("cloze", ClozeQuestionSchema);

export { ClozeQuestion };
