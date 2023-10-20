
import Header from './common/header';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DwBlogs from './blogs/singleblog';
import Footer from './common/footer';
import Bannerblog from './blogs/blogbanner';


function DwBlog() {
    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);
    return (
        <>
            {/* <Header/> */}
            <div className='ispmainservice'>
                <Header />
                <Bannerblog />
                <DwBlogs />
                <Footer />

            </div>

        </>
    );
}

export default DwBlog;