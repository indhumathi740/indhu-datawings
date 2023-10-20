
import Footer from './common/footer';
import './css/service.css';
import Header from './common/header';
import Bannersservice from './service/servicebanner';
import Secondbannerbelowcon from './ispservice/secbannerbelow';
import Services from './ispservice/services';
import Secondbanner from './ispservice/secondbanner';
import Blogsection from './ispservice/blogsection';
import Servicetestimonial from './service/testimonial';


function Serviceispse() {

  return (
    <>

      <div className='ispmainservice'>
        <Header />
        <Bannersservice />
        <Secondbannerbelowcon />
        <Services />
        <Secondbanner />
        <Blogsection />
        <Servicetestimonial />
        <Footer />
      </div>
   
    </>
  );
}

export default Serviceispse;