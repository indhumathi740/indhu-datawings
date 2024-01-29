
import Footer from './common/footer';
import './css/mainpackage.css';
import Header from './common/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bannerspackmain from './packages/main-packagebanner';
import Mainpackage from './packages/mainpackage';
import CommonHelmet from './components/commonHelmet';




function Packagesbroad() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <>

      <div className='ispmainservice'>
        <CommonHelmet 
         pageTitle="best wireless internet provider in Coimbatore"
         pageDescription="Discover the best wireless internet provider in Coimbatore. Explore best WiFi, wireless router, access points, and cutting-edge 5G Wi-Fi technology
         "
         pageKeywords="high speed internet, best ISP, network marketing, best internet service,"
        />
      <Header />
<Bannerspackmain />
<Mainpackage />

        <Footer />
      </div>
     
    </>
  );
}

export default Packagesbroad;