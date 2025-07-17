import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  as = 'a',           
  children,            
  className = '',      
  ...props             
}) => {
  
  const Component = as === 'Link' ? Link : 'a';

  return (
    <Component
      className={`relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group ${className}`}
      {...props}
    >
      <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0 pointer-events-none"></span>
      <span className="absolute inset-0 w-full h-full bg-white rounded-md pointer-events-none"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 pointer-events-none"></span>

      <span className="relative text-primary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
        {children}
      </span>
    </Component>
  );
};

export default Button;
