import '../css/DwBlog.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DwBlogs = () => {
    const { id } = useParams();
  const [blogs, setBlogs] = useState({
    id: "",
    date: "",
    title: "",
    category: "",
    quote: "",
    metades: "",
    metakey: "",
    content: "",
    img: "",
    status: "Active",
  });
  useEffect(() => {
    axios
      .get("https://infygain.in/api/editblog/" + id)
      .then((res) => {
        const blogData = res.data.result[0];
        setBlogs({
          ...blogs,
          id: blogData.id,
          date: blogData.date,
          title: blogData.title,
          category: blogData.category,
          quote: blogData.quote,
          content: blogData.content,
          metades: blogData.metades,
          metakey: blogData.metakey,
          img: blogData.img,
          status: blogData.status,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const rawDate = blogs.date;
        const blogDate = rawDate.slice(0, 10);
        
  return (
    <div className='container'>
        <div className=' dw-blogs'>
        
            <div className='dw-blogs1'>
                <img src='https://kitnew.moxcreative.com/winnet/wp-content/uploads/sites/25/2022/12/satellite-dishes.jpg' alt='' />
                <div className='dw-blogs2'>
                    <span>Insight</span>
                </div>
                <div className='dw-bg'>
                    {/* hiii */}
                </div>
                <div className='dw-blogs3'>
                    <span className='dw-blog-title'>How Customers Use Satellite Internet</span>
                    <p>
                    Selecting the ideal home internet plan is about understanding your needs, matching your online activities to the right speed, and exploring provider options. Make the right choice for a seamless online experience.                    </p>
                    <span className='dw-blog-date'>December 8, 2022</span>
                </div>
            </div>

            <div className='dw-blogs1'>
                <img src='https://kitnew.moxcreative.com/winnet/wp-content/uploads/sites/25/2022/12/satellite-dishes.jpg' alt='' />
                <div className='dw-blogs2'>
                    <span>Insight</span>
                </div>
                <div className='dw-bg'>
                    {/* hiii */}
                </div>
                <div className='dw-blogs3'>
                    <span className='dw-blog-title'>How Customers Use Satellite Internet</span>
                    <p>
                    Selecting the ideal home internet plan is about understanding your needs, matching your online activities to the right speed, and exploring provider options. Make the right choice for a seamless online experience.                    </p>
                    <span className='dw-blog-date'>December 8, 2022</span>
                </div>
            </div>

            <div className='dw-blogs1'>
                <img src='https://kitnew.moxcreative.com/winnet/wp-content/uploads/sites/25/2022/12/satellite-dishes.jpg' alt='' />
                <div className='dw-blogs2'>
                    <span>Insight</span>
                </div>
                <div className='dw-bg'>
                    {/* hiii */}
                </div>
                <div className='dw-blogs3'>
                    <span className='dw-blog-title'>How Customers Use Satellite Internet</span>
                    <p>
                    Selecting the ideal home internet plan is about understanding your needs, matching your online activities to the right speed, and exploring provider options. Make the right choice for a seamless online experience.                    </p>
                    <span className='dw-blog-date'>December 8, 2022</span>
                </div>
            </div>
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