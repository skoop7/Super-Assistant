import { useState } from "react";

const Draggable = ({
  id,
  onDragStart,
  onDragOver,
  onDrop,
  children,
  className = "",
  draggingClassName = "",
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData("draggedId", id.toString());
    if (onDragStart) onDragStart(id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("draggedId");
    setIsDragging(false);
    if (onDrop) onDrop(draggedId, id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (onDragOver) onDragOver(e);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className={`${className} ${isDragging ? draggingClassName : ""}`}
    >
      {children}
    </div>
  );
};

export default Draggable;
