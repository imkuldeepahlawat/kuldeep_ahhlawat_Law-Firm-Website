import Image1 from "../../assets/imgGallery/img1.png";
import Image2 from "../../assets/imgGallery/img2.png";
import Image3 from "../../assets/imgGallery/img3.png";
import Image4 from "../../assets/imgGallery/img4.png";
import Image5 from "../../assets/imgGallery/img5.png";
import Image6 from "../../assets/imgGallery/img6.png";

const Section4 = () => {
  return (
    <div className="flex flex-col justify-center gap-20 pb-24">
      <h2 className="text-center text-white text-[54px] font-semibold">
        Area of Practices
      </h2>
      <div className="flex flex-wrap justify-center gap-6 ">
        {/* 1 */}
        <div className="flex items-center  gap-6">
          <div className="relative">
            <img src={Image1} alt="businesslaw" />
            <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
              BUSINESS LAW
            </h3>
          </div>
          <div className="relative ">
            <img src={Image2} alt="partnershiplaw" />
            <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
              Partnership LAW
            </h3>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center  gap-6">
          <div className="relative">
            <img src={Image3} alt="businesslaw" />
            <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
              REAL ESTATE LAW
            </h3>
          </div>
          <div className="relative">
            <img src={Image4} alt="partnershiplaw" />
            <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
              BUSINESS LAW
            </h3>
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-center  gap-6">
          <div className="relative">
            <img src={Image5} alt="businesslaw" />
            <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
              LANDLORD DISPUTES
            </h3>
          </div>
          <div className="relative ">
            <img src={Image6} alt="partnershiplaw" />
            <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
              ELDER ABUSE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
