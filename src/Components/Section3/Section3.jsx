import Card from "./Card/Card";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center gap-24  pb-24 ">
      <h2 className="text-center text-white text-[54px] font-semibold">
        Why Choose us?
      </h2>
      <div className="flex gap-24 ">
        <div className="">
          {" "}
          <Card num={98} />{" "}
        </div>
        <div className="">
          <Card num={100} />
        </div>
        <div className="">
          <Card num={100} />
        </div>
      </div>
    </div>
  );
};

export default Section3;
