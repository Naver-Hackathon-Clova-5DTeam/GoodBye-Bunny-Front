import arrowIcon from "../../assets/common/arrow.png";
import { useNavigate } from "react-router-dom";

const Header = ({ text }: KeyWordType) => {
  const nav = useNavigate();

  return (
    <div className="flex justify-center bg-black">
      <div className="h-[5rem] flex items-center w-[90%]">
        <img
          src={arrowIcon}
          className="w-[10px] mr-auto h-[18px] cursor-pointer"
          onClick={() => nav(-1)}
        />
        <h1 className="font-bold text-smTitle text-white mr-auto">{text}</h1>
      </div>
    </div>
  );
};

export default Header;
