import { FaSave } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import {
  deleteComprehensionData,
  saveComprehensionData,
} from "../../services/comprehensionService";

const SideButtons = ({
  passage,
  questions,
  passageId,
  comprehensionQuestions,
  setComprehensionQuestions,
}) => {
  const handleSave = async () => {
    if (comprehensionQuestions) {
      try {
        await saveComprehensionData(passageId, passage, questions);
        // alert("Comprehension saved!");
      } catch (error) {
        console.error("Failed to save comprehension:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center ml-4 gap-2 text-2xl text-purple-500">
      <FaSave
        onClick={handleSave}
        className="rounded-none cursor-pointer hover:bg-purple-500 hover:text-white"
      />
      <IoIosAddCircle
        onClick={() => {
          const newComprehension = {
            _id: crypto.randomUUID(),
            passage: "",
            questions: [],
          };
          setComprehensionQuestions((prev) => [
            ...(prev || []),
            newComprehension,
          ]);
        }}
        className="cursor-pointer hover:bg-purple-500 hover:text-white rounded-full"
      />
      <MdDelete
        onClick={() => {
          setComprehensionQuestions((prev) => {
            const prevQuestions = prev || [];
            const updated = prevQuestions.filter(
              (val) => val._id !== passageId
            );
            if (updated.length === 0) {
              updated.push({
                _id: crypto.randomUUID(),
                passage: "",
                questions: [],
              });
            }
            return updated;
          });
          deleteComprehensionData(passageId);
        }}
        className="cursor-pointer hover:bg-purple-500 hover:text-white rounded-full"
      />
    </div>
  );
};

export default SideButtons;
