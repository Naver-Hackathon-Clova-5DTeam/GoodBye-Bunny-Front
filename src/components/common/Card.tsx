import cardImg from "../../assets/common/ex.png";

export default function Card() {
  return (
    <div className="max-w-[357px] rounded-[24px] cursor-pointer max-h-[354px] w-[90%]">
      <div>
        <img src={cardImg} className="rounded-tl-[24px] rounded-tr-[24px]" />
        <div className="bg-white pb-5 pl-7 pr-7 pt-4 rounded-bl-[24px] rounded-br-[24px] mt-[-1px]">
          <h1 className="font-bold text-smTitle ">제목</h1>
          <p className="text-p font-regular">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </p>
        </div>
      </div>
    </div>
  );
}
