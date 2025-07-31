import ActiveUserCard from "./ActiveUserCard.tsx";

const CurrentActiveUsersContainer = () => {
  return (
    <div className="max-w-[630px] w-full pt-[24px] pb-[32px] flex gap-[12px] overflow-y-scroll shrink grow">
      <ActiveUserCard />
      <ActiveUserCard />
      <ActiveUserCard />
      <ActiveUserCard />
    </div>
  );
};

export default CurrentActiveUsersContainer;
