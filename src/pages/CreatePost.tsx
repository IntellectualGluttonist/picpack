import GeneralUI from "../components/GeneralUI";
import { useActionState } from "react";

const CreatePost = () => {
  const [data, action, isPending] = useActionState(sendImageRequest, undefined);

  function sendImageRequest() {}

  return (
    <>
      <GeneralUI />

      <form
        className="lg:ml-[244px] flex flex-col items-center justify-center h-[100vh]"
        encType="multipart/form-data"
      >
        <div className="postplaceholder flex flex-col items-center relative rounded-[12px] border-3">
          <img className="aspect-[2/3] w-[300px] rounded-[12px]" />
          <label
            htmlFor="upload-image"
            className="absolute top-[50%] border-3 border-black pb-[5px] pt-[7px] px-[15px] text-center rounded-full bg-black text-white hover:bg-white hover:text-black cursor-pointer"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="upload-image"
            name="upload-image"
            className=" hidden"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="mt-[15px] border-3 pb-[5px] pt-[7px] px-[15px] text-center rounded-full border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer"
        >
          Create Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
