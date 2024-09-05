import React from 'react';
import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import youtubeIcon from "../assets/youtube-icon.png";
import BeIcon from "../assets/Be-icon.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24">
    <div className="container mx-auto px-6 lg:px-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="flex flex-col justify-center items-center md:items-start">
            <h2 className="text-5xl font-dubai mb-6 text-center md:text-left">LOGO</h2>
            <p className="text-gray-400 leading-relaxed text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur. Aoreet cras egestas. Lorem ipsum dolor sit amet consectetur. Aoreet cras egestas. Lorem ipsum dolor sit amet consectetur. Aoreet cras egestas. Lorem ipsum dolor sit amet consectetur. Aoreet cras egestas. Lorem ipsum dolor sit amet consectetur. Aoreet cras egestas.
            </p>
          </div>
          
          {/* Services Section */}
          <div className='flex flex-col justify-center items-center md:items-start'>
            <h3 className="text-xl font-dubai mb-4 text-center md:text-left">Services</h3>
            <ul className="text-center md:text-left">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">UI/UX Design</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Graphic Design</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Business Planning</a></li>
            </ul>
          </div>
          
          {/* Useful Links Section */}
          <div className='flex flex-col justify-center items-center md:items-start'>
            <h3 className="text-xl font-dubai mb-4 text-center md:text-left">Useful Links</h3>
            <ul className="text-center md:text-left">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Follow Us Section */}
          <div className='flex flex-col justify-center items-center md:items-start'>
            <h3 className="text-xl font-dubai mb-4 text-center md:text-left">Follow Us</h3>
            <div className="grid grid-cols-3 gap-4">

              <a href="#" className="flex justify-center items-center">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <img src={BeIcon} alt="Behance" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



