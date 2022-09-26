import Header from "../components/Header/Header";

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      <Header />
      <main className="w-full">{children}</main>
    </div>
  );
}
