import { useEffect } from 'react';
import AboutUsImg from '../../assets/Photos/about.jpg'
import FahadVaiImg from '../../assets/Photos/Fahad-vai.jpg'
import KaImg from '../../assets/Photos/khorshed-photo.jpg'
import BUImg from '../../assets/Photos/borhan.jpg'
import TI from '../../assets/Photos/tohirl.jpg'
import { FaFacebook, FaGithub, FaGlobe, FaLinkedinIn } from 'react-icons/fa';
import TechStacks from '../TechStacks/TechStacks';
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);
    return (
        <div className='pt-16'>
            <div className="hero" style={{ backgroundImage: `url(${AboutUsImg}) ` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mx-auto max-w-6xl">
                    <div className="my-12 ">
                        <h1 className='mx-auto text-5xl font-bold mb-5'>About Us</h1>
                        <h1 className="mb-5 text-xl lg:text-5xl font-bold text-white">Shaping The More Sustainable Digital World</h1>
                        <p className="mb-5">Dark Tech Solutions Inc. combines state-of-the-art technologies to drive new values and unlock unexplored client opportunities. We promise to deliver promising technology that ensures to rewire the global economy for shared notes. Join our forward-thinking doers to shape new values in your industry.</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl hero py-10">
                <div className="hero-content flex-col lg:flex-row gap-4  bg-base-200">
                    <img src={AboutUsImg} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2 px-5'>
                        <h1 className="text-3xl font-bold">Our Mission</h1>
                        <p className="py-6 text-justify text-gray-400">We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p>
                        <div className='flex items-center gap-4'>
                            <img src={FahadVaiImg} alt="" className='rounded-full w-16 h-16' />
                            <div>
                                <p className='text-xl font-bold'>Fahad Bin Bashar</p>
                                {/* <p className='text-gray-400'></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-base-200 py-10'>
                <div className='mx-auto max-w-6xl px-5 lg:p-0 '>
                    <div className='text-center'>
                        <h1 className='mx-auto text-3xl font-bold my-3'>Building A Better Working World is The Foundation of Our Company</h1>
                        <p className='text-gray-400'>We empower our people with the right mindsets and skills to navigate what’s next, become the transformative leaders the world needs, pursue careers as unique as they are, and build their own exceptional dark tech experiences The ability to invite, leverage and learn from different perspectives is key to delivering for our clients. We believe diversity and inclusiveness means growth.</p>
                    </div>

                    <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 lg:p-0'>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={FahadVaiImg} className='w-full h-72' alt="Fahad Bin Bashar" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">Fahad Bin Bashar</h2>
                                <p className='text-gray-400'>Full Stack Developer</p>
                                <p className='text-justify'>Overseeing all technology operations and evaluating them according to the goals.</p>
                                <div className='flex justify-around mt-3 py-3 rounded bg-base-200'>

                                    <a href="https://www.facebook.com/fahadbinbashar" target="_blank" rel="noopener noreferrer"><span><FaGlobe /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaFacebook /></span></a>

                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={KaImg} className='w-full h-72' alt="Md Mayin Uddin" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">Md Mayin Uddin</h2>
                                <p className='text-gray-400'>App Developer</p>
                                <p className='text-justify'>Overseeing all technology operations and evaluating them according to the goals.</p>
                                <div className='flex justify-around mt-3 py-3 rounded bg-base-200'>

                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGlobe /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaFacebook /></span></a>

                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={BUImg} className='w-full h-72' alt="Md Borhan Uddin" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">Md Borhan Uddin</h2>
                                <p className='text-gray-400'>MERN Stack Developer</p>
                                <p className='text-justify'>Overseeing all technology operations and evaluating them according to the goals.</p>
                                <div className='flex justify-around mt-3 py-3 rounded bg-base-200'>

                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGlobe /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaFacebook /></span></a>

                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={KaImg} className='w-full h-72' alt="Md Saifur Alamin" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">Md Saifur Alamin</h2>
                                <p className='text-gray-400'>React Developer</p>
                                <p className='text-justify'>Overseeing all technology operations and evaluating them according to the goals.</p>
                                <div className='flex justify-around mt-3 py-3 rounded bg-base-200'>

                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGlobe /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaFacebook /></span></a>

                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={KaImg} className='w-full h-72' alt="Md Khorshed Alam" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">Md Khorshed Alam</h2>
                                <p className='text-gray-400'>React Developer</p>
                                <p className='text-justify'>Overseeing all the react js technology operations and evaluating them according to the goals.</p>
                                <div className='flex justify-around mt-3 py-3 rounded bg-base-200'>

                                    <a href="https://khorshedalam-kbd.web.app/" target="_blank" rel="noopener noreferrer"><span><FaGlobe /></span></a>
                                    <a href="https://github.com/khorshed-alam-kbd/" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
                                    <a href="https://www.linkedin.com/in/khorshedalam-kbd/" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn /></span></a>
                                    <a href="https://www.facebook.com/engr.khorshedalam.bd" target="_blank" rel="noopener noreferrer"><span><FaFacebook /></span></a>

                                </div>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={TI} className='w-full h-72' alt="Md Saifur Alamin" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">Tohirul Islam</h2>
                                <p className='text-gray-400'>React Developer</p>
                                <p className='text-justify'>Overseeing all technology operations and evaluating them according to the goals.</p>
                                <div className='flex justify-around mt-3 py-3 rounded bg-base-200'>

                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGlobe /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn /></span></a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"><span><FaFacebook /></span></a>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <TechStacks/>
        </div>
    );
};

export default AboutUs;