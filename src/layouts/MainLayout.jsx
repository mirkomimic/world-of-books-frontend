import Header from "@/components/custom/Header";
import NavMenu from "@/components/custom/NavMenu";
import { BackgroundGradientAnimation } from "@/components/ui/aceternity/BackgroundGradientAnimation";

const MainLayout = ({ children, footer }) => {
  return (
    <>
      {/* <div className="fixed -z-10">
        <BackgroundGradientAnimation
          interactive={true}
          gradientBackgroundStart="rgb(17, 24, 39)"
          gradientBackgroundEnd="rgb(17, 24, 39)"
          firstColor=""
          secondColor="89, 92, 90"
          thirdColor="89, 92, 90"
          fourthColor=""
          fifthColor=""
          pointerColor=""
        >
          <div className="h-full w-full" />
        </BackgroundGradientAnimation>
      </div> */}

      <Header nav={<NavMenu />} />
      <main className="min-h-screen min-w-full">{children}</main>
      <footer>{footer}</footer>
    </>
  );
};

export default MainLayout;
