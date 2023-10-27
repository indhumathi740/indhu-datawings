import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/contact.css';

function Forms() {
    return (
        <>
            <div className='isp-con-overal-con'>
                <div className='container contact-form'>

                    <div className='row formrow'>

                        <div className=' container col-lg-6 rightsidecontents' data-aos="fade-left" >
                            <div className='row overall-con'>
                                <div className='button' data-aos="fade-up" data-aos-duration="1000"><button className='btns-greens'>get in touch</button></div>
                                <p className='ban-two-bel'>Let's start talking with us</p>
                                <p className='text-muted'>Feel free to reach out to us with any questions or concerns</p>
                                <div className='rigonebox' >
                                    <div className='col-md-2 icon-isp-about' >
                                        <img src="/images/banner/loc.png" alt="service icons" className='  fa-isp'></img>                                 </div>
                                    <div className='col-md-10 icon-isp-about-con'>

                                        <p className='rigtitle'><b>Head office</b></p>
                                        <p className='text-muted rigpara'>3/115, NARYIAMPALLIPUDUR
                                            KARUVALUR ANNUR<br></br> COIMBATORE
                                            TAMILNADU-641653 INDIA </p>
                                    </div>
                                </div>

                            </div>
                            <div className='row second'>
                                <div className='rigonebox'>
                                    <div className='col-md-2 icon-isp-about'>
                                        <img src="/images/banner/Text.png" alt="service icons" className='  fa-isp'></img>                                </div>
                                    <div className='col-md-10 icon-isp-about-con'>
                                        <p className='rigtitletwo'><b>Email us</b></p>
                                        <p className='text-muted rigpara'>Sales :  info@datawings.co.in<br></br>Support : support@datawings.co.in
                                            {/* Sales : hello@datawingstel.in</p> */}</p>
                                    </div>
                                </div>

                            </div>
                            <div className='row third'>
                                <div className='rigonebox'>
                                    <div className='col-md-2 icon-isp-about'>
                                        <img src="/images/banner/ph.png" alt="service icons" className='fa-isp'></img>                                </div>
                                    <div className='col-md-10 pho-ic-tit'>
                                        <p className='rigtitle'><b>
                                            Head office</b></p>
                                        <div className='ic-para'><p className='text-muted rigpara'>Sales : +91 8220046331<br></br>

                                            Support : +91 9940774077</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6   isp-form-box'>
                            <p className=' isp-contact-form'>Send us a message</p>
                            <form>
                                <div className="row box">
                                    <div className="col-md-6 form-group form-groupsisp">
                                        <label>Name </label>
                                        <input type="text" className="form-control messages" placeholder="Your name *" required />
                                    </div>
                                    <div className="col-md-6 form-group form-groupsisp">
                                        <label className=''>
                                            Company </label>
                                        <input type="phone" className="form-control messages" placeholder="Company*" required />
                                    </div>
                                    <div className="col-md-6 form-group form-groupsisp">
                                        <label>Phone  </label>
                                        <input type="email" className="form-control messages " placeholder="Phone *" required />
                                    </div>
                                    <div className="col-md-6 form-group form-groupsisp">
                                        <label>Email </label>
                                        <input type="text" className="form-control messages" placeholder="Email " required />
                                    </div>
                                    <div className="form-group form-groupsisp">
                                        <label>Subject </label>
                                        <input type="text" className="form-control messages" placeholder="Subject" required />
                                    </div>
                                    <div className=" form-group form-groupsisp">
                                        <label>Message </label>
                                        <input type="textarea" className="form-control message" placeholder="Your Message" required />
                                    </div>
                                </div>
                                <div className='btn-isp-con'>
                                    <button className="btns btns-greenbox">
                                        Send Message &nbsp;<span className="fa fa-arrow-right"></span>
                                    </button>
                                </div>
                            </form>

                        </div>
                        <div className='col-md-12 map'> <iframe className='
                infymap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2655278544585!2d76.9656752750861!3d11.018693654678188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8618bc25c5780e8d%3A0x2166a347cca91a17!2sDatawings%20Teleinfra%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1697634244984!5m2!1sen!2sin"></iframe>
                    </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Forms;
