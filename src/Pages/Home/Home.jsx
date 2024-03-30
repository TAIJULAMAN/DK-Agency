import CarouselBanner from "../../Components/CarouselBanner/CarouselBanner";
import ClientsReview from "../../Components/ClientsReview/ClientReview";
import ContactForm from "../../Components/ContactForm/ContactForm";
// import LogIn from "../../Components/LogIn/LogIn";
// import SignUp from "../../Components/SignUp/SignUp";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Portfolio from "../Portfolio/Portfolio";
import TechStacks from "../TechStacks/TechStacks";

const Home = () => {
  return (
    <div>
      <CarouselBanner />
      <Portfolio />
      <ClientsReview />
      <TechStacks />
      <WhyUs />
      <div className=" mx-auto max-w-6xl px-5 lg:px-0 pt-10 text-center">
        <div className="divider py-5">
          <h1 className="mx-auto text-4xl font-bold my-5">Contact Us</h1>
        </div>
        <p className="mx-auto max-w-5xl text-gray-400">
          Give us a call and discuss your idea with us and we will create an
          innovative solution with our seamless services that have aided several
          small/large scale businesses. Join us and bring your business ideas to
          life!
        </p>
      </div>
      <ContactForm />
      <iframe
        className="w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.287640591127!2d90.40979066983644!3d23.78935527924727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700946029874!5m2!1sen!2sbd"
        height="300"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Home;
