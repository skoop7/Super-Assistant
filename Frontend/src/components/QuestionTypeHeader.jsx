const QuestionTypeHeader = ({ color, type, handlePreview }) => {
  return (
    <div className="flex justify-between items-center border-b-2 pb-4 mb-6">
      <h1 className="text-2xl font-bold">{type}</h1>
      <div className="flex gap-4">
        <button
          onClick={handlePreview}
          className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600`}
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default QuestionTypeHeader;
