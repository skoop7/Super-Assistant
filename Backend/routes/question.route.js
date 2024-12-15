import { Router } from "express";
import { CategorizeQuestion } from "../models/question/categorizeQuestion.model.js";
import {
  createQuestion,
  deleteQuestion,
  getAllQuestions,
} from "../controllers/question.controller.js";
import { ComprehensionQuestion } from "../models/question/comprehenstionQuestion.model.js";
import { ClozeQuestion } from "../models/question/clozeQuestion.model.js";

const router = Router();

const routeHandler = (model) => {
  return {
    create: (req, res) => createQuestion(req, res, model),
    getAll: (req, res) => getAllQuestions(req, res, model),
    delete: (req, res) => deleteQuestion(req, res, model),
  };
};

// Routes for category
const categoryHandler = routeHandler(CategorizeQuestion);
router
  .post("/category", categoryHandler.create)
  .get("/category", categoryHandler.getAll)
  .delete("/category/", categoryHandler.delete);

//  Routes for Cloze
const clozeHandler = routeHandler(ClozeQuestion);
router
  .post("/cloze", clozeHandler.create)
  .get("/cloze", clozeHandler.getAll)
  .delete("/cloze/", clozeHandler.delete);

// Routes for Comprehension
const comprehensionHandler = routeHandler(ComprehensionQuestion);
router
  .post("/comprehension", comprehensionHandler.create)
  .get("/comprehension", comprehensionHandler.getAll)
  .delete("/comprehension/", comprehensionHandler.delete);

export { router };
