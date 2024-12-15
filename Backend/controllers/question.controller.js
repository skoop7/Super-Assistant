export const getAllQuestions = async (req, res, QuestionType) => {
  try {
    const allQuestions = await QuestionType.find({}, { __v: 0 });

    console.log("allQuestions -> ", allQuestions);

    return res.status(200).json(allQuestions);
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    return res
      .status(500)
      .json({ message: "Failed to retrieve questions.", error: error });
  }
};

export const deleteQuestion = async (req, res, QuestionType) => {
  try {
    const { id } = req.body;
    console.log("id -> ", id);
    await QuestionType.findByIdAndDelete(id);

    return res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.error("Error fetching questions:", error.message);
    return res
      .status(500)
      .json({ message: "Failed to retrieve questions.", error: error });
  }
};

export const createQuestion = async (req, res, QuestionType) => {
  try {
    const data = req.body;

    if (data._id) {
      const updatedQuestion = await QuestionType.findOneAndUpdate(
        { _id: data._id },
        data,
        { new: true }
      );
      console.log("updated question -> ", updatedQuestion);
      return res
        .status(200)
        .json({ message: "updated the question", question: updatedQuestion });
    }

    const question = await QuestionType.create({ ...data });

    console.log("question -> ", question);
    return res.status(200).json({ message: "question created", question });
  } catch (error) {
    res.status(500).json({ message: "Error adding question", error });
  }
};
