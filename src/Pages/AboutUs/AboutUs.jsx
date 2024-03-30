import FahadVaiImg from "../../assets/Photos/Fahad-vai.jpg";
import { useEffect } from "react";
import AboutUsImg from "../../assets/Photos/about.jpg";
// import { FaFacebook, FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import TechStacks from "../TechStacks/TechStacks";
import Team from "./Team";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="pt-16">
      <div className="hero" style={{ backgroundImage: `url(${AboutUsImg}) ` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mx-auto max-w-6xl">
          <div className="my-12 ">
            <h1 className="mx-auto text-5xl font-bold mb-5">About Us</h1>
            <h1 className="mb-5 text-xl lg:text-5xl font-bold text-white">
              Shaping The More Sustainable Digital World
            </h1>
            <p className="mb-5">
              Dark Tech Solutions Inc. combines state-of-the-art technologies to
              drive new values and unlock unexplored client opportunities. We
              promise to deliver promising technology that ensures to rewire the
              global economy for shared notes. Join our forward-thinking doers
              to shape new values in your industry.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl hero py-10">
        <div className="hero-content flex-col lg:flex-row gap-4  bg-base-200">
          <img
            src={AboutUsImg}
            alt=""
            className="lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="lg:w-1/2 px-5">
            <h1 className="text-3xl font-bold">Our Mission</h1>
            <p className="py-6 text-justify text-gray-400">
              We aim to serve businesses with customer centric, result oriented,
              cost effective and innovative solutions that open up endless
              customer engaging possibilities and drive value to global clients.
              We work to make our customers happy through dedication and
              professionalism of our team.
            </p>
            <div className="flex items-center gap-4">
              <img
                src={FahadVaiImg}
                alt=""
                className="rounded-full w-16 h-16"
              />
              <div>
                <p className="text-xl font-bold">Fahad Bin Bashar</p>
                {/* <p className='text-gray-400'></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <TechStacks />
    </div>
  );
};

export default AboutUs;
