import NavButton from "./NavButton";
import { homeIcon, homeIconFocus, profileImage } from "./NavigationImages.ts";
import { useState, useEffect } from "react";

const LeftNav = () => {
  const [userUrl, setUserUrl] = useState("");

  useEffect(() => {
    const userDataLocal = localStorage.getItem("userData");
    const userData = JSON.parse(userDataLocal as string);
    setUserUrl(userData.username);
  }, []);

  return (
    <div className="invisible md:visible fixed left-0 bottom-0 top-0 bg-black flex flex-col lg:w-[244px] p-[15px]">
      <NavButton
        linkUrl="/"
        imgUrls={{ focus: homeIconFocus, nofocus: homeIcon }}
        navButtonType="left"
        isProfile={false}
        buttonName="Home"
      />
      <NavButton
        linkUrl={`/profile/${userUrl}`}
        imgUrls={{ focus: profileImage, nofocus: profileImage }}
        navButtonType="left"
        isProfile={true}
        buttonName="Profile"
      />
    </div>
  );
};

export default LeftNav;
