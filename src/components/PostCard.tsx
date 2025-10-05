interface Content {
  profile_username: string;
  profile_picture_path: string;
  content_picture_path: string;
  content_caption: string;
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
            className="profile rounded-full size-[40px]"
          />
          <p className="text-[10px] ml-[10px]">{content.profile_username}</p>
        </div>
      </div>
      <div className="image-container mt-[10px] aspect-[2/3] flex flex-col justify-center bg-black">
        <img src={content.content_picture_path} />
      </div>
      <div className="py-[14px] flex flex-col">
        <p className="text-[12px]">
          <span className="font-semibold mr-[10px]">
            {content.profile_username}
          </span>
          {content.content_caption}
        </p>
      </div>
      <hr className="pb-[10px]" />
    </div>
  );
};

export default ContentCard;
