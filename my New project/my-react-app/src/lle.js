
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
        <CommonHelmet />
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