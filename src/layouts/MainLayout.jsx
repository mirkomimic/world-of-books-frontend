import Header from "@/components/custom/Header";
import NavMenu from "@/components/custom/NavMenu";

const MainLayout = ({ children, footer }) => {
  return (
    <>
      <Header nav={<NavMenu />} />
      <main className="min-h-screen">
        <div className="container mx-auto">{children}</div>
      </main>
      <footer>{footer}</footer>
    </>
  );
};

export default MainLayout;
