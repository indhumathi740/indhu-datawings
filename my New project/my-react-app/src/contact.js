
import { Form } from 'react-router-dom';
import Header from './common/header';
import Bannerscontact from './contact/banner';
import Forms from './contact/form';
import Footer from './common/footer';
import CommonHelmet from './components/commonHelmet';

function Contact() {

    return (
        <>
            <div className='ispmainservice'>
                <CommonHelmet />
                <Header />
                <Bannerscontact />
                <Forms />
                <Footer />
            </div>
        </>
    );
}

export default Contact;