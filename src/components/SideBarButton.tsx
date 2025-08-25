interface SideBarButtonProps {
  imageSrc: string;
  isProfile?: boolean;
}

const SideBarButton = ({ imageSrc, isProfile = false }: SideBarButtonProps) => {
  return (
    <div className="w-[48px] h-[48px] flex items-center justify-center">
      <img
        id="logo-icon"
        src={`./src/assets/images/${imageSrc}`}
        className={`size-[24px] ${isProfile && "rounded-full"}`}
      />
    </div>
  );
};

export default SideBarButton;
