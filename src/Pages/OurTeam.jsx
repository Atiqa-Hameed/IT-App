import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "/Rectangle 55.png";
import ima from "/imb.png";
import imb from "/ima.png";

import TextSection from "../components/Text";
const OurTeam = () => {
  const teamMember = {
    name: "Member Name",
    role: "Position in Company",
    img: img,
    textColor: "text-white",
    bgColor: "bg-black",
  };

  const renderTeamMember = ({ name, role, img, textColor, bgColor }) => (
    <div
      className={`${bgColor} shadow-lg overflow-hidden flex flex-col items-center mx-2`}
      style={{ minWidth: "300px" }}
    >
      <img src={img} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className={`text-xl font-semibold ${textColor}`}>{name}</h3>
        <p className="text-gray-600">{role}</p>
        <div className="flex space-x-4 mt-4 justify-center">
          <a href="#" className={`text-${textColor} text-blue-500 text-2xl`}>
            <FaFacebook />
          </a>
          <a href="#" className={`text-${textColor} text-blue-500 text-2xl`}>
            <FaInstagram />
          </a>
          <a href="#" className={`text-${textColor} text-blue-700 text-2xl`}>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex justify-start items-center"
        style={{ marginLeft: "-100px", marginRight: "-100px" }}
      >
        {Array(5)
          .fill(teamMember)
          .map((member, index) => (
            <div key={index}>{renderTeamMember(member)}</div>
          ))}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-start items-center px-4 mt-11 sm:px-8 md:px-16">
      <img
      src={ima}
      className="lg:w-[1600px] lg:h-[450px] w-full h-auto object-cover mb-8 md:mb-0"/>
      <div className="lg:ml-5 mb-16 md:ml-18 max-w-lg">
        <TextSection
          title="Our Team"
          align="center"
          content="Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo tellus bibendum venenatis vel. Elementum pellentesque dictum viverra tempor. Odio pellentesque viverra fringilla eleifend laoreet commodo odio elementum et. Massa a quis facilisi morbi at sit consequat. Feugiat gravida justo massa et hac. Varius sed orci tortor et nibh. Pretium leo donec tortor nibh non pretium fringilla arcu. Nunc quis velit lacus sit."
        />
      </div>
    </div>
    <div className="flex flex-col-reverse md:flex-row justify-start items-center px-4 -mt-4 sm:px-8 md:px-16">

    {/* Text on the left */}
    <div className="lg:ml-5 mb-16 md:ml-18 max-w-lg text-center md:text-left ">
      <TextSection
        title="Our Goals"
        align="center"
        content="Lorem ipsum dolor sit amet consectetur. At leo ornare sagittis volutpat feugiat volutpat nisl bibendum. Ac faucibus enim justo tellus bibendum venenatis vel. Elementum pellentesque dictum viverra tempor. Odio pellentesque viverra fringilla eleifend laoreet commodo odio elementum et. Massa a quis facilisi morbi at sit consequat. Feugiat gravida justo massa et hac. Varius sed orci tortor et nibh. Pretium leo donec tortor nibh non pretium fringilla arcu. Nunc quis velit lacus sit."
      />
    </div>
    
    {/* Image on the right */}
    <img
      src={imb}
      className="lg:w-[1600px] lg:h-[450px] w-full h-auto object-cover mb-8 md:mb-0"
      alt="Description"
    />
  </div>
    </div>
  );
};

export default OurTeam;
