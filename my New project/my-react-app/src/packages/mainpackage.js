import Header from '../common/header';
import Footer from '../common/footer';
import '../css/mainpackage.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Bannersservice from '../service/servicebanner';
import Bannerspackmain from './main-packagebanner';

function Mainpackage() {
  return (
    <>




<div className='container services'>
                            <div className='row Boxss'>
                                <div className="servicebox col-lg-4" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group-1.webp"alt='BASIC PACKAGE'title='BASIC PACKAGE'>
                                        </img></div>
                                        <p className="midss-title">BASIC PACKAGE</p>
                                        <p className="midess-title">
                                        50 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to 50 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Unlimited Data</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">IP Private</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>

                                        <p className='pac-amount'> Rs 1500/-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>


                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group-2.webp"alt='PREMIUM PACKAGE'title='PREMIUM PACKAGE'>
                                        </img></div>

                                        <p className="midss-title">PREMIUM PACKAGE</p>
                                        <p className="midess-title">
                                        100 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to 100 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Free Public IP</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>

                                        <p className='pac-amount'> Rs 2500/-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>

                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-left" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group-3.webp"alt='HYPE PACKAGE'title='HYPE PACKAGE'>
                                        </img></div>
                                        <p className="midss-title">HYPE PACKAGE</p>
                                        <p className="midess-title">
                                        250 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to  250 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Free Public IP</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>
                                        <p className='pac-amount'> Rs 5000/-<br></br><p className='par-package'>/Monthly</p></p>



                                        <div className='buttons'><button className='btns-greenbox'>

                                            <Link className="mlink" to="/contact">
                                                subscribe now
                                            </Link>
                                        </button></div>

                                    </div>
                                </div>
                            </div>
                        </div>

    </>
  );
}

export default Mainpackage;
