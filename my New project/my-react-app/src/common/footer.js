import React from "react";
import "font-awesome/css/font-awesome.css";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { TbArrowBigUpFilled } from "react-icons/tb";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
              <div className="col-xs-6 col-sm-3">
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
                <div className="infyicon">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/infygain/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-facebook data-icon"></i>
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
              <div className="col-xs-6 col-sm-3 quick-box">
                <h1 className="mini-title two">Quick Links</h1>
                <ul className="text-muted quicklinks mb-5">
                  {/* <li> <Link to="/">Home</Link></li> */}
                  <li>
                    {" "}
                    <Link to="/"  className="link-without-underline">Home</Link>
                  </li>
                  {/* <li> <Link to="/service">Services</Link></li> */}
                  <li>
                    <Link to="/aboutus" className="link-without-underline">Aboutus</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact" className="link-without-underline">Contact Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/service" className="link-without-underline">Services</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/packages" className="link-without-underline">Packages</Link>
                  </li>

                  {/* <li> <Link to="/contact">Book Services</Link></li> */}
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3 link-without-underline">
                <h1 className="mini-title four">Legal Links</h1>
                <ul className="text-muted legallinks">
                  <li className="quicklinks " ><Link to="/privs">Privacy Policy</Link></li>
                  <li className="quicklinks"><Link to="/terms">Terms and Conditions</Link></li>
                  <li className="quicklinks"><Link to="/disclaimer">Disclaimer</Link></li>
                  <li className="quicklinks"><Link to="/support">Support</Link></li>
                  <li className="quicklinks"><Link to="/quality">Cancellation & Refund</Link></li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3 con-foo">
                <p className="fours">Get exclusive deals by signing up to our Newsletter.</p>
                <div className="col-md-6 form-group emai-btn">
           <input type="text" className="form-control messagesfoo" placeholder="Your Email *" required />
           <div className="foo-main-btn"><button className="btns-green-learnmoreanother">SignUp</button></div>
                                    </div>
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
