import Header from "../../components/Header/Header";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex flex-col sm:flex-row">
      <Header />
      {children}
    </main>
  );
}
