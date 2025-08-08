interface SideBarButtonProps {
  imageSrc: string;
}

const SideBarButton = ({ imageSrc }: SideBarButtonProps) => {
  return (
    <div className="w-[48px] h-[48px] flex items-center justify-center">
      <img
        id="logo-icon"
        src={`./src/assets/images/${imageSrc}`}
        className="size-[24px]"
      />
    </div>
  );
};

export default SideBarButton;
