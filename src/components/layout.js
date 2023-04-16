export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
        {/* add footer */}
      </div>
    </>
  );
}
