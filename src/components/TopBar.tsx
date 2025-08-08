const TopBar = () => {
  return (
    <div className="h-[60px] px-[16px] bg-black fixed top-0 right-0 left-0 flex justify-between items-center md:hidden">
      <div className="flex text-white gap-[15px] items-center">
        <p>PicPack</p>
        <img className="size-[12px]" src="./src/assets/images/down-arrow.svg" />
      </div>
      <div className="flex gap-[15px] items-center">
        <input
          type="search"
          className="bg-internal-grey text-white px-[15px] pt-[5px] pb-[2px] rounded-[6px] outline-none font-[Pixelated-Elegance]"
          placeholder="Search"
        />
        <img
          src="./src/assets/images/shapeofmyheart.svg"
          className="w-[24px] h-[24px]"
        />
      </div>
    </div>
  );
};

export default TopBar;
