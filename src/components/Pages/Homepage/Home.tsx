import ContentCard from "./ContentComponents/ContentCard";
import RightSideBar from "./RightContent/RightSideBar";
import axios from "axios";
import SearchBar from "./SearchBar";
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

    getContent();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[630px] flex flex-col items-center">
        <div className="w-[470px]">
          <h1 className="text-[20px]">Suggested Posts</h1>
          {contents.map((content) => (
            <ContentCard content={content} key={crypto.randomUUID()} />
          ))}
        </div>
      </div>
      <div className="hidden min-third:block mt-[36px]">
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
