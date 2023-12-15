import guideIcon from "../../assets/write/guide.png";
import { useState } from "react";
import GuideModal from "./GuideModal";

const TextArea = ({ setContent, setTitle }: TextAreaType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-[90%] bg-white rounded-[24px] pl-4 pr-4 h-[75%] pb-4 mb-6">
      <input
        placeholder="제목을 입력해주세요."
        className="mt-7 mb-5 font-bold text-smTitle outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="최소 50자 이상 작성해 주세요."
        className=" font-regular text-p outline-none h-[80%]"
        onChange={(e) => setContent(e.target.value)}
      />
      {isOpen && <GuideModal isOpen={isOpen} />}
      <img
        src={guideIcon}
        className="w-[4rem] ml-auto "
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* <p className="font-regular text-deepGray">{content.length}/500</p> */}
    </div>
  );
};

export default TextArea;
