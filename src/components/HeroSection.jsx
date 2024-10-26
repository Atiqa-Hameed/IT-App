import heroImage from "/Rectangle 39.png"; // Ensure the path is correct
import GitHubSection from "./GitHubSection";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Header Content */}
      <div className="relative z-10 flex flex-col items-center lg:items-start justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 text-white h-screen font-Dubai sm:mb-20 lg:mb-24 lg:pt-10 pt-auto">
        {/* Container for Text and Buttons */}
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-3xl text-center lg:text-left">
          {/* Title and Description */}
          <div className="mb-8 sm:mb-10 md:mb-16 lg:mb-24">
            <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl font-extrabold leading-tight mb-16">
              Empowering Your Business with IT Innovation
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-16">
              We specialize in delivering cutting-edge IT services tailored to
              meet the unique needs of businesses across industries. Our expert
              team is dedicated to providing comprehensive solutions that drive
              efficiency, enhance security, and foster innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#demo"
                className="bg-primary text-xs sm:text-sm md:text-base lg:text-base py-3 px-4 sm:px-6 border border-transparent flex items-center justify-center w-48 hover:bg-primary-dark transition-colors duration-200"
              >
                BOOK A DEMO
              </a>
              <a
                href="#quote"
                className="bg-transparent text-xs sm:text-sm md:text-base lg:text-base py-3 px-4 sm:px-6 border border-white flex items-center justify-center w-48 hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap"
              >
                REQUEST A QUOTE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Section */}
      <GitHubSection />
    </div>
  );
};

export default HeroSection;
