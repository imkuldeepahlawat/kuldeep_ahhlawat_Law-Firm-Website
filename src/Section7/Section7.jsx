import Accordian from "../Components/Accordian/Accordian";

const faqList = [
  {
    question: "Do I need a personal injury report?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
  {
    question: "How much is my case worth?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
  {
    question: "What should I do right after car accidect",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
  {
    question: "How much is my case worth??",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit error enim ex quos maxime quia nobis eaque quis nesciunt illo est sed, mollitia esse illum velit, dicta recusandae praesentium officiis voluptatibus voluptas! Voluptates, accusamus quae!",
  },
];

const Section7 = () => {
  return (
    <div className="flex justify-between p-24 pl-64 pr-64 justify-center">
      <div className="">
        <h3 className="text-white uppercase text-[54px] font-semibold">faq</h3>
        <p className="text-white opacity-30 font-semibold text-[18px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </p>
      </div>
      <div className="">
        <Accordian data={faqList} />
      </div>
    </div>
  );
};

export default Section7;
