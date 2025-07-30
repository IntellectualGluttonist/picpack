const TopBar = () => {
  return (
    <div className="h-[60px] px-[16px] bg-black fixed top-0 right-0 left-0 flex justify-between items-center">
      <div className="flex text-white">
        <div>Logo</div>
        <div>arrow</div>
      </div>
      <div className="flex">
        <input type="search" className="bg-internal-grey" />
        <img src="./src/assets/shapeofmyheart.svg" />
      </div>
    </div>
  );
};

export default TopBar;
