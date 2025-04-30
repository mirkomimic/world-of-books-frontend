import { Outlet } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import Dashboard from "@/pages/dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "@/pages/Home";
import Authors from "@/pages/dashboard/Authors";
import Books from "@/pages/Books";
import FadeInWrapper from "@/components/custom/Animations/FadeInWrapper";
import { BackgroundGradientAnimation } from "@/components/ui/aceternity/BackgroundGradientAnimation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <FadeInWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/dashboard">
                <Route index element={<Dashboard />} />
                <Route path="authors" element={<Authors />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FadeInWrapper>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default App;
