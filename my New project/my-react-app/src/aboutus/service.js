import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { FaComputer } from "react-icons/fa6";
function Servicesabout() {
  return (
    <>
      <div className='container services-about' data-aos="zoom-in-up" data-aos-duration="2000">
        <div className='row Boxss'>
          <div className="servicebox col-lg-4">
            <div className="serviceContentss">
              <div className='des'> <img
                className="img-fluid"

                src="./images/icons/ICON1.webp"

                
                alt="Vision"
                title='Vision'
              ></img></div>

              <h2 className="mids-titles-isp">Our Vision</h2>
              <p className="text-muted box-conin-isp-about">
              Discover our commitment to high-speed, dedicated Internet connectivity that ensures your business stays connected 24/7.      </p>
              <div className='smallines'></div>
            </div>
          </div>
          <div className="servicebox col-lg-4">
            <div className="serviceContentss">
            <div className='des'><img
                className="img-fluid"

                src="./images/icons/ICON2.webp"
                alt="Mission"
                title='Mission'


                
              ></img></div>

              <h2 className="mids-titles-isp">Our Mission</h2>
              <p className="text-muted box-conin-isp-about">
              Explore our mission to provide tailored connectivity solutions for small and medium-sized enterprises, designed to boost productivity and efficiency. </p>
              <div className='smallines'></div>

            </div>
          </div>   <div className="servicebox col-lg-4">
            <div className="serviceContentss">
            <div className='des'><img
                className="img-fluid"

                src="./images/icons/ICON3.webp"
                alt=" Value"
                title=' Value'

           
              ></img></div>

              <h2 className="mids-titles-isp">Our Value</h2>
              <p className="text-muted box-conin-isp-about">
              Learn about our commitment to reliable broadband solutions that consistently deliver high-speed Internet access to meet your business needs.          </p>
              <div className='smallines'></div>


            </div>
          </div>
        </div>
        <div className='row Boxsss'>
          
         
          
        </div>
      </div>
    </>
  );
}

export default Servicesabout;