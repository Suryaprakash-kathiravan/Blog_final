import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Navbar from './pages/Navbar';
import image from './image.png';
import Create from './pages/Create';
import About from './pages/About';
import BlogList from './pages/blogList';
import BlogPage from './pages/BlogPage'; // Import the BlogPage component
import './App.css';

const Home = () => (
  <div className="relative">
    <div className="flex justify-center items-center relative">
      <img src={image} alt="image1" className="w-3/4 shadow-lg rounded-lg" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5 rounded-lg"
           style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }}>
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to MyBlog</h1>
        <p className="text-xl mb-4 drop-shadow-md">Discover amazing content and join our community.</p>
        <Link to={`/blogList`}><button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">Get Started</button></Link>
      </div>
    </div>
  </div>
);



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Create />} />
        <Route path="/About" element={<About />} />
        <Route path="/blogList" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/edit/:id" element={<Create />} /> 
      </Routes>
    </Router>
  );
}

export default App;
