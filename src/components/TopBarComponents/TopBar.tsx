import { useState } from "react";
import BarButton from "../BarButton";

interface TopBarProps {
  currentPage: string;
  setCurrentPage: Function;
}

const TopBar = () => {
  const [searchToolTipToggle, setSearchToolTipToggle] = useState(false);

  function SearchToolTipOn() {
    setSearchToolTipToggle(true);
  }

  function SearchToolTipOff() {
    setSearchToolTipToggle(false);
  }

  return (
    <div className="h-[60px] px-[16px] bg-black fixed top-0 right-0 left-0 flex justify-between items-center md:hidden">
      <div className="flex flex-col items-center text-white">
        <div className="flex gap-[15px] items-center relative hover:bg-internal-grey cursor-pointer px-[10px] py-[5px] rounded-[5px]">
          <p>PicPack</p>
        </div>
      </div>
      <div className="flex gap-[15px] items-center">
        <div className="relative bg-internal-grey text-white px-[15px] pt-[5px] pb-[2px] rounded-[6px] outline-none font-[Pixelated-Elegance] flex flex-col items-center">
          <input
            type="search"
            className="outline-none"
            placeholder="Search"
            onClick={SearchToolTipOn}
          />
          <div
            className={`absolute w-[375px] h-[450px] bg-internal-grey rounded-[8px] p-[15px] top-[35px] right-[-50px] ${
              searchToolTipToggle ? "" : "hidden"
            }`}
          >
            <div className="flex place-content-between">
              <p>Recent</p>
              <img
                id="searchclosebutton"
                className="size-[20px]"
                src="./src/assets/images/testimg.png"
                onClick={SearchToolTipOff}
              />
            </div>
            <div className="flex justify-center items-center h-[100%]">
              <p className=" text-[12px]">No Recent Searches</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
