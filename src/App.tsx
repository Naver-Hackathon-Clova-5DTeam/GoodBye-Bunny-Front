import { Routes, Route } from "react-router-dom";
import RecommendPage from "./pages/RecommendPage";

function App() {
  return (
    <Routes>
      <Route path="/recommends" element={<RecommendPage />} />
    </Routes>
  );
}

export default App;
