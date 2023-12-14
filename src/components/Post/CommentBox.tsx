import { useState, ChangeEvent } from "react";
import Comment from "./Comment";
import profile from "../../assets/post/profile.png";
import sendIcon from "../../assets/post/send.png";

const CommentBox = ({ comments }: CommentBoxProps) => {
  const [commentText, setCommentText] = useState("");
  const path = window.location.pathname;
  const isMine = path === "/mypost";
  // 댓글 작성 프로필 = 사용자 프로필 (로컬에서 가져오기)

  const handleTextareaInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="bg-white pl-4 pr-4 pt-6 pb-5 rounded-bl-[24px] rounded-br-[24px] flex flex-col w-[100%]">
      <h2 className="font-bold text-mdTitle">코멘트</h2>
      {comments.map((c) => (
        <Comment
          profile={c.profile}
          commentContent={c.commentContent}
          updateTime={c.updateTime}
          memberNickname={c.memberNickname}
        />
      ))}
      {!isMine && (
        <>
          <div className="w-[100%] h-[1px] bg-lightGray mt-[14px] mb-[14px]"></div>
          <div className="flex items-center gap-2 relative ">
            <img src={profile} className="w-[30px]" />
            <textarea
              className="bg-lightGray rounded-[20px] w-[100%] text-s flex p-2 pl-4 pr-10 outline-none"
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="댓글을 작성해주세요."
              value={commentText}
              rows={1}
              onInput={handleTextareaInput}
              style={{ height: "auto", minHeight: "40px", resize: "none" }}
            />
            <img
              src={sendIcon}
              className="w-[21px] absolute right-3 cursor-pointer"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CommentBox;
