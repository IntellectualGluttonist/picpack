import BarButton from "../BarButton.tsx";

interface BottomBarProps {
  currentPage: string;
  setCurrentPage: Function;
}

const BottomBar = ({ currentPage, setCurrentPage }: BottomBarProps) => {
  return (
    <div className="h-[48px] fixed bottom-0 left-0 right-0 bg-black flex items-center place-content-around md:hidden">
      <BarButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/*<img
        id="exploreicon"
        className="size-[24px]"
        src="./src/assets/images/exploreicon.svg"
      />
      <img
        id="picsicon"
        className="size-[24px]"
        src="./src/assets/images/pictureicon.svg"
      />
      <img
        id="createicon"
        className="size-[24px]"
        src="./src/assets/images/createicon.svg"
      />
      <img
        id="commentsicon"
        className="size-[24px]"
        src="./src/assets/images/comments-icon-white.svg"
      />
      <img
        id="profileicon"
        className="size-[24px] rounded-full"
        src="./src/assets/images/testimg.png"
      />*/}
    </div>
  );
};

export default BottomBar;
