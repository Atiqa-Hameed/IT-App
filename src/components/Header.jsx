import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing toggle icons

const Header = () => {
  // State to manage the toggle of the navigation links
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white px-24">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="text-lg font-bold text-white">
          YOUR LOGO
        </a>

        {/* Toggle Button for Small Screens */}
        <button 
          onClick={toggleNav} 
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors duration-200">
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle icon based on state */}
        </button>

        {/* Regular Navigation for Large Screens */}
        <nav className="hidden md:flex justify-center flex-grow space-x-8">
          <NavLink to="/" className="hover:text-gray-300 transition-colors duration-200">HOME</NavLink>
          <NavLink to="/about" className="hover:text-gray-300 transition-colors duration-200">ABOUT</NavLink>
          <NavLink to="/webdev" className="hover:text-gray-300 transition-colors duration-200">WEB DEV</NavLink>
          <a href="#resources" className="hover:text-gray-300 transition-colors duration-200">RESOURCES</a>
          <a href="#company" className="hover:text-gray-300 transition-colors duration-200">COMPANY</a>
        </nav>

        {/* Right-aligned Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#login" className="hover:text-gray-300 transition-colors duration-200">LOGIN</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">CONTACT US</a>
        </div>

        {/* Slide-in Navigation Menu for Small Screens */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${isNavOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="flex items-center justify-between p-4">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={toggleNav}>
              <FaTimes size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink to="/" onClick={() => setIsNavOpen(false)} className="hover:text-gray-300 transition-colors duration-200">HOME</NavLink>
            <NavLink to="/about" onClick={() => setIsNavOpen(false)} className="hover:text-gray-300 transition-colors duration-200">ABOUT</NavLink>
            <NavLink to="/webdev" onClick={() => setIsNavOpen(false)} className="hover:text-gray-300 transition-colors duration-200">WEB DEV</NavLink>
            <a href="#resources" onClick={() => setIsNavOpen(false)} className="hover:text-gray-300 transition-colors duration-200">RESOURCES</a>
            <a href="#company" onClick={() => setIsNavOpen(false)} className="hover:text-gray-300 transition-colors duration-200">COMPANY</a>
            <a href="#login" onClick={() => setIsNavOpen(false)} className="hover:text-gray-300 transition-colors duration-200">LOGIN</a>
            <a href="#contact" onClick={() => setIsNavOpen(false)} className="hover:text-gray-300 transition-colors duration-200">CONTACT US</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;











// import { NavLink } from "react-router-dom";
// const Header = () => {
//   return (
//     <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white px-8">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 sm:px-10 lg:px-12 py-4">
//         {/* Logo */}
//         <a href="#" className="flex items-center text-white mb-4 md:mb-0">
//           <span className="text-lg md:text-xl lg:text-2xl font-bold">YOUR LOGO</span>
//         </a>

//         {/* Navigation Links */}
//         <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
//         <NavLink to="/"><a href="#home" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">HOME</a></NavLink>
//         <NavLink to="/about"> <a href="#about" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">ABOUT</a></NavLink> 
//         <NavLink to="/webdev"> <a href="#webdev" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">WEB DEV</a></NavLink>
//           <a href="#resources" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">RESOURSES</a>
//           <a href="#company" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">COMPANY</a>
//         </nav>

//         {/* Additional Links */}
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
//           <a href="#login" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">LOGIN</a>
//           <a href="#contact" className="text-xs sm:text-sm md:text-base lg:text-base hover:text-gray-300 transition-colors duration-200">CONTACT US</a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

  

