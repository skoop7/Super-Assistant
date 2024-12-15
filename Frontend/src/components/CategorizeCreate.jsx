import { useMemo, useState } from "react";
import QuestionTypeHeader from "./QuestionTypeHeader";
import Container from "./Container";
import CategoryQuestion from "./sub_components/CategoryQuestion";
import { CATEGORY, SERVER_URL } from "../constants";
import useFetchQuestions from "../hooks/useFetchQuestions"; // Adjust path if necessary

const CategorizeCreate = () => {
  const [categoryQuestions, setCategoryQuestions] = useState(null);

  // Fetch data from the backend using the custom hook
  const { data, isLoading, error } = useFetchQuestions(CATEGORY);

  // Set category questions once the data is fetched
  useMemo(() => {
    if (data) {
      setCategoryQuestions(data);
    }
  }, [data]);

  // Handle preview and save data to the backend
  const handlePreview = async () => {
    try {
      if (!categoryQuestions) {
        throw new Error("No category questions available to save.");
      }

      // Prepare data to send to the backend
      const response = await fetch(`${SERVER_URL}/new/category`, {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Indicate that we're sending JSON data
        },
        body: JSON.stringify(categoryQuestions), // Convert the categoryQuestions state to JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Categorize Questions Saved:", result);
        alert("Category Questions Saved Successfully!");
      } else {
        throw new Error("Failed to save categorize questions");
      }
    } catch (error) {
      console.error("Failed to save categorize questions:", error.message);
      alert("Failed to save questions. Please try again.");
    }
  };

  // Handle Add New Question
  const handleAddNewQuestion = () => {
    setCategoryQuestions([
      ...categoryQuestions,
      {
        _id: crypto.randomUUID(),
        question: "",
        points: "0",
        categories: [""],
        items: [],
      },
    ]);
  };

  // Handle Add First Question
  const handleAddFirstQuestion = () => {
    setCategoryQuestions([
      {
        _id: crypto.randomUUID(),
        question: "",
        points: "0",
        categories: [""],
        items: [],
      },
    ]);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Error state
  }

  return (
    <Container>
      {/* Header Section */}
      <QuestionTypeHeader
        color="blue"
        handlePreview={handlePreview}
        type="Create Categorize Question"
      />

      {/* Add First Question Button */}
      {(!categoryQuestions || categoryQuestions.length === 0) && (
        <div className="flex justify-center items-center">
          <button
            onClick={handleAddFirstQuestion}
            className="mt-4 text-blue-500 hover:text-blue-700"
          >
            + Add First Question
          </button>
        </div>
      )}

      {/* Display Questions and Add New Question Button */}
      {categoryQuestions && categoryQuestions.length > 0 && (
        <>
          {/* Add New Question Button */}
          <div className="flex justify-center items-center mb-4">
            <button
              onClick={handleAddNewQuestion}
              className="text-blue-500 hover:text-blue-700"
            >
              + Add New Question
            </button>
          </div>

          {/* Display Category Questions */}
          {categoryQuestions.map((category, idx) => (
            <CategoryQuestion
              key={category._id}
              category={category}
              categoryQuestions={categoryQuestions}
              setCategoryQuestions={setCategoryQuestions}
              idx={idx}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default CategorizeCreate;
