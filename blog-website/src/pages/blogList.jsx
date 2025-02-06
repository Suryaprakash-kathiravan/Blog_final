import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog details from local storage
    const storedBlogs = JSON.parse(localStorage.getItem('blogDetails')) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    localStorage.setItem('blogDetails', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  const handleEdit = (blog, index) => {
    navigate(`/edit/${index}`, { state: { blog, index } });
  };


  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Blog List</h1>
      <div className="grid gap-5">
        {blogs.length ? (
          blogs.map((blog, index) => (
            
              <div key={index} className="p-5 border rounded shadow-lg">
              <h2 className="text-2xl font-bold mb-2 truncate">{blog.title.length > 20 ? `${blog.title.substring(0, 30)}...` : blog.title}</h2>
              <p className="mb-2 truncate">{blog.content.length > 10 ? `${blog.content.substring(0, 10)}...` : blog.content}</p>
              <p className="italic mb-2 truncate">- by {blog.author.length > 10 ? `${blog.author.substring(0, 10)}...` : blog.author}</p>
              {blog.imageUrl !== 'No Image URL provided' && (
                <div className="flex justify-center mb-2">
                  <Link key={index} to={`/blog/${index}`} state={{ blog }} className="no-underline"><img src={blog.imageUrl} alt={blog.title} className="h-100 w-150 rounded shadow" /></Link>
                </div>
              )}
              <div className="flex justify-end space-x-3">
                <button
                  className="bg-yellow-500 text-white p-2 rounded"
                  onClick={() => handleEdit(blog, index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
            
          ))
        ) : (
          <p className="text-center text-gray-500">No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
