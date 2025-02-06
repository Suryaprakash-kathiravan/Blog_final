// // BlogPage.jsx
// import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BlogPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const blog = location.state.blog;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold mb-5">{blog.title}</h1>
      <p className="text-sm text-gray-600 mb-4">By {blog.author}</p>
      {blog.imageUrl && blog.imageUrl !== 'No Image URL provided' && (
        <img src={blog.imageUrl} alt="Blog" className="w-full h-full object-cover mb-4" />
      )}
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;
