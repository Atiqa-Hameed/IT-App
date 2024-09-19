
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 sm:px-10 lg:px-12 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center text-white mb-4 md:mb-0">
          <span className="text-lg md:text-xl lg:text-2xl font-bold">YOUR LOGO</span>
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <NavLink to="/"><a href="#home" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">HOME</a></NavLink>
        <NavLink to="/about"> <a href="#about" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">ABOUT</a></NavLink> 
        <NavLink to="/webdev"> <a href="#webdev" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">WEB DEV</a></NavLink>
          <a href="#resources" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">RESOURSES</a>
          <a href="#company" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">COMPANY</a>
        </nav>

        {/* Additional Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <a href="#login" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">LOGIN</a>
          <a href="#contact" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">CONTACT US</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

  


