import PostCard from "../components/PostCard";
import BottomNav from "../navigation/BottomNav";
import axios from "axios";
import { useEffect, useState } from "react";

interface Content {
  profile_username: string;
  profile_picture_path: string;
  content_picture_path: string;
  content_description: string;
}

const Home = () => {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await axios.get("http://localhost:8080/");
        setContents(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    const getContent1 = async () => {
      try {
        const response = await fetch("http://localhost:8080/", {
          method: "GET",
          headers: {
            "x-auth-token": "",
          },
        });
        const result = await response.json();
        setContents(result.results);
      } catch (err) {
        console.log(err);
      }
    };

    getContent1();
  }, []);

  return (
    <div className="flex justify-center">
      <BottomNav />
      <div className="postcards-container flex flex-col items-center w-[470px]">
        <h1 className="text-[20px]">Suggested Posts</h1>
        {contents.map((content) => (
          <PostCard content={content} key={crypto.randomUUID()} />
        ))}
      </div>
    </div>
  );
};

export default Home;
