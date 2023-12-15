import { Routes, Route } from "react-router-dom";
import RecommendPage from "./pages/RecommendPage";
import WritePage from "./pages/WritePostPage";
import PostPage from "./pages/PostPage";
import MyPostPage from "./pages/MyPostPage";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <Routes>
      <Route path="/recommends" element={<RecommendPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/post/:reviewId" element={<PostPage />} />
      <Route path="/mypost" element={<MyPostPage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
}

export default App;
