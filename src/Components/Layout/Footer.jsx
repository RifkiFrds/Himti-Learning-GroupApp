import himtiLogo from '../../assets/himti-logo.png';
import { Link } from 'react-router-dom'; 
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:space-x-4 md:text-left">
              <img
                className="h-12 w-auto mb-4 md:mb-0"
                src={himtiLogo}
                alt="HIMTI UMT"
              />
              <div>
                <span className="block font-semibold text-white text-base mb-1">
                  HIMTI Learning Group
                </span>
                <p className="text-sm text-gray-300">
                  Platform belajar komunitas dari Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Tangerang.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left"> 
            <h3 className="text-white font-semibold tracking-wider">Tautan Cepat</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/program" className="hover:text-primary transition-colors">Program</Link></li>
              <li><Link to="/course" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><a href="https://www.himtiumt.or.id/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tentang HIMTI</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left"> 
            <h3 className="text-white font-semibold tracking-wider">Top Kategori</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/program" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/program" className="hover:text-primary transition-colors">Mobile Development</Link></li>
              <li><Link to="/program" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left"> 
            <h3 className="text-white font-semibold tracking-wider">Hubungi Kami</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center justify-center md:justify-start"> 
                <p>info.himti@umt.ac.id</p>
              </li>
              <li className="flex items-center justify-center md:justify-start"> 
                <p>Universitas Muhammadiyah Tangerang</p>
              </li>
            </ul>
            <div className="mt-4 flex space-x-5 justify-center md:justify-start">
              <a href="https://www.instagram.com/himtiumt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <FaInstagram size={25} />
              </a>
              <a href="https://github.com/himtiumt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="GitHub">
                <FaGithub size={25} />
              </a>
              <a href="https://www.linkedin.com/company/himti-umt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HIMTI UMT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;