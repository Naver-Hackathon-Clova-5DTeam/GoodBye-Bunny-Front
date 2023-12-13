import homeIcon from "../../assets/common/home.png";
import recommendIcon from "../../assets/common/recommend.png";
import historyIcon from "../../assets/common/history.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const nav = useNavigate();

  return (
    <div className="flex gap-[15%] items-center bg-white w-[100%] justify-center h-[6rem] rounded-tr-[14px] rounded-tl-[14px] absolute bottom-0 pb-3">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => nav("/")}
      >
        <img src={homeIcon} className="w-[22px] h-[22px]" />
        <p className="text-sm">홈</p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => nav("/recommends")}
      >
        <img src={recommendIcon} className="w-[22px] mb-[5px] mt-[5px]" />
        <p className="text-sm">추천 회고</p>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => nav("/history")}
      >
        <img src={historyIcon} className="w-[22px] h-[22px]" />
        <p className="text-sm">히스토리</p>
      </div>
    </div>
  );
};

export default NavBar;
