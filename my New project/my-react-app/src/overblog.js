import React from 'react';
import './css/ispservice.css';
import Bannerblog from './blogs/blogbanner';
import { useEffect, useState } from "react";
import axios from "axios";

// ss
function OverBlogs() {
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
        <>
        <Bannerblog />
        <div className=' container'>
        {blogs.map((value, index)=>(

            <div className='overallpique'>
                <div className='innerpiques'>
                    <img src={"../uploads/"+ value.img} className='image-fluid dataimg' />
                    <div className='valuamount'>
                    <p className='blog-inn-cons'>{dateSlice(index)}</p>

                        <p className=' blog-inn-cons'>{value.title}</p>
                        
                        <p className='text-muted details-blog-contents'>     {stripHTMLTags(value.content)}  </p>
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
                               ))}

        </div>
        </>
    )
}
function stripHTMLTags(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText;
  }
export default OverBlogs;