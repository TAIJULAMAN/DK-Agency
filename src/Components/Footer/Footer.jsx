import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-base-200'>
                <footer className=" mx-auto max-w-6xl p-10  lg:flex justify-between ">
                    <aside>

                        <h1 className='text-2xl font-bold'>Dark Tech</h1>
                        <p className='text-gray-400 mb-5'>Providing reliable tech solution</p>

                        <div className='flex items-center gap-2 my-2'  >
                            <FaMapMarkerAlt />
                            <p className='text-gray-400'>Gulshan, Dhaka, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-2 my-2'  >
                            <FaEnvelope />
                            <a href="mailto:info@darktechteam.com">
                                <p className='text-gray-400'>info@darktechteam.com</p></a>

                        </div>
                        <div className='flex items-center gap-2 my-2'  >
                            <FaPhoneAlt />
                            <a href="tel:+8801741260792">
                                <p className='text-gray-400'>+880-1741-260792</p></a>

                        </div>
                    </aside>
                    <nav className='grid py-2'>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover text-gray-400">Web Development</a>
                        <a className="link link-hover text-gray-400">App Development</a>
                    </nav>
                    <nav className='grid py-2'>
                        <header className="footer-title">Company</header>
                        <Link to='/about-us' className="link link-hover text-gray-400">About Us</Link>
                        <Link to='/contact-us' className="link link-hover text-gray-400">Contact Us</Link>
                    </nav>
                    <nav className='grid py-2'>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover text-gray-400">Terms of use</a>
                        <a className="link link-hover text-gray-400">Privacy policy</a>
                    </nav>
                </footer>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Dark Tech</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;