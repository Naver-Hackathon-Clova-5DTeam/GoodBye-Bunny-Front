import { Routes, Route } from "react-router-dom";
import RecommendPage from "./pages/RecommendPage";
import WritePage from "./pages/WritePostPage";
import PostPage from "./pages/PostPage";
import MyPostPage from "./pages/MyPostPage";

function App() {
  return (
    <Routes>
      <Route path="/recommends" element={<RecommendPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/post/:reviewId" element={<PostPage />} />
      <Route path="/mypost" element={<MyPostPage />} />
    </Routes>
  );
}

export default App;
