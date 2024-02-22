
import Header from './common/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DwBlogs from './blogs/singleblog';
import Footer from './common/footer';
import Bannerblog from './blogs/blogbanner';
import CommonHelmet from './components/commonHelmet';
import DwmainBlogs from './mainblogs';
import MainDwBlogs from './MainDwBlogs';


function DwBlog() {
    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);
    return (
        <>
         <CommonHelmet 
                pageTitle="best fiber and 5G network provider in Coimbatore"
                pageDescription="Explore best fiber connectivity provider in Coimbatore Experience 
                high-speed internet, best fiber connections, and cutting-edge 4G and 5G technology 
                "
                pageKeywords=" fiber optic internet,5g internet, 5g mobile, mobile wireless internet, 5G technology,5G 
                data plans"
                />
            {/* <Header/> */}
            <div className='ispmainservice'>
                <Header />
                <Bannerblog />
                {/* <DwmainBlogs /> */}
                <MainDwBlogs />
                <Footer />

            </div>

        </>
    );
}

export default DwBlog;