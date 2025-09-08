interface RightSideBarUserProps {
  username: string;
  details: string;
  action: string;
}

const RightSideBarUserCard = ({
  username,
  details,
  action,
}: RightSideBarUserProps) => {
  return (
    <div className="flex items-center place-content-between py-[8px]">
      <div className="flex items-center">
        <img src="./src/assets/images/testimg.png" className="rounded-full" />
        <div className="pl-[8px]">
          <p className="text-[12px]">{username}</p>
          <p className="text-[10px] text-internal-grey">{details}</p>
        </div>
      </div>
      <p className="text-[10px] text-blue-700">{action}</p>
    </div>
  );
};

export default RightSideBarUserCard;
