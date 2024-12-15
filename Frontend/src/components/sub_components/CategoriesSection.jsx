const CategoriesSection = ({
  currCategory,
  setCurrCategory,
  handleRemoveCategory,
  handleAddCategory,
}) => {
  const handleCategoryChange = (categoryName, newName) => {
    setCurrCategory({
      ...currCategory,
      categories: currCategory.categories.map((val) =>
        val === categoryName ? newName : val
      ),
    });
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold mb-2">Categories</label>
      {currCategory.categories?.map((category, idx) => (
        <div key={idx} className="flex items-center mb-2">
          <input
            type="text"
            value={category}
            onChange={(e) => handleCategoryChange(category, e.target.value)}
            placeholder="Category Name"
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={() => handleRemoveCategory(category)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            ✖
          </button>
        </div>
      ))}
      <button
        onClick={handleAddCategory}
        className="mt-2 text-blue-500 hover:text-blue-700"
      >
        + Add Category
      </button>
    </div>
  );
};

export default CategoriesSection;
