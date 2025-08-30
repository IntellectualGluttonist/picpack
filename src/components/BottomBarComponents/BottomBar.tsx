import BarButton from "../BarButton.tsx";

interface BottomBarProps {
  currentPage: string;
  setCurrentPage: Function;
}

const BottomBar = ({ currentPage, setCurrentPage }: BottomBarProps) => {
  return (
    <div className="h-[48px] fixed bottom-0 left-0 right-0 bg-black flex items-center place-content-around md:hidden">
      <BarButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default BottomBar;
