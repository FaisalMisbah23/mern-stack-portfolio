import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import '../index.css';
const BlogItem = ({ blog }) => {
  return (
    <div className='flex flex-col' key={blog.title}>
              <Link className='no-underline' to={`/blogs/${blog.slug}`}>
      <img className='w-full h-[250px] object-cover rounded-[20px] mb-2' src={blog.featured_image} alt='cover' />
      </Link>
      <Chip label={blog.tags[0].name} />
      <Link className='no-underline' to={`/blogs/${blog.slug}`}>
      <h3 className='mt-2 mb-4 flex-[1]'>{blog.title}</h3>
      </Link>
      <p className='relative max-h-[50px] overflow-hidden pr-[0.6rem] text-[0.8rem]'>{blog.summary?.slice(0,75)}...</p>
      <footer className='flex items-center mt-4 justify-between'>
        <div className='flex items-center'>
          <img src={blog.author.profile_image} alt='avatar' className='w-10 h-10 rounded-[50%] object-cover mr-2' />
          <div>
            <h6>{blog.author.first_name + " " + blog.author.last_name}</h6>
            <p className='text-[0.6rem] text-[#a9a9a9] font-semibold'>{blog.created_at}</p>
          </div>
        </div>
        <Link className='text-inherit no-underline text-xl hover:text-[#9ACD32] hover:-rotate-45 duration-300' to={`/blogs/${blog.slug}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};
export default BlogItem;