import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import LoginButton from "./LoginButton";
import { socialMedia } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-5 justify-between items-center navbar">
      {/* ============== Logo ====================== */}
      <img src={logo} alt="eurekae" className="w-[240px] h-[200px] mr-10" />

      {/* ================= Social Media ==================== */}
      <div className="list-none md:flex hidden justify-center items-center flex-1">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[19px] h-[19px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-5" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

      {/* ================= Links ==================== */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className="mr-1.5">
            <NavLink
              to={`/${nav.id}`}
              className={({ isActive }) =>
                `font-poppins font-normal border rounded-[10px] py-1 px-2 cursor-pointer text-[16px] ${
                  isActive ? "text-white bg-black-gradient-2" : "text-dimWhite"
                }`
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
        <div className='ml-0'>
          <LoginButton/>
        </div>  
      </ul>

      {/* ================================ Hamburguer Setup ============================== */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="mb-4">
                <NavLink
                  to={`/${nav.id}`}
                  className={({ isActive }) =>
                    `font-poppins font-medium cursor-pointer text-[16px] ${
                      isActive ? "text-white bg-blue-500" : "text-dimWhite"
                    }`
                  }
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
            <div className='mt-5'>
              <LoginButton/>
            </div>
            {/* ================= Social Media (Mobile) ==================== */}
            <div className="mt-5 flex justify-center items-center flex-wrap">
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[16px] h-[16px] object-contain cursor-pointer ${
                    index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
                  }`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </ul>
        </div>        
      </div>
    </nav>
  );
};

export default Navbar;
