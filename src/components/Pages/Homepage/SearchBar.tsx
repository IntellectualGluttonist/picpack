const SearchBar = () => {
  return (
    <div className="h-[60px] px-[16px] bg-black fixed top-0 right-0 left-0 flex justify-between items-center md:hidden">
      <div className="flex flex-col items-center text-white">
        <div className="flex gap-[15px] items-center relative hover:bg-internal-grey cursor-pointer px-[10px] py-[5px] rounded-[5px]">
          <p>PicPack</p>
        </div>
      </div>
      <div className="flex gap-[15px] items-center">
        <div className="relative bg-internal-grey text-white px-[15px] pt-[5px] pb-[2px] rounded-[6px] outline-none font-[Pixelated-Elegance] flex flex-col items-center">
          <input type="search" className="outline-none" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
