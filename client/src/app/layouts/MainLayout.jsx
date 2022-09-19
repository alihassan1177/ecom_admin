import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function ProductsLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
  );
}
