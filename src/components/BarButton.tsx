interface BarButtonProps {
  currentPage: string;
  setCurrentPage: Function;
}

const BarButton = ({ setCurrentPage }: BarButtonProps) => {
  return (
    <div className="flex my-[4px] h-[48px] hover:bg-internal-grey rounded-[6px] transition-color delay-75 duration-250 ease-in-out items-center">
      <button
        onClick={() => {
          setCurrentPage("home");
        }}
        className="cursor-pointer w-[48px] h-[48px] flex items-center justify-center"
      >
        <img
          id="homeicon"
          className="size-[24px]"
          src="./src/assets/images/homeicon.svg"
        />
      </button>
      <p className="hidden min-third:flex text-[12px]">Test</p>
    </div>
  );
};

export default BarButton;
