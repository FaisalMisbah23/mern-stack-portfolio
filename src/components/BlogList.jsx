import React from 'react';
import BlogItem from './BlogItem';
import '../index.css';
import { useLocation,Link } from 'react-router-dom';
import { HiArrowNarrowUp } from 'react-icons/hi';

const BlogList = ({ blogs }) => {
  const location = useLocation();

  const isBlogsPage = location.pathname.startsWith("/blogs");
  return (
    <>
      {isBlogsPage ? (<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>) : (<div name="blogs" className="w-full h-full text-white bg-[#262626] py-12 sm:py-[4.5rem]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col items-center justify-center w-full h-full">
          <div className="pb-8 w-full flex justify-center items-center flex-col">
            <p className="text-5xl font-bold inline">Blogs</p>
            <p className="text-center py-6 text-2xl">Sharing what I learn, check out some of my recent blog posts.</p>
          </div>
          {/* Container */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
          <div>
          <Link
              to="/blogs"
              smooth
              duration={500}
              className="text-xl group font-medium text-white w-fit px-7 py-4 mt-16 flex items-center rounded-md bg-[#9D9D9D] hover:bg-[#9ACD32] cursor-pointer"
            >
              Explore All Blogs
              <span className="group-hover:rotate-45 duration-300">
                <HiArrowNarrowUp size={25} className="ml-3" />
              </span>
            </Link>   
            </div>
                 </div>
      </div>)}
    </>
  );
};

export default BlogList;
