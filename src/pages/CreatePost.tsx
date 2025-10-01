import GeneralUI from "../components/GeneralUI";
import { useActionState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [data, action, isPending] = useActionState(sendImageRequest, undefined);
  const navigate = useNavigate();

  async function sendImageRequest(previousState: unknown, formData: FormData) {
    const file = formData.get("upload_image") as File;

    const uploadForm = new FormData();
    uploadForm.append("upload_image", file);

    try {
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token") as string,
        },
        body: uploadForm,
      });

      if (response.ok) {
        const result = await response.json();
      } else if (response.status === 401) {
        navigate("/login");
      }
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <>
      <GeneralUI />

      <form
        action={action}
        className="lg:ml-[244px] flex flex-col items-center justify-center h-[100vh]"
      >
        <div className="postplaceholder flex flex-col items-center relative rounded-[12px] border-3">
          <img className="aspect-[2/3] w-[300px] rounded-[12px]" />
          <label
            htmlFor="upload_image"
            className="absolute top-[50%] border-3 border-black pb-[5px] pt-[7px] px-[15px] text-center rounded-full bg-black text-white hover:bg-white hover:text-black cursor-pointer"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="upload_image"
            name="upload_image"
            accept="image/*"
            className="hidden"
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
