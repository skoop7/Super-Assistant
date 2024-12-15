import mongoose from "mongoose";

const { Schema } = mongoose;

const ComprehensionQuestionSchema = new Schema({
  passage: { type: String },
  questions: [
    {
      text: { type: String },
      options: [{ type: String }],
      correctAnswer: { type: String },
      points: { type: String },
    },
  ],
});

const ComprehensionQuestion = mongoose.model(
  "comprehension",
  ComprehensionQuestionSchema
);

export { ComprehensionQuestion };
