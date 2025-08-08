import SideBarComponent from "./SideBarComponent";

const SideBar = () => {
  return (
    <div className="hidden md:flex fixed top-0 bottom-0 w-[72px] min-third:w-[220px] flex-col bg-black text-white pt-[8px] pb-[20px] px-[12px] justify-between">
      <div>
        <div className="mt-[12px] pb-[23px] h-[93px]">
          <SideBarComponent imageSrc="testimg.png" compTitle="PicPack" />
        </div>
        <div>
          <SideBarComponent imageSrc="testimg.png" compTitle="Home" />
          <SideBarComponent imageSrc="testimg.png" compTitle="Search" />
          <SideBarComponent imageSrc="testimg.png" compTitle="Explore" />
          <SideBarComponent imageSrc="testimg.png" compTitle="Pics" />
          <SideBarComponent imageSrc="testimg.png" compTitle="Messages" />
          <SideBarComponent
            imageSrc="shapeofmyheart.svg"
            compTitle="Notifications"
          />
          <SideBarComponent imageSrc="testimg.png" compTitle="Create" />
          <SideBarComponent imageSrc="testimg.png" compTitle="Profile" />
        </div>
      </div>
      <div>
        <SideBarComponent imageSrc="testimg.png" compTitle="More" />
        <SideBarComponent imageSrc="testimg.png" compTitle="Also From Pixe" />
      </div>
    </div>
  );
};

export default SideBar;
