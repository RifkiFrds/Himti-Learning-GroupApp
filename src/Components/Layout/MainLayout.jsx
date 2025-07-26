import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HIMTIChat from '../Organisms/HIMTIChat';

// Mendefinisikan layout utama yang mencakup navbar, konten utama, dan footer
const MainLayout = () => {
  return (
    <>
    <div className="bg-gray-50 font-sans text-secondary">
      <Navbar />
      <main className="pt-20"> 
        <Outlet /> 
      </main>
      <Footer />
    </div>
    <HIMTIChat />
    </>
  );
};

export default MainLayout;