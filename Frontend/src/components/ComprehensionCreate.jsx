import { useMemo, useState } from "react";
import QuestionTypeHeader from "./QuestionTypeHeader";
import Container from "./Container";
import useFetchQuestions from "../hooks/useFetchQuestions";
import { COMPREHENSION } from "../constants";
import ComprehensionQuestions from "./sub_components/ComprehensionQuestions";

const ComprehensionCreate = () => {
  const { data } = useFetchQuestions(COMPREHENSION);
  const [comprehensionQuestions, setComprehensionQuestions] = useState(null);

  useMemo(() => {
    if (data) {
      setComprehensionQuestions(data);
    }
  }, [data]);

  const handleAddFirstQuestion = () => {
    setComprehensionQuestions([
      {
        _id: crypto.randomUUID(),
        passage: "",
        questions: [
          {
            _id: crypto.randomUUID(),
            text: "",
            correctAnswer: "",
            options: [],
            points: "0",
          },
        ],
      },
    ]);
  };

  const handlePreview = () => {
    console.log("Comprehension Questions Data:", comprehensionQuestions);
    alert("Comprehension Saved!");
  };

  return (
    <Container>
      <QuestionTypeHeader
        type="Create Comprehension Question"
        handlePreview={handlePreview}
        color="orange"
      />
      {/* If no comprehension questions, show the "Add First Question" button */}
      {(!comprehensionQuestions || comprehensionQuestions.length === 0) && (
        <div className="flex justify-center items-center">
          <button
            onClick={handleAddFirstQuestion}
            className="mt-4 text-blue-500 hover:text-blue-700"
          >
            + Add First Question
          </button>
        </div>
      )}

      {/* Display the existing comprehension questions if data is available */}
      {comprehensionQuestions &&
        comprehensionQuestions.length > 0 &&
        comprehensionQuestions.map((comprehension) => (
          <ComprehensionQuestions
            key={comprehension._id}
            comprehensionQuestion={comprehensionQuestions}
            setComprehensionQuestions={setComprehensionQuestions}
            comp={comprehension}
          />
        ))}
    </Container>
  );
};

export default ComprehensionCreate;
