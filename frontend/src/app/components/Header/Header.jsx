import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  HiHome,
  HiCog,
  HiUserGroup,
  HiDocumentText,
  HiShoppingCart,
} from "react-icons/hi";
import { UserContext } from "../../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-blue-900 sm:w-60 min-h-screen">
      <nav className="flex sm:flex-col sm:justify-start">
        <h2 className="font-semibold text-white p-5 text-xl">
          Hi, {user.name}
        </h2>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink to={link.path} className="nav-link">
                  {link.icon} {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

const links = [
  {
    name: "Home",
    path: "/",
    icon: <HiHome />,
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
