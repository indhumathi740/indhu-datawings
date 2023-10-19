import Ispservice from './ispservice';
import Banner from './ispservice/banner';
import Firstsection from './ispservice/firstsection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Packages from './package';
import Aboutus from './about';
import Contact from './contact';


function App() {
  return (
    <div className="App">
    {/* <Banner />
    <Firstsection /> */}
   <Routes>
        <Route path="/" element={<Ispservice />} />
    
        <Route path="/packages" element={<Packages/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/contact" element={<Contact/>} />


      </Routes>
    </div>
  );
}

export default App;
