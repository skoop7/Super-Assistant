const Points = ({ points, setPoints }) => {
  return (
    <div className="text-center">
      <label className="block text-lg font-semibold mb-2">Points</label>
      <input
        type="text"
        value={points}
        onChange={(e) =>
          setPoints(
            /^\d+$/.test(e.target.value)
              ? e.target.value.length > 2
                ? e.target.value.slice(0, 1)
                : e.target.value
              : ""
          )
        }
        placeholder="Points"
        className="w-16 text-center p-2 border rounded-md"
      />
    </div>
  );
};

export default Points;
