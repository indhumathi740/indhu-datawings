
import Footer from './common/footer';
import './css/mainpackage.css';
import Header from './common/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bannerspacsme from './packages/Smebanner';
import SMEpackage from './packages/smepackage';
import CommonHelmet from './components/commonHelmet';


function Packagessmes() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className='ispmainservice'>
        <CommonHelmet 
          pageTitle="Best high-speed internet provider in Coimbatore"
          pageDescription="- Experience the high-speed internet provider in Coimbatore with wireless
          access points, fiber optic solution, mobile router solutions,5g Wi-Fi router"
          pageKeywords="best network coverage, mobile network services, 5g and 4g network, wireless wifi router,
          wifi access point, 5g Wi-Fi router"/>
      <Header />
<Bannerspacsme />
        <SMEpackage />

        <Footer />
      </div>
      {/* <Enquiry/>
        <Footer /> */}
    </>
  );
}

export default Packagessmes;