import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  variant = 'primary', // 'primary' atau 'secondary'
  as = 'a',            // 'a' atau 'Link' dari react-router-dom
  children,            // Teks di dalam tombol, contoh: "Mulai Sekarang"
  className = '',      // Untuk menambahkan class custom jika perlu
  ...props             // Props lainnya seperti href, to, target, dll.
}) => {
  
  // Tentukan elemen yang akan dirender: 'a' atau komponen Link
  const Component = as === 'Link' ? Link : 'a';

  // Style untuk varian 'primary' (tombol ungu dengan efek)
  if (variant === 'primary') {
    return (
      <Component
        className={`relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group ${className}`}
        {...props} // sebar semua props (misal: href="/", to="/course")
      >
        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
        <span className="relative text-primary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
          {children} {/* Tampilkan teks dari children */}
        </span>
      </Component>
    );
  }

  <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
    <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Button Text</span>
</a>

  // Style untuk varian 'secondary' (tombol putih)
  if (variant === 'secondary') {
    return (
      <Component
        className={`inline-block rounded-lg border border-gray-300 bg-white px-6 py-3 text-lg font-medium text-primary shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }

  return null; // Jika varian tidak dikenali
};

export default Button;