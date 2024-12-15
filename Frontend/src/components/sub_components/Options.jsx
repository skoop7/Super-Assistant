import React from "react";

const Options = ({
  option,
  index,
  q,
  questions,
  setQuestions,
  handleDeleteOption,
}) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="radio"
        checked={q.correctAnswer === option}
        onChange={() => {
          const updatedQuestions = [...questions];
          updatedQuestions[index].correctAnswer = option; // Set the selected option as the correct answer
          setQuestions(updatedQuestions);
        }}
      />
      <input
        type="text"
        value={option}
        onChange={(e) => {
          const updatedQuestions = [...questions];
          updatedQuestions[index].options = updatedQuestions[
            index
          ].options?.map((opt) => (opt === option ? e.target.value : opt));
          setQuestions(updatedQuestions);
        }}
        placeholder="Option"
        className="w-full p-2 border rounded-md"
      />
      <button
        onClick={() => handleDeleteOption(q._id, index)}
        className="text-red-500 hover:text-red-700"
      >
        ✖
      </button>
    </div>
  );
};

export default Options;
