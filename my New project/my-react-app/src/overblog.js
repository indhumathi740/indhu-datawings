import React from 'react';
import './css/ispservice.css';
import Bannerblog from './blogs/blogbanner';
import { useEffect, useState } from "react";
import axios from "axios";
import Header from './common/header';
import Footer from './common/footer';
import { useNavigate, useParams } from "react-router-dom";

// ss
function OverBlogs() {
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
        console.log(res)
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
          console.log(blogs.content)
    return (
        <>
        <Header />
        <Bannerblog />
        <div className=' container'>

            <div className='overallpique'>
                <div className='innerpiques'>
                    <img src={"../uploads/"+ blogs.img} className='image-fluid dataimg'alt='blogs'title='blogs' />
                    <div className='valuamount'>
                    <p className='blog-inn-cons'>{blogDate}</p>

                        <p className=' blog-inn-cons'>  {blogs.title}</p>
                        
                        <p className='text-muted details-blog-contents'>    {stripHTMLTags(blogs.content)}  </p>
                    </div>
                    {/* <div className='buttongroupin'>
                    <div className='buttonque'><img src="/images/facebook.png" className='blogmail image-fluid'></img>
                    <p className='lettering'>Facebook</p></div>
                    <div className='buttonque'><img src="/images/twitter.png" className='blogtwitter image-fluid'></img><p className='lettering'>Twitter</p></div>
                    <div className='buttonque'><img src="/images/mailing.png" className='blogmails image-fluid'></img><p className='lettering'>Email</p></div>
                    <div className='buttonque'><img src="/images/icons8-printer-26.png" className='blogicons image-fluid'></img><p className='lettering'>Print</p></div>
                    </div> */}
                </div>
            </div>
                            

        </div>
        <Footer />
        </>
    )
}
function stripHTMLTags(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText;
  }
export default OverBlogs;