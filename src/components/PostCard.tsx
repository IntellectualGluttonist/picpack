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
    <div className="postcard w-full">
      <div className="flex items-center place-content-between">
        <div className="flex items-center">
          <img
            src={content.profile_picture_path}
            className="profile rounded-full"
          />
          <p className="text-[10px]">{content.profile_username}</p>
        </div>
      </div>
      <div className="image-container h-[585px]">
        <img
          src={content.content_picture_path}
          className="w-full object-center"
        />
      </div>
      <div className="py-[14px] flex flex-col">
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
