import { useState } from "react";
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
  return (
    <Link to={linkUrl} className="h-[48px] flex items-center cursor-pointer">
      <img
        className={`size-[24px] ${isProfile ? "rounded-[12px]" : ""} ${
          window.location.pathname == linkUrl && isProfile
            ? "outline-2 outline-white"
            : ""
        }`}
        src={
          window.location.pathname === linkUrl ? imgUrls.focus : imgUrls.nofocus
        }
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
