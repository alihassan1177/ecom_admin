import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiCog,
  HiUserGroup,
  HiDocumentText,
  HiShoppingCart,
  HiViewGrid,
} from "react-icons/hi";
import { UserContext } from "../../context/UserContext";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <HiViewGrid />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <HiShoppingCart />,
  },
  {
    name: "Posts",
    path: "/posts",
    icon: <HiDocumentText />,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: <HiUserGroup />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <HiCog />,
  },
];

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <header
      className={`z-10 bg-blue-900 ${
        !sidebar ? "w-20" : "w-60 sm:relative fixed top-0 bottom-0"
      }  transition-all min-h-screen`}
    >
      <nav className="flex flex-col justify-start">
        <button
          onClick={() => setSidebar(!sidebar)}
          className="py-5 flex flex-col gap-1 items-center transition-all"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={`transition-all group relative nav-link ${
                    !sidebar ? "px-6" : "pl-5 pr-10"
                  }`}
                >
                  <span
                    className={`transition-all ${!sidebar ? "text-3xl" : ""}`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`transition-all ${
                      !sidebar ? "hidden" : "inline"
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`${
                      !sidebar ? "group-hover:scale-100" : ""
                    } absolute z-10 transition-all rounded-sm scale-0  bg-inherit p-3 text-base font-normal translate-x-14`}
                  >
                    {link.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
