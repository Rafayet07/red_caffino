import{Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import RecipesPage from "./Pages/RecipesPage";
import SettingsPage from "./Pages/SettingsPage";

function App() {
  return (
    <Router>
     <Navbar/>
     <div className="container main" >
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/recipes" element={<RecipesPage/>}/>
       <Route path="/settings" element={<SettingsPage/>}/>
     </Routes>

     </div>
      <Footer/>
    </Router>
  );
}

export default App;
