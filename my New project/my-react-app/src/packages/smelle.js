import Header from '../common/header';
import Footer from '../common/footer';
import '../css/mainpackage.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Bannersservice from '../service/servicebanner';
import Bannerspackmain from './main-packagebanner';
import Bannerspacsme from './Smebanner';
import Bannerlle from './lbanner';

function SMElles() {
  return (
    <>

<div className='container'>
<h2 className='data-pack-main mb-4'>Our <b>Internet Leased Line service</b> provides high-speed, dedicated Internet connectivity to ensure your business stays connected 24/7</h2>
<li className='data-pack-main-con'>Throughput Commitment:-1:1 symetric Bandwidth</li>
<li className='data-pack-main-con'>IPV6 Ready</li>
<li className='data-pack-main-con'>POP Level Dual Upstream Parenting</li>
<li className='data-pack-main-con'>Last Mile Level Dual POP Parenting</li>
<li className='data-pack-main-con'>Dedicated Technical Assurance Manager</li>
<li className='data-pack-main-con'>Self Help Portal And Billing, Usage Graph and Uptime information</li>
</div>

    </>
  );
}

export default SMElles;
