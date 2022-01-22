import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
     <Navbar/>
     <div className="container main" >
      <HeroSection/>
     </div>
    </div>
  );
}

export default App;
