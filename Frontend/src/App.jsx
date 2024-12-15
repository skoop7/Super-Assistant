import CategorizeCreate from "./components/CategorizeCreate";
import ClozeCreate from "./components/ClozeCreate";
import ComprehensionCreate from "./components/ComprehensionCreate";
import Categorize from "./components/render_questions/Categorize";
import Cloze from "./components/render_questions/Cloze";
import Comprehension from "./components/render_questions/Comprehension";

const App = () => {
  return (
    <div className="min-h-screen max-w-screen bg-gray-300 p-6">
      <Categorize />
      <Cloze />
      <Comprehension />
      <CategorizeCreate />
      <ClozeCreate />
      <ComprehensionCreate />
    </div>
  );
};

export default App;
