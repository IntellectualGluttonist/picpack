import SideBarButton from "./SideBarButton";

interface SideBarComponentProps {
  imageSrc: string;
  compTitle: string;
  isProfile?: boolean;
}

const SideBarComponent = ({
  imageSrc,
  compTitle,
  isProfile = false,
}: SideBarComponentProps) => {
  return (
    <div className="flex my-[4px] h-[48px] hover:bg-internal-grey rounded-[6px] transition-color delay-75 duration-250 ease-in-out items-center">
      <SideBarButton imageSrc={imageSrc} isProfile={isProfile} />
      <p className="hidden min-third:flex text-[12px]">{compTitle}</p>
    </div>
  );
};

export default SideBarComponent;
