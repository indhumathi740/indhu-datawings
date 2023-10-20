
import { Form } from 'react-router-dom';
import Header from './common/header';
import Bannerscontact from './contact/banner';
import Forms from './contact/form';
import MyPackages from './MyPackages';

function Location() {

    return (
        <>
            <div className='ispmainservice'>
                <Header />
              <MyPackages />
            </div>
        </>
    );
}

export default Location;