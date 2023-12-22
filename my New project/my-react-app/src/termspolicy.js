// import Header from './common/header';


import Footer from './common/footer';
// import Enquiry from "./common/enquiry";

import './css/ispservice.css';
import Header from './common/header';
import Thirdbanner from './ispservice/thirdbanner';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/footerpage.css';
import Terms from './privacy/terms';
import CommonHelmet from './components/commonHelmet';

function Termspage() {
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
        
        
<Terms />        
        <Footer />
      </div>
      {/* <Enquiry/>
        <Footer /> */}
    </>
  );
}

export default Termspage;