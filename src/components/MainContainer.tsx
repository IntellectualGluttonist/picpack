import CurrentActiveUsersContainer from "./CurrentActiveUsersContainer";
import ContentContainer from "./ContentContainer";
import RightSideBar from "./RightSideBar";

const MainContainer = () => {
  return (
    <div className="mt-[60px] mb-[60px] md:mt-0 md:mb-0 min-third:ml-[220px] min-second:ml-[72px] flex justify-center">
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

export default MainContainer;
