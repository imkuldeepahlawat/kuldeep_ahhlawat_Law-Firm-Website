import  { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = (props) => {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className=" w-[639px] flex flex-col gap-4">
      {data.map((item, index) => (
        <div className="w-full" key={item.question}>
          <button className='flex w-full justify-between'  onClick={() => handleClick(index)}>
            <h3 className='text-[32px] font-semibold text-left text-white'>{item.question}</h3>
            <span className='w-[40px] h-[40px] text-[22px] font-bold  bg-[#E3B748] rounded-full  h-[28px]'>{activeIndex === index?"-":"+"}</span>
          </button>
          {
            activeIndex === index &&(
                <div className=" w-full h-auto">
                    <p className='text-white opacity-30'>{item.answer}</p>
                </div>
            )
          }
        </div>
      ))}
    </div>
  );
};
Accordion.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Accordion;
