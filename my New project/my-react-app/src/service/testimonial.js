import 'font-awesome/css/font-awesome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/service.css';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Servicetestimonial() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        
        <>
            <div className='testimonial-box swiper-slide swiper-slide-next'>
                <div className='container '>

                    <div className='row testimonial-service'>
                        <div className='col-md-3' ></div>
                        <div className='col-md-6 banner-thi-con'>
                            <div className=' contentsection' data-aos="fade-up" data-aos-duration="2000" >
                                <div className='button'><button className='btns-greens-third'>Testimonial</button></div>
                                <p className="maintitle-thi">What they say about us</p>
                                <p className='text-muted details-blog-content'>See what our satisfied customers have to say about their experiences with Datawings</p>

                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                    <div className='row Boxss'>
                    <Slider {...settings}>
                        <div className="servicebox col-lg-4">
                            <div className="serviceContent-isp">
                            <div className='des-blog'><i class="fa fa-user" style={{ color: "#9cc723" }}></i></div>

                                <p className="text-muted box-conin-serv">
                                    "It's very fast and helpful service.I love this so much.The best service I've ever got."              </p>
                                <p className='name-testi'>Kuppu Raj</p>
                                <p className='role-testi'>BUSINESS MANAGER</p>

                            </div>
                        </div>
                        <div className="servicebox col-lg-4">
                            <div className="serviceContent-isp">
                            <div className='des-blog'><i class="fa fa-user" style={{ color: "#9cc723" }}></i></div>

                                <p className="text-muted box-conin-serv">
                                    "I ever seen an fastest and lowest service charge network , friendly coustomer service."              </p>
                                <p className='name-testi'>Kavi Krish</p>
                                <p className='role-testi'>BUSINESS MANAGER</p>

                            </div>
                        </div>   
                        <div className="servicebox col-lg-4">
                            <div className="serviceContent-isp">
                            <div className='des-blog'><i class="fa fa-user" style={{ color: "#9cc723" }}></i></div>

                                <p className="text-muted box-conin-serv">
                                    "Good service provider in Coimbatore location, they provide uninterrupted broadband."              </p>
                                <p className='name-testi'>selvikkoc</p>
                                <p className='role-testi'>BUSINESS MANAGER</p>

                            </div>
                        </div>
                        <div className="servicebox col-lg-4">
                            <div className="serviceContent-isp">
                            <div className='des-blog'><i class="fa fa-user" style={{ color: "#9cc723" }}></i></div>

                                <p className="text-muted box-conin-serv">
                                    "I ever seen an fastest and lowest service charge network , friendly coustomer service."              </p>
                                <p className='name-testi'>Kavi Krish</p>
                                <p className='role-testi'>BUSINESS MANAGER</p>

                            </div>
                        </div>
                            </Slider>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Servicetestimonial;
