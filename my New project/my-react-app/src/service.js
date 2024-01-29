
import Footer from './common/footer';
import './css/service.css';
import Header from './common/header';
import Bannersservice from './service/servicebanner';
import Secondbannerbelowcon from './ispservice/secbannerbelow';
import Services from './ispservice/services';
import Secondbanner from './ispservice/secondbanner';
import Blogsection from './ispservice/blogsection';
import Servicetestimonial from './service/testimonial';
import CommonHelmet from './components/commonHelmet';


function Serviceispse() {

  return (
    <>

      <div className='ispmainservice'>
        <CommonHelmet 
          pageTitle="Best Internet service provider in Coimbatore"
          pageDescription="Experience superior connectivity with the best internet service provider in Coimbatore. Fast and reliable service for an unmatched online experience."
          pageKeywords="high speed internet, best ISP, network marketing, best internet service,"/>
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