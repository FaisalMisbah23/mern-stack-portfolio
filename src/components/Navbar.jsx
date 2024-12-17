import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Handle mobile menu toggle
  const handleClick = () => setNav(!nav);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Retrieve theme from localStorage on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Check if the current path is /blogs or starts with /blogs/
  const isBlogsPage = location.pathname.startsWith("/blogs");
  return (
    <>
    {!isBlogsPage ? (
    <div className="fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#262626]  text-gray-300">
      <div>
        <h1 className="font-thin text-2xl italic font-serif">FM</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li> <li>
          <Link to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#262626]  flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li> <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="blogs" smooth={true} duration={500}>
            Blogs
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden min-[1200px]:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/faisalmisbah"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/FaisalMisbah23"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:faisalmisbah23@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/https://drive.google.com/file/d/11cqownKrrnBE9-5H0ul1lIRl0Np1eTsY/view?usp=drive_link"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    ):(<div className="fixed z-10 w-full h-[80px] flex justify-between sm:justify-around items-center px-4 bg-white dark:bg-[#262626] text-gray-300">
    <div>
      <h1 className="font-thin text-2xl italic font-serif dark:text-gray-300 text-[#333333]">FM</h1>
    </div>



    {/* Mobile Menu */}
    <ul>
      <li className="py-6">
        <button
          onClick={toggleDarkMode}
          className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"
        >
          {darkMode ? <IoSunny size={24} /> : <IoMoon size={24} />}
        </button>
      </li>
    </ul>

  </div>)}
    </>
  );
};

export default Navbar;
