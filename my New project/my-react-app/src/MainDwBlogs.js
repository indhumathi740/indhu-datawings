import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MainDwBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    axios.get("https://www.datawings.co.in/api/blogdata").then((res) => {
      // sorted by date
      const sortedBlogs = res.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
      setBlogs(sortedBlogs);
    });
  }, []);

  const totalItems = blogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const maxVisiblePages = 3; // Maximum visible page numbers
    const pages = [];

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i}>
          <button
            className={currentPage === i ? "active" : ""}
            onClick={() => handleClick(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      <div className="container main-blogs mt-5 mb-5">
        {/* Blog content... */}
        <div className="row">
            {currentItems.map((value, index) => (
                    <div key={value.id} className="col-md-4 blog-one-boxess">
                    <div className="dw-blogs1 dw-blog112">
                        <div className="dw-blogs1 dw-blog2 check">
                        <a className="links" href={"/mainblog/" + value.id + "/" + value.title?.trim().replace("/","-").replace(/\s/g, '-').toLowerCase()}>
                            <img
                            className="dw-blogs1"
                            src={"../uploads/"+ value.img}
                            title={value.title}
                            alt={value.title}
                            />
                            <div className="dw-blogs2">
                            <span>INSIGHT</span> 
                            </div>
                        </a>
                        </div>
                        <div className="blogContBox dw-blogs6">
                        <p className="dw-blogs7">
                        
                        </p>
                        <div className="dwblog-tit">
                            <Link
                            className=" blog-inn-conse"
                            to={"/mainblog/" + value.id + "/" + value.title?.trim().replace("/","-").replace(/\s/g, '-').toLowerCase()}
                            >
                            <span
                                className="blog-main-contentsss"
                                href={"/mainblog/" + value.id + "/" + value.title?.trim().replace("/","-").replace(/\s/g, '-').toLowerCase()}
                            >
                                {value.title}
                            </span>
                            </Link>
                            <br></br>
                        </div>
                        <div className="btn-blogs">
                            <a
                            className="btns-greens-third"
                            href={"/mainblog/" + value.id + "/" + value.title?.trim().replace("/","-").replace(/\s/g, '-').toLowerCase()}
                            >
                            READ MORE
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
            ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <ul className="pagination">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {renderPageNumbers()}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default MainDwBlogs;
