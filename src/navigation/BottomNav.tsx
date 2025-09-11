import NavButton from "./NavButton.tsx";

const BottomNav = () => {
  return (
    <div className="h-[48px] fixed bottom-0 left-0 right-0 bg-black flex items-center place-content-around">
      <NavButton />
    </div>
  );
};

export default BottomNav;
