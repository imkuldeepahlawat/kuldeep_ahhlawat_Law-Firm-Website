import giftImage from "../../../assets/giftImage.png";

const Card = ({ num }) => {
  return (
    <div className="hover:bg-[#2E2E2E] rounded-lg w-[359px] p-10 flex flex-col gap-5 border border-[#2E2E2E]">
      <img src={giftImage} className="w-[90px] h-[90px]" alt="giftimage" />
      {/* text part */}
      <div className="flex flex-col gap-4">
        <h3 className="text-white text-[24px] font-semibold">{num}% Success Rate</h3>
        <p className="text-white opacity-30 ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
        <button className="p-3 w-[121px] rounded-full bg-[#E3B748] font-bold">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
