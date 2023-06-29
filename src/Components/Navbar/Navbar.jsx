import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between text-white">
      <div className="">
        <img src={logo} alt="law_firm_logo" />
      </div>
      <ul className="flex gap-24">
        <li>Home</li>
        <li>Attorneys</li>
        <li>Practice Areas</li>
        <li>About Us</li>
      </ul>
      <button className="text-white border border-2 p-2">Contact Now</button>
    </div>
  );
};

export default Navbar;
