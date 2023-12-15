import Header from "../components/common/Header";
import PostBox from "../components/Post/PostBox";
import { useState, useEffect } from "react";
import { CommentData, data } from "../utils/data/mockData";
import profile from "../assets/post/profile.png";

const MyPostPage = () => {
  //   const [data, setData] = useState<CardType>();

  useEffect(() => {
    // 내 게시글 get 요청
    // 댓글 get 요청
    // 로컬에서 내 프로필 가져와 전달하기
  }, []);

  return (
    <>
      {data && CommentData && (
        <>
          <Header text={`내가 작성한 회고`} />
          <div className="bg-black h-[100vh] flex flex-col items-center">
            <PostBox
              profile={profile}
              title={data.title}
              content={data.content}
              nickname={data.memberNickname}
              updateTime={data.updateTime}
              comments={CommentData}
            />
          </div>
        </>
      )}
    </>
  );
};

export default MyPostPage;
