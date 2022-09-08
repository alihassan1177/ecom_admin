import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-700 min-h-screen py-3">
      <nav className="flex sm:flex-col sm:justify-start gap-4">
        <h2 className="font-bold">Dashboard</h2>
        <ul>
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
            <NavLink to="/posts" className="nav-link">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" className="nav-link">
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="nav-link">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
