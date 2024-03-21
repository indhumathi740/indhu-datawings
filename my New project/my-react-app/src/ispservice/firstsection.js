import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Firstsection() {


    return (
        <>
            <div className=' container firstsection' >
                <div className='row fir-con-box'>
                    <div className='col-lg-4 cen-con-imgbefore' data-aos="fade-right" data-aos-duration="2000">
                        <div className='leftsidecontent'>
                            <div className='securebutton'><button className='btns-green another'><a href='/Internet-service-Provider'>secure Internet</a></button><br></br></div>
                            <h1 className='content'>10x faster than the current standard of WiFi.</h1>
                            <p className='text-muted parafirsec'>Experience the future of connectivity with our WiFi service, 10x faster than the current standard. Enhance your digital experience today with Datawings Teleinfra, providing the <b>best internet services</b>.
                            </p>
                            <div className='getbutton'><Link to="/Broadband-Internet-service"><button className='btns-green '>get started</button></Link></div>
                        </div>
                    </div>
                    <div className='col-lg-3 center-img'>

                        <div className='' ><img src="../images/banner/ispimage.webp" alt="10x faster than the current standard of WiFi." title='10x faster than the current standard of WiFi.' class="ispimage" />

                        
                        </div>
                    </div>

                    <div className=' col-lg-5 rightsidecontent' data-aos="fade-left" >
                        <div className='row'>
                            <div className='rigonebox' >
                                <div className='col-md-4' >
                                    <i className="fa fa-light fa-globe" style={{ color: "#a3bc24" }}></i>
                                </div>
                                <div className='col-md-6'>
                                    <p className='rigtitle'><b>Ultra fast Connection</b></p>
                                    <p className='text-muted rigpara'>Experience the thrill of seamless online browsing with our ultra-fast connection service</p>
                                </div>
                            </div>

                        </div>
                        <div className='row second'>
                            <div className='rigonebox'>
                                <div className='col-md-4'>
                                    <i class="fa fa-regular fa-desktop " style={{ color: "#9cc723" }}></i>
                                </div>
                                <div className='col-md-6'>
                                    <p className='rigtitletwo'><b>IP TV</b></p>
                                    <p className='text-muted rigpara'>Access a world of channels and enjoy crystal-clear picture quality.</p>
                                </div>
                            </div>

                        </div>
                        <div className='row third'>
                            <div className='rigonebox'>
                                <div className='col-md-4'>
                                    <i class="fa fa-phone" style={{ color: "#9cc723" }}></i>
                                </div>
                                <div className='col-md-6 '>
                                    <p className='rigtitle'><b>
                                        VOIP</b></p>
                                    <div className='ic-para'><p className='text-muted rigpara'>Stay connected with clarity and reliability through VOIP </p></div>
                                </div>
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
}

export default Firstsection;