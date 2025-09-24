import PostCard from "../components/PostCard";
import GeneralUI from "../components/GeneralUI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Content {
  profile_username: string;
  profile_picture_path: string;
  content_picture_path: string;
  content_description: string;
}

const Home = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch("http://localhost:8080/", {
          method: "GET",
          headers: {
            "x-auth-token": localStorage.getItem("x-auth-token") as string,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setContents(result.results);
        } else if (response.status === 401) {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getContent();
  }, []);

  return (
    <div className="flex justify-center">
      <GeneralUI />
      <div className="postcards-container flex flex-col items-center w-[470px] mt-[48px] mb-[48px] md:mt-0 lg:ml-[244px]">
        <h1 className="text-[20px]">Suggested Posts</h1>
        {contents.map((content) => (
          <PostCard content={content} key={crypto.randomUUID()} />
        ))}
      </div>
    </div>
  );
};

export default Home;
