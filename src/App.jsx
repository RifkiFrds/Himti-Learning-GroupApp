import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import Course from './pages/Course';
import NotFound from './pages/NotFound';
import ScrollToTop from './utils/ScrollTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/course" element={<Course />} />
          <Route path='*' element={<NotFound/>} />
        </Route>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;