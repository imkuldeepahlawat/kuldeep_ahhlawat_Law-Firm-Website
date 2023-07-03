import React from "react";

const Card = ({ imageUrl, fullName, caseNum }) => {
  return (
    <div className="hover:bg-[#E3B748] rounded-lg w-[354px] h-[109px] group  flex p-4  gap-10 border border-[#2E2E2E]">
      <img src={imageUrl} className="w-[68px] h-[68px]" alt="" />
      {/* text part */}

      <div className="flex flex-col">
        <h3 className="text-white group-hover:text-black  text-[24px] font-semibold">
          {fullName}
        </h3>

        <p className="text-white opacity-30 group-hover:text-black group-hover:opacity-60 ">
          {caseNum} Cases
        </p>
      </div>
    </div>
  );
};

export default Card;
