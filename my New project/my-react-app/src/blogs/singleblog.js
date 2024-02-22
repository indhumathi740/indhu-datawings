import '../css/DwBlog.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DwBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  var settings = {
    infinite: true,
    dots: false,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios.get("https://www.datawings.co.in/api/blogdata").then((res) => {
      setBlogs(res.data);

    });
  }, []);
  function dateSlice(id) {
    const rawDate = blogs[id].date;
    const blogDate = rawDate.slice(0, 10);
    return blogDate;
  }
  console.log(blogs[0])

  return (
    <div className='container'>
      <div className='row ro-con-bac'>
        <div className='col-md-3'></div>
      <div className='col-md-6'>
      {/* <div className='buttonge'><button className='btns-greens-third'>why choose us</button></div> */}

        <p className='maintitle-blo'>Main Blogs</p>

     
     <p className='details-blog-content'>Discover Valuable Insights on Fast & Reliable Internet in Our Blogs.</p>
     <div className='viewallblog text-center mb-2'><Link to={"/blog"}><button >View All Blogs</button></Link></div>
     </div>
      <div className='col-md-3'></div>
      </div>
       {/* <Slider {...settings}> */}
       <Slider {...settings}>
       {blogs.map((value, index) => (
                <div key={value.id} className="col-md-4 blog-one-boxes">
                  <div className="dw-blogs1">
                    <div className="dw-blogs1">
                      {/* <div className="blogDate">
                  13 <br/>
                  May
                </div> */}
                      <a className="links" href={"/mainblog/" + value.id}>
                        <img
                          className="dw-blogs1 "
                          src={"../uploads/"+ value.img}
                          title={value.title}
                          alt={value.title}
                        />
                        <div className="dw-blogs2">
                          <span>INSIGHT</span>
                        </div>
                      </a>
                    </div>
                    {/* <div className="blogDate1 ">

                                            {date(index)}
                                            {month(index)}
                                        </div> */}
                    <div className="blogContBox dw-blogs6">
                      {/* <p className="text-muted">{dateSlice(index)}</p> */}
                      <p className="dw-blogs7">
                       
                      </p>
                      <div className="dwblog-tit">
                        <Link
                          className=" blog-inn-conse"
                          to={"/mainblog/" + value.id}
                        >
                          <span
                            className="blog-main-contentsss"
                            href={"/mainblog/" + value.id}
                          >
                            {value.title}
                          </span>
                        </Link>
                        <br></br>
                      </div>
                      <div className="btn-blogs">
                        <a
                          className="btns-greens-third"
                          href={"/mainblog/" + value.id}
                        >
                          READ MORE
                        </a>
                      </div>

                      {/* Alternatively, you can use React Router's Link component:
                <Link to={`/blogs/${value.id}`}>READ MORE</Link> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
      {/* </Slider> */}
    </div>
  )
}
function stripHTMLTags(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText;
}
export default DwBlogs