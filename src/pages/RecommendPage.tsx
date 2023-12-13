import NavBar from "../components/common/NavBar";
import Card from "../components/common/Card";
import Header from "../components/common/Header";

const RecommendPage = () => {
  return (
    <>
      <Header text="추천 회고" />
      <div className="flex flex-col items-center justify-center bg-black gap-5 pb-[7rem]">
        <Card />
        <Card />
        <Card />
        <NavBar />
      </div>
    </>
  );
};

export default RecommendPage;
