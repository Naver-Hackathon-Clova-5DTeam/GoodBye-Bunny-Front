const Button = ({ text, isActive, version, func }: ButtonType) => {
  return (
    <button
      className={`font-bold text-md ${
        isActive
          ? version === "white"
            ? "bg-white text-black"
            : "bg-black text-white "
          : "bg-lightGray text-deepGray "
      } w-[90%] h-[65px] rounded-[19px]`}
      disabled={!isActive}
      onClick={func}
    >
      {text}
    </button>
  );
};

export default Button;
