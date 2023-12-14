import Header from "../components/common/Header";
import Button from "../components/common/Button";
import TextArea from "../components/Write/TextArea";
import { useState } from "react";

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <Header text="회고 작성" />
      <div className="bg-black h-[100vh] flex flex-col items-center">
        <TextArea setContent={setContent} setTitle={setTitle} />
        <Button
          text="작성 완료하기"
          isActive={content.length >= 50}
          version="white"
        />
      </div>
    </>
  );
};

export default WritePage;
