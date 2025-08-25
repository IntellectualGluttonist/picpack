import BarButton from "./BarButton.tsx";

interface SideBarProps {
  currentPage: string;
  setCurrentPage: Function;
}

const SideBar = ({ currentPage, setCurrentPage }: SideBarProps) => {
  return (
    <div className="hidden md:flex fixed top-0 bottom-0 w-[72px] min-third:w-[220px] flex-col bg-black text-white pt-[8px] pb-[20px] px-[12px] justify-between">
      <div>
        <div className="mt-[12px] pb-[23px] h-[93px]">
          <BarButton
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div>
          <BarButton
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div>
        <BarButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default SideBar;
