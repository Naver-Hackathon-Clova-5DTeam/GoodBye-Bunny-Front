import SpeechBubble from "../../assets/write/speechBubble.png";
import "./animation.css";

const GuideModal = () => {
  return (
    <div className="move">
      <p className="w-[70%] mt-3 ml-4 font-regular text-[14px] absolute">
        가족, 친구, 연인, 학업, 일, 건강, 여행, 취미와 같은 주제로 작성해보세요!
      </p>
      <img src={SpeechBubble} className="w-[80%]" />
    </div>
  );
};

export default GuideModal;
