import { formatDate } from "../../utils/formatDate";
import CommentBox from "./CommentBox";

const PostBox = ({
  profile,
  title,
  content,
  nickname,
  updateTime,
  comments,
}: CardType) => {
  const date = updateTime && formatDate(updateTime);

  // 내가 작성한 회고는 로컬에서 프로필 가져오기
  return (
    <div className="flex flex-col w-[100%] rounded-[24px] pl-4 pr-4 pb-4">
      <div className="flex bg-whiteGray items-center rounded-tl-[24px] rounded-tr-[24px] pl-[16px] pr-[16px] pb-[16px] pt-[16px]">
        <img src={profile} className="w-[40px] h-[40px] rounded-[100%] mr-3" />
        <div>
          <p>{nickname}님의 회고</p>
          <p className="text-deepGray text-sm">{date}</p>
        </div>
      </div>
      <div className="flex flex-col bg-white pl-4 pr-4 pb-9 pt-4">
        <h1 className="font-bold text-mdTitle mb-[14px]">{title}</h1>
        <p className="font-regular text-fontGray">{content}</p>
      </div>
      <div className="w-[100%] h-[1px] bg-lightGray"></div>
      {comments && <CommentBox comments={comments} />}
    </div>
  );
};

export default PostBox;
