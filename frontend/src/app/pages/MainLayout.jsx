import Header from "../components/Header/Header";

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      <Header />
      <main className="w-full overflow-y-scroll h-screen">{children}</main>
    </div>
  );
}
