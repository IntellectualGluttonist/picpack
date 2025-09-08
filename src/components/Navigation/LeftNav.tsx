import NavButton from "./NavButton.tsx";

const LeftNav = () => {
  return (
    <div className="hidden md:flex fixed top-0 bottom-0 w-[72px] min-third:w-[220px] flex-col bg-black text-white pt-[8px] pb-[20px] px-[12px] justify-between">
      <div>
        <div className="mt-[12px] pb-[23px] h-[93px]">
          <NavButton />
        </div>
        <div>
          <NavButton />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
