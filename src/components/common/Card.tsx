import cardImg from "../../assets/common/ex.png";
import KeyWord from "./KeyWord";

export default function Card({ title, content, keywords }: CardType) {
  return (
    <div className="max-w-[357px] rounded-[24px] cursor-pointer max-h-[354px] w-[90%]">
      <div className="relative">
        <div className="flex flex-wrap gap-2 justify-end absolute mt-4 right-4">
          {keywords && keywords.map((k) => <KeyWord text={k} />)}
        </div>
        <img src={cardImg} className="rounded-tl-[24px] rounded-tr-[24px]" />
        <div className="bg-white pb-5 pl-7 pr-7 pt-4 rounded-bl-[24px] rounded-br-[24px] mt-[-1px]">
          <h1 className="font-bold text-smTitle ">{title}</h1>
          <p className="text-p font-regular">{content}</p>
        </div>
      </div>
    </div>
  );
}
