import RightSideBarUserCard from "./RightSideBarUserCard";
import RightSideBarLinks from "./RightSideBarLinks";

const RightSideBar = () => {
  return (
    <div className="w-[383px] pl-[64px]">
      <RightSideBarUserCard
        username="User"
        details="User Details"
        action="Switch"
      />
      <div className="flex place-content-between text-[12px] py-[4px]">
        <p className="text-internal-grey">Suggested for you</p>
        <p>See All</p>
      </div>
      <div className="pb-[20px]">
        <RightSideBarUserCard
          username="User"
          details="User Details"
          action="Follow"
        />
        <RightSideBarUserCard
          username="User"
          details="User Details"
          action="Follow"
        />
        <RightSideBarUserCard
          username="User"
          details="User Details"
          action="Follow"
        />
        <RightSideBarUserCard
          username="User"
          details="User Details"
          action="Follow"
        />
        <RightSideBarUserCard
          username="User"
          details="User Details"
          action="Follow"
        />
      </div>
      <RightSideBarLinks />
      <p className="text-[10px] text-internal-grey">
        &copy; 2025 PICPACK FROM PIXE
      </p>
    </div>
  );
};

export default RightSideBar;
