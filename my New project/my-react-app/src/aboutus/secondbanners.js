import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Secondbanners() {
    return (
        <>

            <div className=' ispservice1s '>
                <div className=" topbannersection1s" data-aos="fade-up" data-aos-duration="1000">
                    <div className='container isp-about-sec-banner'>
                  

                        <div className='container row isp-about'>
                            <div className='col-md-7'></div>
                            <div className='col-md-5 bors' >
                                <div className=' contentsections'>
                                    <div className='buttons' data-aos="fade-up" data-aos-duration="1000"><button className='btns-greens'>promo</button></div>

                                    <p className='bannercontentoness' data-aos="fade-up" data-aos-duration="1000">Lightning-Fast Internet Awaits You</p>

                                </div>
                                <div className='lists'>
                                    <p className='bannercontentparas' data-aos="fade-up" data-aos-duration="1000">Experience blazing-fast internet with Datawings. Say goodbye to buffering and lag – choose your speed, connect, and enjoy the future of connectivity.</p>
                                </div>
                                <div className='button' data-aos="fade-up" data-aos-duration="1000"><Link to="/packages"><button className='btns-green'>get started</button></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
        </>

    );
}

export default Secondbanners;
