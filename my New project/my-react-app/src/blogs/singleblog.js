import '../css/DwBlog.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DwBlogs = () => {
  const [blogs, setBlogs] = useState([]);

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
     </div>
      <div className='col-md-3'></div>
      </div>
      <div className=' dw-blogs'>
        {blogs.map((value, index) => (
          <div className='dw-blogs1'>

            <img src={"../uploads/" + value.img} alt='blogs'title='blogs' />
            <div className='dw-blogs2'>
              <span>Insight</span>
            </div>
            <div className='dw-bg'>
              {/* hiii */}
            </div>
            <div className='dw-blogs3'>
              <Link className=' blog-inn-conse' to={"/mainblog/"+value.id}><span className=' blog-inn-conse '>{value.title}</span></Link>
              <p className='blog-main-contentss'>
                {stripHTMLTags(value.content)}  </p>
              <span className='dw-blog-date'>{dateSlice(index)}</span>
            </div>
          </div>
        ))}



      </div>
    </div>
  )
}
function stripHTMLTags(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText;
}
export default DwBlogs