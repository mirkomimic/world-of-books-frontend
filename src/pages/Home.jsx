import { AnimationContextProvider } from "@/context/AnimationContext";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/sections/HeroSection";
import HorizontalScrollSection from "@/sections/HorizontalScrollSection";
import StaggeredGridSection from "@/sections/StaggeredGridSection";

const Home = () => {
  return (
    <MainLayout>
      <AnimationContextProvider>
        <HeroSection />

        <HorizontalScrollSection />

        <StaggeredGridSection />
      </AnimationContextProvider>
    </MainLayout>
  );
};

export default Home;
