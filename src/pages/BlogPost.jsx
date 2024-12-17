import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EmptyList from '../components/EmptyList';
import '../index.css';
import { blog } from '../config/Api';
import Chip from '../components/Chip';
import Loader from '../components/Loader';

const Blog = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      // Fetch content using the slug in the URL
      try {
        const fetchedContent = await blog(id);
        setContent(fetchedContent);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError('Failed to fetch the blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  if (loading) {
    // return <div className="h-screen w-full bg-white text-[#262626] dark:bg-[#262626] dark:text-white flex items-center justify-center text-xl">Loading...</div>;
    return <Loader/>
  }

  if (error) {
    return <div className="h-screen w-full  bg-white dark:bg-[#262626] text-red-500 flex items-center justify-center text-xl">Error: {error.message}</div>;
  }

  if (!content) return <EmptyList />;

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#262626] dark:text-white">
        <div className="container">
          <Link
            className="text-[0.8rem] no-underline dark:text-gray-300 text-[#333333] font-medium mb-8 block mt-16"
            to="/blogs"
          >
            <span>&#8592;</span> Go Back
          </Link>
          <div className="max-w-[700px] mx-auto">
            <header className="text-center">
              <p className="text-[0.8rem] dark:text-gray-300 text-[#333333] font-medium">
                Published {content.created.slice(0, 10)}
              </p>
              <h1>{content.title}</h1>
              {content.tags?.length > 0 && (
                <div className="flex justify-center m-4">
                  {content.tags.map((tag) => (
                    <div key={tag.id} className="mr-2">
                      {/* Chip Component for tags */}
                      <Chip label={tag.name} />
                    </div>
                  ))}
                </div>
              )}
            </header>
            {content.featured_image && (
              <img src={content.featured_image} alt="cover" className="w-full" />
            )}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: content.body }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;