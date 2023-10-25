import '../css/DwBlog.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DwBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://infygain.in/api/blogdata").then((res) => {
      setBlogs(res.data);
      
    });
  }, []);
  function dateSlice(id){
    const rawDate = blogs[id].date;
    const blogDate = rawDate.slice(0, 10);
    return blogDate;
}
console.log(blogs[0])
        
  return (
    <div className='container'>
        <div className=' dw-blogs'>
        {blogs.map((value, index)=>(

            <div className='dw-blogs1'>
              
                <img src={"../uploads/"+ value.img} alt='' />
                <div className='dw-blogs2'>
                    <span>Insight</span>
                </div>
                <div className='dw-bg'>
                    {/* hiii */}
                </div>
                <div className='dw-blogs3'>
                    <Link className=' blog-inn-conse' to="/overblog"><span className=' blog-inn-conse '>{value.title}</span></Link>
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