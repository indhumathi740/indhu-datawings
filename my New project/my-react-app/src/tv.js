
import Footer from './common/footer';
import './css/mainpackage.css';
import Header from './common/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bannertvs from './packages/tvbanner';
import Tvpackage from './packages/tvpackage';




function Packagestv() {
    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);
    return (
        <>

            <div className='ispmainservice'>
                <Header />
                <Bannertvs />
                <Tvpackage />

                <Footer />
            </div>

        </>
    );
}

export default Packagestv;