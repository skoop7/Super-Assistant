import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorizeQuestionSchema = new Schema({
  question: { type: String },
  points: { type: String },
  categories: [{ type: String }],
  items: [{ name: { type: String }, belongsTo: { type: String } }],
});

const CategorizeQuestion = mongoose.model(
  "categorize",
  CategorizeQuestionSchema
);

export { CategorizeQuestion };
