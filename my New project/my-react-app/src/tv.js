
import Footer from './common/footer';
import './css/mainpackage.css';
import Header from './common/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bannertvs from './packages/tvbanner';
import Tvpackage from './packages/tvpackage';
import CommonHelmet from './components/commonHelmet';




function Packagestv() {
    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);
    return (
        <>

            <div className='ispmainservice'>
                <CommonHelmet />
                <Header />
                <Bannertvs />
                <Tvpackage />

                <Footer />
            </div>

        </>
    );
}

export default Packagestv;