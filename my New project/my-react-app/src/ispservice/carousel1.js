// carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/ispservice.css';


function Carousel1() {
    const partnerLogos = [
        // "/images/partner/Asset 33.svg",
        "/images/partner/Asset 32.svg",
        "/images/partner/Asset 34.svg",
        "/images/partner/Asset 30.svg",
        "/images/partner/Asset 26.svg",
        "/images/partner/Asset 31.svg",
        "/images/partner/Asset 27.svg",
        // "/images/partner/AMD.svg",
        // "/images/partner/ARUBA.svg",
        // "/images/partner/BENQ.svg",
        // "/images/partner/CAMBIUM.svg",
        // "/images/partner/CISCO.svg",
        // "/images/partner/CITRIX.svg",
        // "/images/partner/COMMSCOPE.svg",
        // "/images/partner/D LINK.svg",
        // "/images/partner/DAHUA.svg",
        // "/images/partner/DELL EMC.svg",
        // "/images/partner/DRAYTEK.svg",
        // "/images/partner/EXTREME.svg",
        // "/images/partner/FORTINET.svg",
        // "/images/partner/HIKVISION.svg",
        // "/images/partner/HOLKOI.svg",
        // "/images/partner/HP ENTERPRISE.svg",
        // "/images/partner/IBM.svg",
        // "/images/partner/INTEL.svg",
        // "/images/partner/LENOVA.svg",
        // "/images/partner/N COMPUTING.svg",
        // "/images/partner/NETFOX.svg",
        // "/images/partner/OPTOMA.svg",
        // "/images/partner/POSIFLEX.svg",
        // "/images/partner/RUCKUS.svg",
        // "/images/partner/UBIQUTI.svg",
        // "/images/partner/VMWARE.svg",
        // "/images/partner/VYAPAR.svg"
    ];

    const logos = partnerLogos.map((item, index) => (
        <div key={index} className="logo-box">
            <img src={item} alt={`Logo ${index}`}
             style={{color:"red",backgroundColor:""}} title="partners"/>
        </div>
    ));

    const settings = {
        // Configure your slick slider settings here
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set the autoplay speed in milliseconds (3 seconds in this case)
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                }
              }
          ]
    };

    return (
        <Slider {...settings}>
            {logos}
        </Slider>
    );
}

export default Carousel1;
