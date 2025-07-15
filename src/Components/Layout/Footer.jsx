import himtiLogo from '../../assets/himti-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img className="h-12 w-auto mb-4" src={himtiLogo} alt="HIMTI UMT" />
            <p className="text-sm">
              Platform belajar komunitas dari Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Tangerang.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider">Tautan Cepat</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/program" className="hover:text-primary">Program</a></li>
              <li><a href="/course" className="hover:text-primary">Courses</a></li>
              <li><a href="https://www.himtiumt.or.id/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Tentang HIMTI</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider">Top Kategori</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/program" className="hover:text-primary">Web Development</a></li>
              <li><a href="/program" className="hover:text-primary">Mobile Development</a></li>
              <li><a href="/program" className="hover:text-primary">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wider">Hubungi Kami</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <p>info.himti@umt.ac.id</p>
              </li>
              <li className="flex items-center">
                <p>Universitas Muhammadiyah Tangerang</p>
              </li>
            </ul>
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