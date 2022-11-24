import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="fixed w-screen h-[80px] flex justify-between items-center px-4 bg-gray-900 text-white">
      <div className="px-5 xl:px-12 py-6 flex items-center">
        <Link className="text-3xl font-bold font-heading" to="/">
          Newsaly
        </Link>
      </div>

      <ul className="hidden md:flex justify-between items-center px-4 font-semibold font-heading space-x-12 ">
        <li>
          <Link className="hover:text-purple-200" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="hover:text-purple-200" to="/business">
            Business
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-200" to="/entertainment">
            Entertainment
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-200" to="/general">
            General
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-200" to="/health">
            Health
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-200" to="/science">
            Science
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-200" to="/technology">
            Technology
          </Link>
        </li>

        <li>
          <Link className="hover:text-purple-200" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-200" to="/">
            Contact Us
          </Link>
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
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Business
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Entertainment
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            General
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Health
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Science
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="py-6 text-4xl"
          >
            Technology
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
