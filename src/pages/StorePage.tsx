import rabbit from "../assets/store/rabbit.png";
import pointBar from "../assets/store/pointBar.png";
import bg from "../assets/store/bg1.png";
import PurchaseWindow from "../components/Store/PurchaseWindow";
import leftArrow from "../assets/store/leftarrow.png";
import rightArrow from "../assets/store/rightarrow.png";
import { useState } from "react";

const StorePage = () => {
  return (
    <div className="relative flex flex-col">
      <div className="relative mt-[2rem] ml-4">
        <p className="absolute ml-[4rem] mt-4 font-bold text-md">10</p>
        <img src={pointBar} className="w-[7rem] " />
      </div>

      <img src={rabbit} className="w-[45%] ml-auto mr-auto mt-[1rem]" />

      <div className="flex mr-5 ml-5">
        <img src={leftArrow} className="w-9 mr-2" />
        <img src={rightArrow} className="w-9" />
        <button className="bg-black text-white font-bold w-[4.5rem] pt-2 pr-2 pb-1  pl-2 rounded-[30px] text-md ml-auto ">
          구매
        </button>
      </div>

      <PurchaseWindow />
      <img
        src={bg}
        className="absolute top-[-15rem] z-[-10] w-[100%] h-screen"
      />
    </div>
  );
};

export default StorePage;
