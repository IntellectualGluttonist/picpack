const ContentCard = () => {
  return (
    <div>
      <div className="flex items-center place-content-between pl-[4px] pb-[12px]">
        <div className="flex items-center gap-[3px]">
          <img
            src="./src/assets/images/testimg.png"
            className="size-[32px] mr-[10px] rounded-full"
          />
          <p className="text-[10px]">username</p>
          &bull;
          <p className="text-[10px]">1d</p>
          &bull;
          <p className="text-[11px] text-blue-700">Follow</p>
        </div>
        <img
          id="content-options-button"
          src="./src/assets/images/testimg.png"
          className="size-[24px]"
        />
      </div>
      <img
        src="./src/assets/images/testimg.png"
        className="w-full min-h-[585px]"
      />
      <div className="pb-[10px] flex flex-col gap-[5px]">
        <div className="flex py-[4px] place-content-between">
          <div className="flex gap-[8px]">
            <img
              id="content-like-button"
              src="./src/assets/images/shapeofmyheartblack.svg"
              className="size-[24px]"
            />
            <img
              id="comments-button"
              src="./src/assets/images/comments-icon.svg"
              className="size-[24px]"
            />
            <img
              id="share-button"
              src="./src/assets/images/share-icon.svg"
              className="size-[24px]"
            />
          </div>
          <img
            id="save-button"
            src="./src/assets/images/save-icon.svg"
            className="size-[24px]"
          />
        </div>
        <p className="font-semibold text-[12px]">10,000 likes</p>
        <p className="text-[12px]">
          <span className="font-semibold">username</span> Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Maecenas quis suscipit lacus.
          Aliquam ullamcorper justo non efficitur hendrerit. Aliquam nunc dolor,
          porta id... <span className="opacity-50">more</span>
        </p>
        <p className="text-[12px] opacity-50">View all 1,000 comments</p>
        <input
          className="text-[12px] outline-none"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
      <hr className="pb-[10px]" />
    </div>
  );
};

export default ContentCard;
