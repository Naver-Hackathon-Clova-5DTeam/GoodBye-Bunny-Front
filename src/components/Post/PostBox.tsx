const PostBox = ({
  profile,
  title,
  content,
  nickname,
  updateTime,
}: CardType) => {
  // 내가 작성한 회고는 로컬에서 프로필 가져오기
  return (
    <div className="flex flex-col w-[90%] rounded-[24px] pl-4 pr-4 h-[75%] pb-4 mb-6">
      <div className="flex bg-lightGray items-center rounded-tl-[24px] rounded-tr-[24px] pl-[16px] pr-[16px] pb-[16px] pt-[16px]">
        <img src={profile} className="w-[40px] h-[40px] rounded-[100%] mr-3" />
        <p> {nickname}님의 회고</p>
        <p>{updateTime}</p>
      </div>
      <div className="flex flex-col bg-white rounded-bl-[24px] rounded-br-[24px] pl-4 pr-4 pb-4 pt-4">
        <h1 className="font-bold text-mdTitle">{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default PostBox;
