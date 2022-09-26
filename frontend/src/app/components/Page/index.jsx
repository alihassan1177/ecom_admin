export function PageTitle({ children }) {
  return (
    <header className="h-14 px-4 flex items-center w-full border-b">
      <h2 className="font-bold text-2xl text-blue-900">{children}</h2>
    </header>
  );
}

export function Loader() {
  return <div className="loader"></div>;
}
