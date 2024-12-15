import { useCallback, useState } from "react";
import Container from "../Container";

const Categorize = () => {
  const [categories, setCategories] = useState(["Category 1", "Category 2"]);
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [assignments, setAssignments] = useState({});

  // temperory will change later on
  useCallback(() => {
    setCategories(["Category 1", "Category 2"]);
    setItems(["Item 1", "Item 2", "Item 3"]);
  }, []);

  const handleDrop = (item, category) => {
    setAssignments((prev) => ({ ...prev, [item]: category }));
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Categorize Items</h1>
      <div className="flex gap-4">
        {/* Items Section */}
        <div className="w-1/3">
          <h2 className="text-lg font-semibold mb-2">Items</h2>
          <div className="space-y-2">
            {items?.map((item) => (
              <div
                key={item}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", item)}
                className="p-4 bg-slate-200 rounded shadow cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {categories?.map((category) => (
            <div
              key={category}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const item = e.dataTransfer.getData("text/plain");
                handleDrop(item, category);
              }}
              className="p-4 bg-blue-200 rounded shadow min-h-[100px]"
            >
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <div className="space-y-2">
                {Object.entries(assignments)
                  .filter(
                    ([, assignedCategory]) => assignedCategory === category
                  )
                  ?.map(([item]) => (
                    <div key={item} className="p-2 bg-white rounded shadow">
                      {item}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Categorize;
