import UpdateContainer from "./UpdateContainer";
import ContentCard from "./ContentCard";

const SubContainer = () => {
  return (
    <div className="w-[470px]">
      <UpdateContainer />
      <hr className="py-[5px]" />
      <h1 className="text-[20px]">Suggested Posts</h1>
      <ContentCard />
      <ContentCard />
    </div>
  );
};

export default SubContainer;
