import { useSelectedPageContext } from "../../contexts/SelectedPageContext.tsx";
import { Link } from "react-router-dom";

const NavButton = () => {
  const { selectedPage, setSelectedPage } = useSelectedPageContext();

  return (
    <Link to="/">
      <button
        onClick={() => {
          setSelectedPage("home");
        }}
        className="cursor-pointer w-[48px] h-[48px]"
      >
        <div>
          <img
            id="homeicon"
            className="size-[24px]"
            src={
              selectedPage === "home"
                ? "./src/assets/images/homeiconfocused.svg"
                : "./src/assets/images/homeicon.svg"
            }
          />
          <p className="hidden min-third:flex text-[12px]">Test</p>
        </div>
      </button>
    </Link>
  );
};

export default NavButton;
