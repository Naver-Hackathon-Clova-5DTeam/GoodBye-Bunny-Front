import { Routes, Route } from "react-router-dom";
import RecommendPage from "./pages/RecommendPage";
import WritePage from "./pages/WritePostPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Routes>
      <Route path="/recommends" element={<RecommendPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/post/:reviewId" element={<PostPage />} />
    </Routes>
  );
}

export default App;
