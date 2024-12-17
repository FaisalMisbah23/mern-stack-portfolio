import React from 'react';
import '../index.css';
const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='bg-[#ffffff] dark:bg-[#333333] p-2 rounded-[5px] w-fit mx-auto mt-10 mb-16 shadow-lg'>
    <form onSubmit={formSubmit} className='flex items-center'>
      <input
        type='text'
        placeholder='Search By Title'
        value={value}
        onChange={handleSearchKey}
        className='outline-none border-none bg-[#ffffff] dark:bg-[#333333]'
      />
      {value && <span onClick={clearSearch} className='pr-2 cursor-pointer'>X</span>}
      <button className='outline-non border-none py-[0.3rem] px-4 rounded-[5px] bg-[#9D9D9D] hover:bg-[#9ACD32]'>Go</button>
    </form>
  </div>
);
export default SearchBar;