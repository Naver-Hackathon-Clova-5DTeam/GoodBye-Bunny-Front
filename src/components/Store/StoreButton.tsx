const StoreButton = ({ text, isActive, func }: ButtonType) => {
  return (
    <button
      className={`
      ${
        isActive ? "bg-pointRed text-white" : "bg-bgGray text-deepGray "
      }  font-bold h-8 pt-1 pb-1 pr-4 pl-4 rounded-[40px] mr-2`}
      onClick={func}
    >
      {text}
    </button>
  );
};

export default StoreButton;
