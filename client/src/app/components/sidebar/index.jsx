import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden w-80 shadow-xl md:block py-14 ">
      <h1 className="font-bold text-2xl px-6 mb-4">Categories</h1>
      <div className="flex flex-col">
        <NavLink className="sidebar-link" to="/products">
          All Products
        </NavLink>
        <NavLink className="sidebar-link" to="/products/jackets">
          Leather Jackets
        </NavLink>
        <NavLink className="sidebar-link" to="/products/boots">
          Leather Boots
        </NavLink>
      </div>
    </aside>
  );
}
