import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="fixed w-screen h-[80px] flex justify-between items-center px-4 bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="/">
          Newsaly
        </a>
      </div>

      <ul className="hidden md:flex justify-between items-center px-4 mx-auto font-semibold font-heading space-x-12 ">
        <li>
          <a className="hover:text-gray-400" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="/">
            Category
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="/">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400" href="/">
            Contact Us
          </a>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="category"
            smooth={true}
            duration={500}
          >
            Category
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
