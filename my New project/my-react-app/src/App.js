import Ispservice from './ispservice';
import Banner from './ispservice/banner';
import Firstsection from './ispservice/firstsection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Packages from './package';
import Aboutus from './about';
import Contact from './contact';
import Serviceispse from './service';
import DwBlogs from './blogs/singleblog';
import DwBlog from './blog';
import Mainpackage from './packages/mainpackage';
import SMEpackage from './packages/smepackage';
import SMElles from './packages/smelle';
import Tvpackage from './packages/tvpackage';
import Packagessmes from './smepackage';
import Packageslles from './lle';
import Packagesbroad from './broad';
import Packagestv from './tv';
import Location from './packagelocation';
import OverBlogs from './overblog';
import Footerprivacypage from './privacypolicy';
import Termspage from './termspolicy';
import Dispage from './disclaims';
import Suppopage from './supportpage';
import Login from "./admin/Login";
import DashBoard from "./admin/Dashboard";
import Category from "./admin/Category";
import AddCategory from "./admin/AddCategory";
import EditCategory from "./admin/EditCategory";
import Blog from "./admin/Blog";
import AddBlog from "./admin/AddBlog";
import EditBlog from "./admin/EditBlog";
import ScrollToTop from "./common/scrollToTop";

import './css/styles.css'; // Import the CSS file with Google Fonts
import Four from './404';
import MainDwBlogs from './MainDwBlogs';
// import Mainpackages from './MyPackages';



function App() {
  return (
    <div className="App">
    {/* <Banner />
    <Firstsection /> */}
       <ScrollToTop />
   <Routes>

        <Route path="/" element={<Ispservice />} />
    
        <Route path="/packages" element={<Packages/>} />
        <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Serviceispse/>} />
        <Route path="/blog" element={<DwBlog/>} />
        <Route path="/Businessbroadband" element={<Packagesbroad/>} />
        <Route path="/SMEinternet" element={<Packagessmes/>} />
        <Route path="/InternetLeasedLine" element={<Packageslles/>} />
        <Route path="/tv" element={<Packagestv/>} />
        <Route path="/mainblog/:id/:name"  element={<OverBlogs/>} />
        <Route path="/privs" element={<Footerprivacypage/>} />
        <Route path="/terms" element={<Termspage/>} />
        <Route path="/disclaimer" element={<Dispage/>} />
        <Route path="/support" element={<Suppopage/>} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/AddCategory" element={<AddCategory />} />
        <Route path="/editblog/:id" element={<EditBlog />} />
        <Route path="/editcategory/:id" element={<EditCategory />} />
        <Route path="/adminblog" element={<Blog />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="*" element={<Four />} />
        {/* <Route path="/mains" element={<Mypackages/>} /> */}
        {/* <Route path="/location" element={<Location/>} /> */}


      </Routes>
    </div>
  );
}

export default App;
