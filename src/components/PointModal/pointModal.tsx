import coin from "../../assets/pointModal/coin.png";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import "./moveup.css";

const PointModal = () => {
  const nav = useNavigate();

  const moreRecommend = () => {
    nav("/recommends");
  };

  // 유저 닉네임 가져와야 함!

  return (
    <div className="moveup">
      <div className="w-[100%] relative">
        <div className="absolute z-20 bg-white rounded-[24px] flex flex-col items-center justify-center pb-[24px] pt-[40px] w-[100%] mt-10">
          <h1 className="font-bold text-mdTitle text-center">
            블랙레빗님의 <br /> 따뜻한 글 덕분에 <br />
            <p className="text-pointRed inline">포인트 5점</p>
            <span className="inline">을 얻었어요!</span>
          </h1>
          <img src={coin} className="w-[10rem] mt-[4rem] mb-[5rem]" />
          <Button text="추천 더 받기" isActive={true} func={moreRecommend} />
        </div>
      </div>
    </div>
  );
};

export default PointModal;
