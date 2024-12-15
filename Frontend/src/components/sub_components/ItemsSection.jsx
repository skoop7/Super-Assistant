const ItemsSection = ({
  currCategory,
  setCurrCategory,
  handleAddItem,
  handleRemoveItem,
}) => {
  const handleItemNameChange = (itemName, newName, categoryName) => {
    setCurrCategory({
      ...currCategory,
      items: currCategory.items.map((item) =>
        item.name === itemName && item.belongsTo === categoryName
          ? { ...item, name: newName }
          : item
      ),
    });
  };

  const handleItemCategoryChange = (itemName, newCategory) => {
    setCurrCategory({
      ...currCategory,
      items: currCategory.items.map((item) =>
        item.name === itemName ? { ...item, belongsTo: newCategory } : item
      ),
    });
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold mb-2">Items</label>
      {currCategory.items?.map((item, idx) => (
        <div key={idx} className="flex items-center mb-2">
          <input
            type="text"
            value={item.name}
            onChange={(e) =>
              handleItemNameChange(item.name, e.target.value, item.belongsTo)
            }
            placeholder="Item Name"
            className="flex-1 p-2 border rounded-md"
          />
          <select
            value={item.belongsTo}
            onChange={(e) =>
              handleItemCategoryChange(item.name, e.target.value)
            }
            className="ml-2 p-2 border rounded-md"
          >
            <option value="" disabled>
              Select Category
            </option>
            {currCategory.categories.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleRemoveItem(item.name, item.belongsTo)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            ✖
          </button>
        </div>
      ))}
      <button
        onClick={() =>
          handleAddItem("New Item", currCategory.categories[0] || "")
        }
        className="mt-2 text-blue-500 hover:text-blue-700"
      >
        + Add Item
      </button>
    </div>
  );
};

export default ItemsSection;
