
import { Form } from 'react-router-dom';
import Header from './common/header';
import Bannerscontact from './contact/banner';
import Forms from './contact/form';
import MyPackages from './MyPackages';
import CommonHelmet from './components/commonHelmet';

function Location() {

    return (
        <>
            <div className='ispmainservice'>
                <CommonHelmet />
                <Header />
              <MyPackages />
            </div>
        </>
    );
}

export default Location;