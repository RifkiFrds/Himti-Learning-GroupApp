import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"; // 1. Impor lazy dan Suspense

import MainLayout from "./Components/Layout/MainLayout";
import ScrollToTop from "./utils/ScrollTop";
import PowerLogoLoader from "./Components/Loaders/PowerLogoLoader";

// 2. Ubah impor statis menjadi dinamis menggunakan React.lazy
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Program = lazy(() => import("./Pages/Program"));
const Course = lazy(() => import("./Pages/Course"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PowerLogoLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<Program />} />
            <Route path="/course" element={<Course />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
