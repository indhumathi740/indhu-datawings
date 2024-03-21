
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
          pageTitle="Best high-speed internet provider in karur.|Broadband internet service"
          pageDescription="Experience the internet provider in karur with Broadband internet service, business internet, mobile router solutions,home internet"
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