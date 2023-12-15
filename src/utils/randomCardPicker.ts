import card1 from "../assets/common/card1.png";
import card2 from "../assets/common/card2.png";
import card3 from "../assets/common/card3.png";

export const randomCardPicker = () => {
  const cardList = [card1, card2, card3];
  const randomNum = Math.floor(Math.random() * 3);
  return cardList[randomNum];
};
