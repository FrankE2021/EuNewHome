import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { socialMedia } from "../constants";
import { FaShoppingCart } from "react-icons/fa"; // Importa el icono del carrito de compras
import { useAuth } from "../contexts/AuthContexts"; // Importa el hook useAuth

const Navbar = () => {
  const { usuario, cerrarSesion } = useAuth(); // Obtiene el usuario y la función de cierre de sesión del contexto
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-5 justify-between items-center navbar">
      {/* ============== Logo ====================== */}
      <NavLink to="/">
        <img
          src={logo}
          alt="eurekae"
          className="w-[240px] h-[200px] mr-10 cursor-pointer"
        />
      </NavLink>

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
        {navLinks.map((nav) => (
          <li key={nav.id} className="mr-1.5 hover-bounce active-click">
            <NavLink
              to={`/${nav.id}`}
              className={({ isActive }) =>
                `font-poppins font-normal border rounded-[10px] py-1 px-2 cursor-pointer text-[16px] ${
                  isActive ? "text-white bg-gray-700" : "text-dimWhite"
                }`
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `border px-2 py-1 rounded-[12px] hover-bounce active-click ${
              isActive ? "text-white bg-gray-700" : "text-dimWhite"
            }`
          }
        >
          <FaShoppingCart className="text-[24px] text-white cursor-pointer" />
        </NavLink>

        <div className="flex items-center">
          {usuario ? (
            <button
              onClick={cerrarSesion}
              className={`py-1 px-2 ml-2 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none hover-bounce active-click`}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={`py-1 px-2 ml-2 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none hover-bounce active-click`}
            >
              Login
            </NavLink>
          )}
        </div>
      </ul>

      {/* ================================ Hamburguer y Carrito ============================== */}
      <div className="flex items-center">
        <div className="sm:hidden flex items-center">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `mr-3 border px-2 py-1 rounded-[12px] ${
                isActive ? "text-white bg-gray-700" : "text-dimWhite"
              }`
            }
          >
            <FaShoppingCart className="text-[24px] text-white cursor-pointer" />
          </NavLink>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav) => (
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
          <div className="mt-4">
            {usuario ? (
              <button
                onClick={cerrarSesion}
                className={`py-1 px-2 ml-2 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none hover-bounce active-click`}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className={`py-1 px-2 ml-2 font-poppins font-medium text-[18px] text-primary bg-gold-gradient rounded-[10px] outline-none hover-bounce active-click`}
              >
                Login
              </NavLink>
            )}
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
    </nav>
  );
};

export default Navbar;
