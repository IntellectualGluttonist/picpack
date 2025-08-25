import CurrentActiveUsersContainer from "./CurrentActiveUsersContainer";
import ContentContainer from "./ContentContainer";
import RightSideBar from "./RightSideBar";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[630px] flex flex-col items-center">
        <CurrentActiveUsersContainer />
        <ContentContainer />
      </div>
      <div className="hidden min-third:block mt-[36px]">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
