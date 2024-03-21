
import { Form } from 'react-router-dom';
import Header from './common/header';
import Bannerscontact from './contact/banner';
import Forms from './contact/form';
import Footer from './common/footer';
import CommonHelmet from './components/commonHelmet';

function Contact() {

    return (
        <>
         <CommonHelmet 
                pageTitle="best Internet Service provider in karur|Broadband Service"
                pageDescription="Discover the best Internet Service provider in karur with the top ISP. 
                Explore advanced 5G networks, internet speed, overall internet services"
                pageKeywords="Mobile network services,4G connectivity,5G network, best 5g phones, isp services"
                />
            <div className='ispmainservice'>
             
                <Header />
                <Bannerscontact />
                <Forms />
                <Footer />
            </div>
        </>
    );
}

export default Contact;