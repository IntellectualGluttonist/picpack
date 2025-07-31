import CurrentActiveUsersContainer from "./CurrentActiveUsersContainer";
import SubContainer from "./SubContainer";

const MainContainer = () => {
  return (
    <div className="mt-[60px] mb-[60px] flex justify-center">
      <div className="w-[630px] flex flex-col items-center">
        <CurrentActiveUsersContainer />
        <SubContainer />
      </div>
    </div>
  );
};

export default MainContainer;
