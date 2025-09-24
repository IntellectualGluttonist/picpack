import { useGeneralStateContext } from "../contexts/GeneralStateContext.tsx";
import { Link } from "react-router-dom";

interface imgUrlsObject {
  focus: string;
  nofocus: string;
}

interface NavButtonProps {
  linkUrl: string;
  imgUrls: imgUrlsObject;
  navButtonType: string;
  buttonName: string;
  isProfile: boolean;
}

const NavButton = ({
  linkUrl,
  imgUrls,
  navButtonType,
  buttonName,
  isProfile,
}: NavButtonProps) => {
  const { selectedPage, setSelectedPage } = useGeneralStateContext();

  return (
    <Link
      to={linkUrl}
      className="h-[48px] flex items-center cursor-pointer hover:bg-amber-300"
      onClick={() => {
        setSelectedPage(linkUrl);
      }}
    >
      <img
        className={`size-[24px] ${isProfile ? "rounded-[12px]" : ""} ${
          selectedPage == linkUrl && isProfile ? "outline-2 outline-white" : ""
        }`}
        src={selectedPage === linkUrl ? imgUrls.focus : imgUrls.nofocus}
      />
      {navButtonType == "left" && (
        <p className="hidden text-white align-middle lg:block pl-[10px]">
          {buttonName}
        </p>
      )}
    </Link>
  );
};

export default NavButton;
