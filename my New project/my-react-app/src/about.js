import Bannersabout from './aboutus/banner';
import Internetservice from './aboutus/internetservice';
import Secondbanners from './aboutus/secondbanners';
import Servbelowcontsabout from './aboutus/servbelowcon';
import Servicesabout from './aboutus/service';
import Header from './common/header';
import Banners from './ispservice/banner';
// import Servbelowcont from './ispservice/service-below-con';
import Smallbox from './ispservice/smallbox';
import Footer from './common/footer';
import Servicetestimonial from './service/testimonial';

function Aboutus() {

    return (
        <>
            <div className='ispmainservice'>
                <Header />
                <Bannersabout />
                <Servbelowcontsabout />
                <Smallbox />
                <Servicesabout />
                <Secondbanners />
                <Internetservice />
                <Servicetestimonial />

                <Footer />

            </div>
            {/* <Enquiry/>
          <Footer /> */}
        </>
    );
}

export default Aboutus;