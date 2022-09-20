import Logo from "../../assets/lion.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-black py-10">
        <div className="container text-white">
          <div className="grid items-start lg:grid-cols-4 md:grid-cols-2 gap-20">
            <div className="flex gap-2 items-center">
              <img
                style={{ filter: "invert(1)" }}
                className="w-14"
                src={Logo}
                alt="Logo"
              />
              <div className="flex flex-col text-white">
                <h2
                  style={{ lineHeight: "1.1" }}
                  className="font-bold text-3xl"
                >
                  KingsDen
                </h2>
                <p className="text-sm">Men's Clothing Brand</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-2xl">Useful Links</h3>
              <ul className="flex flex-col">
                <li>
                  <NavLink className="footer-link">All Products</NavLink>
                </li>
                <li>
                  <NavLink className="footer-link">Blog</NavLink>
                </li>
                <li>
                  <NavLink className="footer-link">About the Company</NavLink>
                </li>
                <li>
                  <NavLink className="footer-link">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex lg:col-span-2 flex-col gap-3">
              <h3 className="font-semibold text-2xl">Newsletter</h3>
              <div className="flex flex-col gap-2">
                <p>Subscribe to our Newsletter for latest Updates</p>
                <input
                  type="text"
                  className="p-3 text-black"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="text-black font-bold block py-4 underline-offset-2 underline text-center"
      >
        Developed by Ali Hassan
      </a>
    </>
  );
}
