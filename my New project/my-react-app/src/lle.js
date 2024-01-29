
import Footer from './common/footer';
import './css/mainpackage.css';
import Header from './common/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bannerlle from './packages/lbanner';
import SMElles from './packages/smelle';
import CommonHelmet from './components/commonHelmet';



function Packageslles() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className='ispmainservice'>
        <CommonHelmet 
         pageTitle="advanced network provider in Coimbatore"
         pageDescription="- Discover advanced network provider in Coimbatore with best network
         coverage, mobile network services, 5g network and wireless wi-fi router solutions"
         pageKeywords="best network coverage, mobile network services, 5g and 4g network, wireless wifi router, wifi
         access point"
        />
      <Header />
<Bannerlle />
<SMElles />

        <Footer />
      </div>
      {/* <Enquiry/>
        <Footer /> */}
    </>
  );
}

export default Packageslles;