import Navbar from "../Navbar/Navbar";

import heroImage from "../../assets/heroimage.png";
import message from "../../assets/Message.png";
const HeroSection = () => {
  return (
    <div className="h-[990px] bg-[#111111] p-[80px] text-white">
      <Navbar />
      <div className="flex mt-10 justify-center gap-[200px] ">
        {/* left */}
        <div className="w-[50%] mt-24 ml-24 flex flex-col gap-8">
          <h1 className="text-[66px]">
            You don't have to{" "}
            <span className="font-bold">Fight them Alone.</span>
          </h1>
          <p className="text-[#585858]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          {/* input tag */}
          <div className="bg-[#282828] rounded-full p-1 w-[70%] relative overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#282828] pl-14 h-full w-[75%] outline-none"
            />
            <button className="bg-[#E3B748] text-black  p-4  rounded-full">
              Let’s Talk
            </button>
            <img
              src={message}
              className="absolute top-5 left-6 pointer-events-none"
              alt="message icon"
            />
          </div>
        </div>
        {/* right */}
        <div className="w-[50%]">
          <img src={heroImage} alt="hero_Image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
