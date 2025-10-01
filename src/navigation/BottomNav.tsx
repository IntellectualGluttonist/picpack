import NavButton from "./NavButton.tsx";
import { useEffect, useState } from "react";
import {
  homeIcon,
  homeIconFocus,
  createIcon,
  createIconFocus,
  profileImage,
} from "./NavigationImages.ts";

const BottomNav = () => {
  const [userUrl, setUserUrl] = useState("");

  useEffect(() => {
    const userDataLocal = localStorage.getItem("userData");
    const userData = JSON.parse(userDataLocal as string);
    setUserUrl(userData.username);
  }, []);

  return (
    <div className="h-[48px] fixed bottom-0 left-0 right-0 bg-black flex items-center place-content-around md:invisible z-[1]">
      <NavButton
        linkUrl="/"
        imgUrls={{ focus: homeIconFocus, nofocus: homeIcon }}
        navButtonType="bottom"
        isProfile={false}
        buttonName="Home"
      />
      <NavButton
        linkUrl="/create"
        imgUrls={{ focus: createIconFocus, nofocus: createIcon }}
        navButtonType="bottom"
        isProfile={false}
        buttonName="Create"
      />
      <NavButton
        linkUrl={`/profile/${userUrl}`}
        imgUrls={{ focus: profileImage, nofocus: profileImage }}
        navButtonType="bottom"
        isProfile={true}
        buttonName="Profile"
      />
    </div>
  );
};

export default BottomNav;
