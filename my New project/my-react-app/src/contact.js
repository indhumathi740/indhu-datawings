
import { Form } from 'react-router-dom';
import Header from './common/header';
import Bannerscontact from './contact/banner';
import Forms from './contact/form';

function Contact() {

    return (
        <>
            <div className='ispmainservice'>
                <Header />
                <Bannerscontact />
                <Forms />
            </div>
        </>
    );
}

export default Contact;