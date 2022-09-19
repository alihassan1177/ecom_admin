import { NavLink } from "react-router-dom";
import Logo from "../../assets/lion.png";
import { HiShoppingCart, HiUser, HiX, HiMenu, HiSearch } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="shadow-lg">
      <nav className="flex items-center container justify-between lg:relative gap-20">
        <NavLink className="py-3 block" to="/">
          <div className="flex gap-2 items-center">
            <img className="w-14" src={Logo} alt="Logo" />
            <div className="hidden flex-col md:flex text-black">
              <h2 style={{ lineHeight: "1.1" }} className="font-bold text-3xl">
                KingsDen
              </h2>
              <p className="text-sm">Men's Clothing Brand</p>
            </div>
          </div>
        </NavLink>
        <ul
          className={`${
            !menu ? "translate-x-full shadow-none" : "translate-x-0"
          } flex flex-col lg:w-auto z-20 lg:z-0 lg:justify-center w-60 lg:bg-transparent bg-white lg:flex-row lg:shadow-none items-center fixed lg:absolute bottom-0 shadow-2xl right-0 lg:left-1/2 top-0 lg:top-1/2 lg:-translate-x-1/2 transition-all lg:-translate-y-1/2`}
        >
          <li className="lg:hidden w-full text-end">
            <button onClick={() => setMenu(false)} className="p-3 text-3xl">
              <HiX />
            </button>
          </li>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-link">
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>

        <ul className="flex items-center gap-6 w-full justify-end">
          <SearchBar search={search} />
          <button
            onClick={() => setSearch(!search)}
            className="text-3xl text-gray-600 hover:text-gray-900"
          >
            {search ? (
              <HiX className="md:relative absolute z-20 md:top-0 md:right-0 right-3 top-5" />
            ) : (
              <HiSearch />
            )}
          </button>
          <li>
            <NavLink className="text-3xl text-gray-600 hover:text-gray-900">
              <HiShoppingCart />
            </NavLink>
          </li>
          <li>
            <NavLink className="text-3xl text-gray-600 hover:text-gray-900">
              <HiUser />
            </NavLink>
          </li>
          <button
            onClick={() => setMenu(true)}
            className="text-3xl lg:hidden text-gray-600 hover:text-gray-900"
          >
            <HiMenu />
          </button>
        </ul>
      </nav>
    </header>
  );
}

function SearchBar({ search }) {
  return (
    <input
      type="search"
      placeholder="Search"
      className={`${
        search
          ? "md:border w-full border-black focus:outline-none md:p-3 p-6 md:relative absolute top-0 bottom-0 right-0 left-0"
          : "border-none p-0 w-0"
      }  transition-all  z-10`}
    />
  );
}
