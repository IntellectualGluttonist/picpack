interface Content {
  profile_username: string;
  profile_picture_path: string;
  content_picture_path: string;
  content_description: string;
}

interface ContentCardProps {
  content: Content;
}

const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <div>
      <div className="flex items-center place-content-between pl-[4px] pb-[12px]">
        <div className="flex items-center gap-[3px]">
          <img
            src={content.profile_picture_path}
            className="profile size-[32px] mr-[10px] rounded-full"
          />
          <p className="text-[10px]">{content.profile_username}</p>
        </div>
      </div>
      <img
        src={content.content_picture_path}
        className="w-full min-h-[585px]"
      />
      <div className="pb-[10px] flex flex-col gap-[5px]">
        <div className="flex py-[4px] place-content-between"></div>
        <p className="text-[12px]">
          <span className="font-semibold">{content.profile_username}</span>
          {content.content_description}
          <span className="opacity-50">more</span>
        </p>
      </div>
      <hr className="pb-[10px]" />
    </div>
  );
};

export default ContentCard;
