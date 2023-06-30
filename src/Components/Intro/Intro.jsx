const Intro = () => {
  return (
    <div className="flex justify-between p-24 text-white justify-center">
      {/* left */}
      <div className="w-[50%] pl-52 pr-24 ">
        <h2 className="text-[53px] font-semibold">Let’s Introduce Ourself</h2>
      </div>
      {/* mid line */}
      <div className="h-[206px] border border-[#6A6A6A]"></div>
      {/* right */}

      <div className="w-[50%] flex flex-col pl-40 gap-3 pr-20 ">
        <h2 className="text-[32px]">Criminal Lawyer</h2>
        <p className="text-white opacity-30 w-[450px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
