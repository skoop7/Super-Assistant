import { useCallback, useState } from "react";
import Container from "../Container";

const Cloze = () => {
  const [sentence, setSentence] = useState("A quick ___ fox jumped over a ___");
  const [options, setOptions] = useState([
    { id: 1, value: "brown", enabled: true },
    { id: 2, value: "fence", enabled: true },
  ]);
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
  });

  // Temporary will change later on
  useCallback(() => {
    setSentence("A quick ___ fox jumped over a ___");
    setOptions([
      { id: 1, value: "brown", enabled: true },
      { id: 2, value: "fence", enabled: true },
    ]);
    console.log(answers);
  }, []);

  const handleDragStart = (e, option) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(option));
  };

  const handleDrop = (e, blankId) => {
    e.preventDefault();
    const droppedOption = JSON.parse(e.dataTransfer.getData("text/plain"));

    setAnswers((prev) => ({
      ...prev,
      [blankId]: droppedOption.value,
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h2 className="text-lg font-semibold mb-4">Cloze Question</h2>
      <div className="mb-4">
        <p className="text-lg">
          {sentence.split(" ")?.map((word, index) => {
            if (word === "___") {
              const blankId = index + 1;
              return (
                <span
                  key={index}
                  onDrop={(e) => handleDrop(e, blankId)}
                  onDragOver={handleDragOver}
                  className="inline-block w-20 h-8 border-b-2 border-gray-400 text-center mx-1 cursor-pointer"
                >
                  {answers[blankId] || " "}
                </span>
              );
            }
            return <span key={index}>{word} </span>;
          })}
        </p>
      </div>

      <div className="flex gap-4">
        {options?.map((option) => (
          <div
            key={option.id}
            draggable
            onDragStart={(e) => handleDragStart(e, option)}
            className="bg-blue-200 text-blue-800 px-4 py-2 rounded-md cursor-pointer"
          >
            {option.value}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Cloze;
