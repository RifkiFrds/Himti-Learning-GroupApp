import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Program from './Pages/Program';
import Course from './Pages/Course';
import NotFound from './Pages/NotFound';
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