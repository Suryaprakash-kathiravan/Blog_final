import { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const Create = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (location.state && location.state.blog) {
      const blog = location.state.blog;
      setTitle(blog.title);
      setContent(blog.content);
      setAuthor(blog.author);
      setImageUrl(blog.imageUrl);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogDetails = { title, content, author, imageUrl: imageUrl || 'No Image URL provided' };

    const storedBlogs = JSON.parse(localStorage.getItem('blogDetails')) || [];
    if (id !== undefined) {
      storedBlogs[id] = blogDetails;
    } else {
      storedBlogs.push(blogDetails);
    }

    localStorage.setItem('blogDetails', JSON.stringify(storedBlogs));
    navigate('/blogList');

    setTitle('');
    setContent('');
    setAuthor('');
    setImageUrl('');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="content">Content</label>
          <textarea 
            id="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            className="w-full p-2 border rounded h-32" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="imageUrl">Image URL (optional)</label>
          <input 
            type="text" 
            id="imageUrl" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            className="w-full p-2 border rounded" 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
}

export default Create;
