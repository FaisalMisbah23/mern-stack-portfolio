import React, { useState, useEffect } from 'react';
import { blogList } from '../config/Api';
import Navbar from '../components/Navbar';
import EmptyList from '../components/EmptyList';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogList(100); // Adjust the limit as needed
        setBlogs(response);
        setFilteredBlogs(response);
      } catch (err) {
        setError('Failed to load blogs. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Search for blogs based on title
  const handleSearchResults = () => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setFilteredBlogs(filtered);
  };

  // Handle search form submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Clear search results and show all blogs
  const handleClearSearch = () => {
    setSearchKey('');
    setFilteredBlogs(blogs);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="h-screen w-full bg-white dark:bg-[#262626] text-red-500 flex items-center justify-center text-xl">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#262626] dark:text-white">
        <div className="container">
          {/* Page Header */}
          <Header />

          {/* Search Bar */}
          <SearchBar
            value={searchKey}
            clearSearch={handleClearSearch}
            formSubmit={handleSearchBar}
            handleSearchKey={(e) => setSearchKey(e.target.value)}
          />

          {/* Blog List or Empty View */}
          {blogs.length === 0 ? (
            <EmptyList />
          ) : filteredBlogs.length === 0 && searchKey ? (
            <EmptyList />
          ) : (
            <BlogList blogs={filteredBlogs.length > 0 ? filteredBlogs : blogs} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
