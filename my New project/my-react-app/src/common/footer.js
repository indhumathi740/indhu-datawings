import React from "react";
import "font-awesome/css/font-awesome.css";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { TbArrowBigUpFilled } from "react-icons/tb";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const linkStyle = {
  textDecoration: 'none',
  color: 'rgba(255, 254, 254, 0.733) ', // Set the color to white
};
const sentencesWithLinks = [
  { sentence: 'best internet service provider in coimbatore', link: '/packages' },
  { sentence: 'best internet connection and Internet provider in Coimbatore', link: '/packages' },
  { sentence: 'best Wi-Fi service provider in Coimbatore', link: '/packages' },
  { sentence: 'best Network service provider in Coimbatore', link: '/aboutus' },
  { sentence: 'best high speed internet provider in Coimbatore', link: 'https://www.datawings.co.in/' },
  { sentence: 'best broadband service provider in Coimbatore ', link: '/Businessbroadband' },
  { sentence: 'best internet Leased Line service provider in Coimbatore', link: '/InternetLeasedLine' },
  { sentence: 'best network security solution provider in Coimbatore', link: '/aboutus' },
  { sentence: 'best high speed Wi-Fi service provider in Coimbatore', link: '/packages' },
  { sentence: 'wifi connection service provider in Coimbatore', link: '/aboutus' },
  { sentence: 'internet solutions in Coimbatore', link: '/packages' },
  { sentence: 'internet service in Coimbatore', link: '/packages' },
  { sentence: 'top broadband service', link: '/packages' },
  { sentence: 'Top Internet Service Provider', link: '/packages' },
  { sentence: 'Best Broadband Plans', link: '/packages' },
  { sentence: 'best wifi internet plans', link: '/packages' },
  { sentence: 'best internet broadband plans', link: '/packages' },
  { sentence: 'Top broadband providers', link: '/packages' },
  { sentence: 'home Wi-Fi solutions in Coimbatore', link: '/packages' },
  { sentence: 'internet plans in coimbatore', link: '/packages' },
  { sentence: 'Fiber-optic internet', link: '/packages' },
  { sentence: 'best internet service provider in karur', link: '/packages' },
  { sentence: 'best internet connection and Internet provider in karur', link: '/packages' },
  { sentence: 'best Wi-Fi service provider in karur', link: '/packages' },
  { sentence: 'best Network service provider in karur', link: '/aboutus' },
  { sentence: 'best high speed internet provider in karur', link: 'https://www.datawings.co.in/' },
  { sentence: 'best broadband service provider in karur ', link: '/Businessbroadband' },
  { sentence: 'best internet Leased Line service provider in karur', link: '/InternetLeasedLine' },
  { sentence: 'best network security solution provider in karur', link: '/aboutus' },
  { sentence: 'best high speed Wi-Fi service provider in karur', link: '/packages' },
  { sentence: 'internet solutions in karur', link: '/aboutus' },
  { sentence: 'home Wi-Fi solutions in karur', link: '/aboutus' },
  { sentence: 'internet plans in karur', link: '/packages' },
  { sentence: 'Fiber-optic internet', link: '/packages' },
  { sentence: 'Broadband Internet Service Providers in Coimbatore', link: '/packages' },
  { sentence: 'Internet solutions Providers in Coimbatore', link: '/packages' },

  // ... add more sentences and links as needed
];
function Footer() {

  return (
    <footer>
      <div className="mainfooter">
        <div className="container">
          {/* <div className="small-box">
            <div className="row small">
              <div className="col-lg-3  name">
                <p className="infy">
                  <img
                    className="img-fluid"
                    src="./images/others/logo-alt.svg"
                    alt="infygain logo"
                  ></img>
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12  nam nam1">
                <p className="call">
                  <b>CALL FOR SUPPORT</b>
                </p>
                <p className="phone">
                  +91 99521 41444<br></br>+91 9087724444
                </p>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12 nam">
                <h1 className="infyy">
                  <b>ADDRESS</b>
                  <br></br>
                </h1>
                <p className="hari text-muted">
                  {" "}
                  Hari complex opp.prozone mall, Sathy Rd, Saravanampatti,
                  Coimbatore, Tamil Nadu 641035
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12  nam-icon">
                <h1 className="infyy-icon">
                  <b>FOLLOW US </b>
                  <br></br>
                </h1>
                <div className="infyicon">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/infygain/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://wa.me/919952141444"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-whatsapp"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/infygain/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/infygain-technologies/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://twitter.com/infygain"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@infygain6707"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <div className="smallbox-1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="mini-title three">Address</h1>
                <p className="address">
                  <p>
                    3/115, naryiampallipudur karuvalur annur coimbatore tamilnadu-641653 india
                  </p>
                </p>
                <p className="address ph">+91 &nbsp;8220046331</p>


                <p className="addressisp">
                  <b>info@datawings.co.in</b>
                </p>
               
              </div>
              <div className="col-md-3">
                <h1 className="mini-title two">Quick Links</h1>
                <ul className="text-muted quicklinks mb-5">
                  {/* <li> <Link to="/">Home</Link></li> */}
                  <li>
                    {" "}
                    <Link to="/"  className="link-without-underline">Home</Link>
                  </li>
                  {/* <li> <Link to="/service">Services</Link></li> */}
                  <li>
                    <Link to="/aboutus" className="link-without-underline">About Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact" className="link-without-underline">Contact Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/blog" className="link-without-underline">Blogs</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/packages" className="link-without-underline">Packages</Link>
                  </li>

                  {/* <li> <Link to="/contact">Book Services</Link></li> */}
                </ul>
              </div>
              <div className="col-md-3 link-without-underline">
                <h1 className="mini-title four">Legal Links</h1>
                <ul className="text-muted legallinks">
                  <li className="quicklinks " ><Link to="/privs">Privacy Policy</Link></li>
                  <li className="quicklinks"><Link to="/terms">Terms and Conditions</Link></li>
                  <li className="quicklinks"><Link to="/disclaimer">Disclaimer</Link></li>
                  <li className="quicklinks"><Link to="/contact">Support</Link></li>
                  <li className="quicklinks"><Link to="/support">Cancellation & Refund</Link></li>
                </ul>
              </div>
              <div className="col-md-3 lastcolfoo">
                <p className="fours">Connect with us on social media for the latest updates and news.</p>
                <div className="icoinf">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/datawings/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-facebook data-icon"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://wa.me/8220046331"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-whatsapp"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/datawings_teleinfra/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/datawingsteleinfra/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://twitter.com/Datawingstel"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCL1lKjlPpx6R2KrozMIBhNQ"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-youtube"></i>
                  </a>

                </div>
                
                                    
                 <div className=" form-group emai-btn">
           <div className="foo-main-btn"><button className="btns-green-learnmoreanothers">Stay Connect</button></div>
                                    </div> 
                                    
              </div>
              <div className="seo-keywords">
              <p className="Keywordstopsearch">TOP SEARCH KEYWORDS</p>

      <p className="text-light-color">
        {sentencesWithLinks.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.link} style={linkStyle}>
              {item.sentence}
            </a>
            {index < sentencesWithLinks.length - 1 && <>&nbsp;|&nbsp;</>}
          </React.Fragment>
        ))}
      </p>
    </div>
            </div>
          </div>
        

          {/* <div className="socialmediaicons">
            <p className="mini-title follow">Follow Us On</p>
            <div className="iconss">
              <a
                href="https://www.facebook.com/your-page-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook facebook"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter twitter"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram instagram"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp whatsapp"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin linkedin"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube youtube"></i>
              </a>
              <hr className="text-muted"></hr>
              <div className="text-muted copyright">
                <div className="row">
                  <div className="col-md-6 footercontent">
                    Copyright © 2023 Infygain. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
        
      </div>
      
      <div className="topmenu" onClick={scrollToTop}>
        <svg
          className="testIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 357.6 401.37"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-3"
                d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
              />
            </g>
          </g>
        </svg>

        <TbArrowBigUpFilled className="topIcon" />
      </div>
    </footer>
  );
}

export default Footer;
