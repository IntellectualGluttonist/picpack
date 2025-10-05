import GeneralUI from "../components/GeneralUI";
import profile from "../assets/images/testimg.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfilePostCard from "../components/ProfilePostCard";

const test = [{ content: "hello" }, { content: "hello" }, { content: "hello" }];

interface ProfilePosts {
  content: string;
}

const Profile = () => {
  const [profilePosts, setProfilePosts] = useState<ProfilePosts[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("x-auth-token")) {
      navigate("/login");
    }

    setProfilePosts(test);
  }, []);

  return (
    <div>
      <GeneralUI />
      <div className="flex flex-col items-center mt-[48px] mb-[48px] md:mt-0 md:ml-[48px] lg:ml-[244px] pt-[15px]">
        <div className="flex flex-col items-center">
          <img className="size-[100px]" src={profile} />
          <p className="pt-[15px]">Profile Name</p>
        </div>
        <div className="md:pl-[15px] md:pr-[15px]">
          <hr />
          <div className="posts justify-center grid grid-cols-[repeat(3,minmax(100px,400px))] gap-0.5">
            {profilePosts.map((content) => (
              <ProfilePostCard key={crypto.randomUUID()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
