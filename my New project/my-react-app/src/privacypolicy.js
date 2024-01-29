// import Header from './common/header';


import Footer from './common/footer';
// import Enquiry from "./common/enquiry";

import './css/ispservice.css';
import Header from './common/header';
import Thirdbanner from './ispservice/thirdbanner';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footerpriv from './privacy/privacy';
import './css/footerpage.css';

function Footerprivacypage() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className='ispmainservice'>
        <Header />
        
        
<Footerpriv />        
        <Footer />
      </div>
      {/* <Enquiry/>
        <Footer /> */}
    </>
  );
}

export default Footerprivacypage;