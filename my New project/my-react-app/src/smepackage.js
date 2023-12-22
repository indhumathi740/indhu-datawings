
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
        <CommonHelmet />
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