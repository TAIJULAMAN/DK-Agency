import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      <div className="lg:flex flex-row-reverse justify-between mx-auto max-w-6xl my-10 px-5 lg:px-0 ">
        <div className="lg:w-1/2 bg-base-200 p-10">
          <h1 className="text-3xl my-2 font-bold">Reach Out To Us!</h1>
          <p className="text-justify text-gray-400">
            We are present 24*7 for our clients; get in touch with us and scale
            your business with flooding revenues!
          </p>

          <div className="my-5">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full my-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full my-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full my-2"
            />
            <textarea
              className="textarea textarea-bordered w-full h-32 my-2"
              placeholder="Your Project Descriptions "
            ></textarea>
            <a href="mailto:darktechteam@gmail.com">
              <button className="btn btn-outline w-full mt-3">submit</button>
            </a>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-4 my-5">
            <span className="bg-base-200 p-4 rounded-full">
              <FaMapMarkerAlt className="text-3xl" />
            </span>
            <div>
              <h4 className="text-2xl font-bold">Address</h4>
              <p className="text-gray-400">Gulshan, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-4 my-5">
            <span className="bg-base-200 p-4 rounded-full">
              <FaPhoneAlt className="text-3xl" />
            </span>
            <div>
              <h4 className="text-2xl font-bold">Phone Number</h4>
              <p className="text-gray-400">+880-1741-260792</p>
            </div>
          </div>
          <div className="flex items-center gap-4 my-5">
            <span className="bg-base-200 p-4 rounded-full">
              <FaMapMarkerAlt className="text-3xl" />
            </span>
            <div>
              <h4 className="text-2xl font-bold">Email</h4>
              <p className="text-gray-400">info@darktechteam.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
