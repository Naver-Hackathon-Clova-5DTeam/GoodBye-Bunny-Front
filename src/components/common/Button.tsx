interface ButtonType {
  text: string;
  isActive: boolean;
}

const Button = ({ text, isActive }: ButtonType) => {
  return (
    <button
      className={`font-bold text-md ${
        isActive ? "bg-black text-white" : "bg-lightGray text-deepGray"
      } w-[80%] h-[65px] rounded-[19px]`}
    >
      {text}
    </button>
  );
};

export default Button;
