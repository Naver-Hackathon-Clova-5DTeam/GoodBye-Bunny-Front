import { formatDate } from "../../utils/formatDate";

const Comment = ({
  profile,
  memberNickname,
  updateTime,
  commentContent,
}: CommentType) => {
  const date = updateTime && formatDate({ updateTime });

  return (
    <div className="pt-[14px]">
      <div className="flex">
        <img src={profile} className="w-[40px] h-[40px] rounded-[100%] mr-3" />
        <div>
          <div className="flex">
            <p className="mr-1 text-deepGray text-sm">{memberNickname}</p>
            <p className="text-deepGray text-xs">{date}</p>
          </div>
          <p className="text-s">{commentContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
