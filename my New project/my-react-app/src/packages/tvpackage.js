import Header from '../common/header';
import Footer from '../common/footer';
import '../css/mainpackage.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Bannersservice from '../service/servicebanner';
import Bannerspackmain from './main-packagebanner';
import Bannerspacsme from './Smebanner';
import Bannertv from './lbanner';
import Bannertvs from './tvbanner';

function Tvpackage() {
  return (
    <>


<div className='container'>
<div className='one-pac'>
<div className=' services'>
                            <div className='row Boxss'>
                                <div className="servicebox col-lg-4" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 1 copy.jpg">
                                        </img></div>
                                        <p className="midss-title">BASIC PACKAGE</p>
                                        <p className="midess-title">
                                        ITC-10 Mbps</p>
                                        <p className="text-muted  midesss-title">Unlimited Internet</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data</p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">Speed Up to 10 Mbps</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">24/7 Customer Support</p><hr className='smallserline'></hr>

                                        <p className=" midss-title">Addons</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">IPTV</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">Voice</p><hr className='smallserline'></hr>


                                        <p className='pac-amount'> Rs 499-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>


                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 2 copy.jpg">
                                        </img></div>

                                        <p className="midss-title">PREMIUM PACKAGE</p>
                                        <p className="midess-title">
                                        ITC-20 Mbps</p>
                                        <p className="text-muted  midesss-title">Unlimited Internet</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">Speed Up to 20 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 Customer Support</p><hr className='smallserline'></hr>

                                        <p className=" midss-title">Addons</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">IPTV</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">Voice</p><hr className='smallserline'></hr>

                                        <p className='pac-amount'> Rs 699/-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>

                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-left" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 3 copy.jpg">
                                        </img></div>
                                        <p className="midss-title">HYPE PACKAGE</p>
                                        <p className="midess-title">
                                        ITC-30 Mbps</p>
                                        <p className="text-muted  midesss-title">Unlimited Internet</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">Speed Up to 30 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 Customer Support</p><hr className='smallserline'></hr>
                                        <p className=" midss-title">Addons</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">IPTV</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">Voice</p><hr className='smallserline'></hr>
                                        <p className='pac-amount'> Rs 899/-<br></br><p className='par-package'>/Monthly</p></p>



                                        <div className='buttons'><button className='btns-greenbox'>

                                            <Link className="mlink" to="/contact">
                                                subscribe now
                                            </Link>
                                        </button></div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        <div className='anothert-package'>
                        <div className=' services'>
                            <div className='row Boxss'>
                                <div className="servicebox col-lg-4" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 1 copy.jpg">
                                        </img></div>
                                        <p className="midss-title">BASIC PACKAGE</p>
                                        <p className="midess-title">
                                        ITC-10 Mbps</p>
                                        <p className="text-muted  midesss-title">Unlimited Internet</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data</p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">Speed Up to 10 Mbps</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">24/7 Customer Support</p><hr className='smallserline'></hr>

                                        <p className=" midss-title">Addons</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">IPTV</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">Voice</p><hr className='smallserline'></hr>


                                        <p className='pac-amount'> Rs 499-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>


                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 2 copy.jpg">
                                        </img></div>

                                        <p className="midss-title">PREMIUM PACKAGE</p>
                                        <p className="midess-title">
                                        ITC-20 Mbps</p>
                                        <p className="text-muted  midesss-title">Unlimited Internet</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">Speed Up to 20 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 Customer Support</p><hr className='smallserline'></hr>

                                        <p className=" midss-title">Addons</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">IPTV</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">Voice</p><hr className='smallserline'></hr>

                                        <p className='pac-amount'> Rs 699/-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>

                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-left" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 3 copy.jpg">
                                        </img></div>
                                        <p className="midss-title">HYPE PACKAGE</p>
                                        <p className="midess-title">
                                        ITC-30 Mbps</p>
                                        <p className="text-muted  midesss-title">Unlimited Internet</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">Speed Up to 30 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 Customer Support</p><hr className='smallserline'></hr>
                                        <p className=" midss-title">Addons</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">IPTV</p><hr className='smallserline'></hr>
                                        <p className="text-muted midesss-title">Voice</p><hr className='smallserline'></hr>
                                        <p className='pac-amount'> Rs 899/-<br></br><p className='par-package'>/Monthly</p></p>



                                        <div className='buttons'><button className='btns-greenbox'>

                                            <Link className="mlink" to="/contact">
                                                subscribe now
                                            </Link>
                                        </button></div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        </div>

    </>
  );
}

export default Tvpackage;
