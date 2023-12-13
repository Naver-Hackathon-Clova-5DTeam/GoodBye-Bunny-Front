import { Routes, Route } from "react-router-dom";
import RecommendPage from "./pages/RecommendPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
    <Routes>
      <Route path="/recommends" element={<RecommendPage />} />
      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
}

export default App;
