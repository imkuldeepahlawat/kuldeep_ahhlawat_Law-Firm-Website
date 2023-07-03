import logoImage from "../assets/logo.png";
import instaLogo from "../assets/socialMedia/instagramIcon.png";
import tweeterLogo from "../assets/socialMedia/tweeterIcon.png";
import facebookLogo from "../assets/socialMedia/facebookIcon.png";
import pentrestLogo from "../assets/socialMedia/pentrestIcon.png";

const Footer = () => {
  return (
    <div className="bg-[#171717] flex flex-col p-24 gap-8 justify-center">
      <div className="flex justify-between  ">
        <img src={logoImage} alt="logoImage" />
        <ul className="flex text-white text-[20px] font-semibold gap-10">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Attorneys</li>
          </a>
          <a href="#">
            <li>Prectice Areas</li>
          </a>
          <a href="#">
            <li>About Us</li>
          </a>
        </ul>
        <div className="flex gap-5">
          <a href="#">
            <img src={instaLogo} alt="instalogo" />
          </a>
          <a href="#">
            <img src={facebookLogo} alt="facebooklogo" />
          </a>
          <a href="#">
            <img src={tweeterLogo} alt="tweeterLogo" />
          </a>
          <a href="#">
            <img src={pentrestLogo} alt="pentrestlogo" />
          </a>
        </div>
      </div>
      <div className="text-center flex justify-center text-white items-center gap-10 font-semibold opacity-90">
        <h3>© 2020 Acme. All right reserved.</h3>
        <h3> Privacy Policy</h3>
        <h3>Terms of Service</h3>
      </div>
    </div>
  );
};

export default Footer;
