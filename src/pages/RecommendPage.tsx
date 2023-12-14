import NavBar from "../components/common/NavBar";
import Card from "../components/common/Card";
import Header from "../components/common/Header";
import { recommendData } from "../utils/data/mockData";
import { useState } from "react";

const RecommendPage = () => {
  const [data, setData] = useState();

  return (
    <>
      <Header text="추천 회고" />
      <div className="flex flex-col items-center justify-center bg-black gap-5 pb-[7rem]">
        {recommendData &&
          recommendData.map((d) => (
            <Card title={d.title} content={d.content} keywords={d.keywords} />
          ))}
        <NavBar />
      </div>
    </>
  );
};

export default RecommendPage;
