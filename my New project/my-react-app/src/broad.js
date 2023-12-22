
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
        <CommonHelmet />
      <Header />
<Bannerspackmain />
<Mainpackage />

        <Footer />
      </div>
     
    </>
  );
}

export default Packagesbroad;