import { useState } from "react";
import Points from "./Points";
import CategoriesSection from "./CategoriesSection";
import ItemsSection from "./ItemsSection";
// import SideButtons from "./SideButtons";

const CategoryQuestion = ({
  category,
  categoryQuestions,
  setCategoryQuestions,
  idx,
}) => {
  const [currCategory, setCurrCategory] = useState(category);

  // Add a new category
  const handleAddCategory = () => {
    setCurrCategory({
      ...currCategory,
      categories: [...currCategory.categories, ""],
    });
  };

  // Remove a category by name
  const handleRemoveCategory = (categoryName) => {
    setCurrCategory({
      ...currCategory,
      categories: currCategory.categories.filter((val) => val !== categoryName),
    });
  };

  // Add a new item
  const handleAddItem = (itemName, categoryName) => {
    setCurrCategory({
      ...currCategory,
      items: [
        ...currCategory.items,
        { name: itemName, belongsTo: categoryName },
      ],
    });
  };

  // Remove an item by name
  const handleRemoveItem = (itemName, categoryName) => {
    setCurrCategory({
      ...currCategory,
      items: currCategory.items.filter(
        (val) => val.name !== itemName && val.belongsTo !== categoryName
      ),
    });
  };

  return (
    <div key={category._id} className="mb-2 flex justify-start items-start">
      {/* Left Side: Question Creation Section */}
      <div className="w-[90%] border border-l-blue-200 border-l-8 p-6 rounded-md">
        {/* Question and Points Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Question Input */}
          <div className="w-[75%]">
            <label className="block text-lg font-semibold mb-2">
              {`${idx + 1}.`} Question
            </label>
            <input
              type="text"
              value={category.question}
              onChange={(e) => {
                const updatedCategory = {
                  ...category,
                  question: e.target.value,
                };
                setCurrCategory(updatedCategory);

                // Update the parent state
                setCategoryQuestions(
                  categoryQuestions?.map((q) =>
                    q._id === category._id ? updatedCategory : q
                  ) || []
                );
              }}
              placeholder="Enter your question"
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* Points Input */}
          <div className="w-[20%]">
            <Points
              points={category.points}
              setPoints={(points) => {
                const updatedCategory = { ...category, points };
                setCurrCategory(updatedCategory);

                // Update the parent state
                setCategoryQuestions(
                  categoryQuestions?.map((q) =>
                    q._id === category._id ? updatedCategory : q
                  ) || []
                );
              }}
            />
          </div>
        </div>
        {/* Categories Section */}
        <CategoriesSection
          currCategory={currCategory}
          setCurrCategory={setCurrCategory}
          handleAddCategory={handleAddCategory}
          handleRemoveCategory={handleRemoveCategory}
        />
        {/* Items Section */}
        <ItemsSection
          currCategory={currCategory}
          setCurrCategory={setCurrCategory}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
        />
      </div>

      {/* Right Side: Add/Delete Buttons */}
      {/* <SideButtons /> */}
    </div>
  );
};

export default CategoryQuestion;
