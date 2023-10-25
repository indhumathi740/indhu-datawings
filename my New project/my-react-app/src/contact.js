
import { Form } from 'react-router-dom';
import Header from './common/header';
import Bannerscontact from './contact/banner';
import Forms from './contact/form';
import Footer from './common/footer';

function Contact() {

    return (
        <>
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