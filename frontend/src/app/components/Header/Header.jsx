import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-700 min-h-screen py-3">
      <nav className="flex sm:flex-col sm:justify-start gap-4">
        <h2 className="font-bold">Dashboard</h2>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink to={link.path} className="nav-link">
                  {link.name}
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
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Customers",
    path: "/customers",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];
