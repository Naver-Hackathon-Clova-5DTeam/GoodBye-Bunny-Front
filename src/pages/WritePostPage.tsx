import Header from "../components/common/Header";
import Button from "../components/common/Button";
import TextArea from "../components/WritePost/TextArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const nav = useNavigate();
  const postPosts = () => {
    alert("회고가 등록되었습니다!");
    nav("/mypost");
  };

  return (
    <>
      <Header text="회고 작성" />
      <div className="bg-black h-[100vh] flex flex-col items-center">
        <TextArea setContent={setContent} setTitle={setTitle} />
        <Button
          text="작성 완료하기"
          isActive={content.length >= 50}
          version="white"
          func={postPosts}
        />
      </div>
    </>
  );
};

export default WritePage;
