import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Banner() {
    return (
        <>

            <div className=' ispservice '>
                <div className=" topbannersection">
                    <div className='container'>

                        <div className='row'>
                            <div className='col-md-7' data-aos="fade-up" data-aos-duration="1000">
                                <div className=' contentsection'>
                                    <p className="maintitle" >Your World, Our Network.</p>
                                    <div className='smalline'></div>
                                    <p className='bannercontent' data-aos="fade-up" data-aos-duration="2000">
                                    Elevate your digital experience with Datawings – the undisputed "best internet service provider (ISP)." Enjoy blazing-fast Internet and immersive IPTV. Uncover unbeatable connectivity and competitive pricing today.




</p>

                                </div>
                                <div className='lists' data-aos="fade-up" data-aos-duration="2000">
                                    <ul className='listlines'>
                                        <li><i className="fa fa-thin fa-check fa-2xs" style={{ color: "#15e037" }}></i>  Dedicated 24/7 customer care</li>
                                        <li><i className="fa fa-thin fa-check" style={{ color: '#15e037' }}></i>   Unlimited Data usage</li>
                                        <li><i className="fa fa-thin fa-check" style={{ color: '#15e037' }}></i>  Plan Starts from Rs.349</li>
                                    </ul>
                                </div>
                                <div className='button' data-aos="fade-up" data-aos-duration="1000">
                                    <Link to="/packages">
                                        <button className='btns-green'>see plan & deals</button>
                                    </Link>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Banner;
