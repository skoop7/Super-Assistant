import { useState } from "react";
import Container from "../Container";

const Comprehension = () => {
  // Passage and questions data
  const passage = `
    Water is essential for life on Earth. It helps to regulate the planet's temperature, 
    shapes its landscapes, and provides habitat for millions of species. What makes water 
    so special is the water cycle, also known as the hydrological cycle.
    
    The water cycle describes the continuous movement of water on, above, and below 
    the surface of the Earth. Water can exist in three states: liquid, gas, and solid. 
    As the Sun heats Earth’s surface, water in rivers, lakes, and oceans evaporates 
    and turns into vapor or water gas in the clouds. The water vapor then rises and 
    cools in the atmosphere, condensing into tiny droplets of liquid water that form 
    clouds. When the droplets become too large and heavy to stay suspended in the atmosphere, 
    they fall back to the surface as precipitation in the form of rain or snow.
  `;

  const questions = [
    {
      id: 3.1,
      text: "According to the passage, one key feature of the water cycle is that:",
      options: [
        "Water evaporates from the surface into the atmosphere.",
        "Water only exists in liquid form.",
        "Water moves from the surface to deep underground.",
        "Water remains in the clouds forever.",
      ],
      correctAnswer: 0,
    },
    {
      id: 3.2,
      text: "What is the role of the Sun in the water cycle?",
      options: [
        "It cools the water vapor.",
        "It heats the Earth's surface, causing evaporation.",
        "It condenses water droplets into clouds.",
        "It turns water into solid ice.",
      ],
      correctAnswer: 1,
    },
  ];

  // State for tracking the selected answer
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // State for tracking which question is expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Handle answer selection
  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  // Handle toggle functionality
  const toggleQuestion = (questionId) => {
    setExpandedQuestion((prev) => (prev === questionId ? null : questionId));
  };

  return (
    <Container>
      {/* Passage */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">The Water Cycle</h2>
        <p className="text-gray-700 whitespace-pre-line">{passage}</p>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions?.map((question) => (
          <div key={question.id} className="border rounded-md p-4">
            {/* Question header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(question.id)}
            >
              <h3 className="text-lg font-medium">Question {question.id}</h3>
              <span className="text-gray-500">
                {expandedQuestion === question.id ? "▲" : "▼"}
              </span>
            </div>

            {/* Render options only if the question is expanded */}
            {expandedQuestion === question.id && (
              <div className="space-y-2 mt-4">
                {question.options?.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      id={`q${question.id}-option-${index}`}
                      className="mr-2"
                      checked={selectedAnswers[question.id] === index}
                      onChange={() => handleAnswerSelect(question.id, index)}
                    />
                    <label
                      htmlFor={`q${question.id}-option-${index}`}
                      className="text-gray-700 cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Comprehension;
