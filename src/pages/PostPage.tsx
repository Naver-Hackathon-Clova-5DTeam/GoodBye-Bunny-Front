import Header from "../components/common/Header";
import PostBox from "../components/Post/PostBox";
import { useState, useEffect } from "react";

const PostPage = () => {
  const [data, setData] = useState<CardType>();

  useEffect(() => {
    const info = localStorage.getItem("info");
    info && setData(JSON.parse(info));
  }, []);

  return (
    <>
      {data && (
        <>
          <Header text={`${data?.nickname}님이 작성한 회고`} />
          <div className="bg-black h-[100vh] flex flex-col items-center">
            <PostBox
              profile={data.profile}
              title={data.title}
              content={data.content}
              nickname={data.nickname}
              updateTime={data.updateTime}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PostPage;
