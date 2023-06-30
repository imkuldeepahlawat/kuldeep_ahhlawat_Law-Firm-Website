import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import Intro from "./Components/Intro/Intro";
import Section3   from "./Components/Section3/Section3"; 
import Section4   from "./Components/Section4/Section4"; 

function App() {
  return (
    <div className="w-[100vw] bg-[#232222] font-">
      <HeroSection />
      <Intro/>
      {/* why choose us */}
      <Section3/>
      <Section4/>
    </div>
  );
}

export default App;
