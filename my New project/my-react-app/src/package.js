import Finalbanner from './ispservice/finalbanner';
import Footer from './common/footer';
import './css/ispservice.css';
import Header from './common/header';
import Thirdbanner from './ispservice/thirdbanner';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Smallbox from './ispservice/smallbox';
import Packagequestions from './packages/packages questions';

function Packages() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className='ispmainservice'>
        <Header />
        <Thirdbanner />
        <Smallbox />
        <Finalbanner />
        <Packagequestions />

        <Footer />
      </div>
      {/* <Enquiry/>
        <Footer /> */}
    </>
  );
}

export default Packages;