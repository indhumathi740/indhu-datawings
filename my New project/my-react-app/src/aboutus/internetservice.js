import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';

function Firstsection() {


    return (
        <>
            <div className=' container firstsection' >
                <div className='row fir-con-box'>
                   
                    
                    <div className=' col-lg-6 rightsidecontents' data-aos="fade-left" >
                        <div className='row overall-con'>
                            <div className='rigonebox' >
                                <div className='col-md-2 icon-isp-about' >
                                    <i className="fa fa-light fa-globe fa-isp" style={{ color: "#a3bc24" }}></i>
                                </div>
                                <div className='col-md-10 icon-isp-about-con'>
                                    <p className='rigtitle'><b>Ultra fast Connection</b></p>
                                    <p className='text-muted rigpara'>Experience the thrill of seamless online browsing with our ultra-fast connection service</p>
                                </div>
                            </div>

                        </div>
                        <div className='row second'>
                            <div className='rigonebox'>
                                <div className='col-md-2 icon-isp-about'>
                                    <i class="fa fa-regular fa-desktop fa-isp" style={{ color: "#9cc723" }}></i>
                                </div>
                                <div className='col-md-10 icon-isp-about-con'>
                                    <p className='rigtitletwo'><b>Satellite TV</b></p>
                                    <p className='text-muted rigpara'>Access a world of channels and enjoy crystal-clear picture quality.</p>
                                </div>
                            </div>

                        </div>
                        <div className='row third'>
                            <div className='rigonebox'>
                                <div className='col-md-2 icon-isp-about'>
                                    <i class="fa fa-phone fa-isp" style={{ color: "#9cc723" }}></i>
                                </div>
                                <div className='col-md-10 pho-ic-tit'>
                                    <p className='rigtitle'><b>
                                        VOIP</b></p>
                                    <div className='ic-para'><p className='text-muted rigpara'>Stay connected with clarity and reliability through VOIP </p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6  bocximages' data-aos="zoom-in-right" data-aos-duration="2000">
                        <img src="/images/banner/woman-using-laptop.jpg" alt="service icons" className=' img-fluid experience'
                        title='women using laptop'></img>
                    </div>                </div>
            </div>
            

        </>
    );
}

export default Firstsection;