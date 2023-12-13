import Button from "../components/common/Button";
import NavBar from "../components/common/NavBar";

const RecommendPage = () => {
  return (
    <div className="flex items-center justify-center bg-deepGray h-[100vh]">
      <Button text="시작하기" isActive={true} />
      <NavBar />
    </div>
  );
};

export default RecommendPage;
