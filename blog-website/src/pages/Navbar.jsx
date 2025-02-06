import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyles = (path) => (
    `hover:bg-white hover:text-black hover:bg-opacity-20 rounded p-2 transition duration-300 ${location.pathname === path ? 'bg-white bg-opacity-20 text-black' : 'text-white'}`
  );

  return (
    <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-3 shadow-md">
      <nav className="flex justify-center items-center">
        <ul className="flex gap-5 list-none p-0 m-0">
          <li className="font-bold">
            <Link to="/" className={linkStyles('/')}>Home</Link>
          </li>
          <li className="font-bold">
            <Link to="/new" className={linkStyles('/new')}>New</Link>
          </li>
          <li className="font-bold">
            <Link to="/About" className={linkStyles('/About')}>About</Link>
          </li>
          <li className="font-bold">
            <Link to="/blogList" className={linkStyles('/blogList')}>Blogs</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
