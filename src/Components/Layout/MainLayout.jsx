import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="bg-gray-50 font-sans text-secondary">
      <Navbar />
      <main className="pt-20"> 
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;