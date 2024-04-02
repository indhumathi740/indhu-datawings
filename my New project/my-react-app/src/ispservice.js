// import Header from './common/header';
import Banner from './ispservice/banner';
import Blogsection from './ispservice/blogsection';
import Finalbanner from './ispservice/finalbanner';
import Firstsection from './ispservice/firstsection';
import Secondbanner from './ispservice/secondbanner';
import Servbelowcont from './ispservice/service-below-con';
import Services from './ispservice/services';
import Footer from './common/footer';
// import Enquiry from "./common/enquiry";

import './css/ispservice.css';
import Header from './common/header';
import Thirdbanner from './ispservice/thirdbanner';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Smallbox from './ispservice/smallbox';
import Secondbannerbelowcon from './ispservice/secbannerbelow';
import DwBlogs from './blogs/singleblog';
import Carousel1 from './ispservice/carousel1';
import Carouselabout from './ispservice/carousel';
import { Helmet } from 'react-helmet';
import CommonHelmet from './components/commonHelmet';

function Ispservice() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <>
    
      {/* <Header/> */}
      <div className='ispmainservice'>
      <CommonHelmet
     pageTitle="Best Internet service provider in karur,Coimbatore"
     pageDescription="Datawings is a Internet Service Provider in Karur that Provides high-speed internet, Wi-Fi, fiber network, and overall internet service provider ."
     pageKeywords="high speed internet, best ISP, network marketing, best internet service, best fiber network"
     />
        <Header />
        <Banner />
        <Firstsection />
        <Smallbox />
        <Secondbanner />
        {/* <Carouselabout/> */}
        <Secondbannerbelowcon />
        <Services />
        <Servbelowcont />
        <Thirdbanner />
        <Blogsection />
        <DwBlogs />
        <Finalbanner />
        <Carousel1 />
        <Footer />
   

      </div>
      {/* <Enquiry/>
        <Footer /> */}
    </>
  );
}

export default Ispservice;