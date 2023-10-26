import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Secondbanner() {
    return (
        <>

            <div className=' ispservice1 '>
                <div className=" topbannersection1" data-aos="fade-up" data-aos-duration="1000">
                    <div className='container '
                    >
                        <div className='container row'>
                            <div className='col-md-5 bor' >
                                <div className=' contentsection'>
                                    <div className='button' data-aos="fade-up" data-aos-duration="1000"><button className='btns-greens'>promo</button></div>

                                    <p className='bannercontentone' data-aos="fade-up" data-aos-duration="1000">Experience Lightning-Fast Internet Today!</p>

                                </div>
                                <div className='lists'>
                                    <p className='bannercontentpara' data-aos="fade-up" data-aos-duration="1000">Experience blazing-fast internet with Datawings. Say goodbye to buffering and lag – choose your speed, connect, and enjoy the future of connectivity.</p>
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

export default Secondbanner;
