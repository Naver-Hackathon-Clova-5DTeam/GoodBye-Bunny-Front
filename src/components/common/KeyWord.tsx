import { classifyKeyword } from "../../utils/classifyKeyword";

const KeyWord = ({ text }: KeyWordType) => {
  const bgColor = classifyKeyword(text);

  return (
    <div
      className={`w-auto pl-3 pr-3 pt-1 pb-1 ${bgColor} text-white rounded-[15px] `}
    >
      {text}
    </div>
  );
};

export default KeyWord;
