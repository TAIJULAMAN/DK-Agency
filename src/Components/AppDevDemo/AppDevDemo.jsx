import app from '../../assets/Photos/APP-portfolio/app-dev.jpg'
import { FaExternalLinkAlt } from 'react-icons/fa';

const AppDevDemo = () => {
    return (
        <div>
            <div>
                <div className="hero bg-base-200 my-4">
                    <div className="hero-content flex-col lg:flex-row-reverse m-5">
                        <img src={app} alt='ajharnatradeint-website' className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div className='lg:pr-5'>
                            <div className='lg:flex gap-3 my-5 text-xs text-center'>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>BRANDING</p>
                                <p className='rounded-full bg-base-100 p-3  my-3 lg:my-0 text-gray-400'>UI/UX</p>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>DEVELOPMENT</p>

                            </div>
                            <h1 className="text-2xl font-bold">AJTI APP</h1>
                            <p className="py-6 text-justify text-gray-400 ">A Jharna Trade International is a Human Resource Management Solution Organization that provides manpower across the world as requirements.</p>
                            <a href="https://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                                <FaExternalLinkAlt />
                                <p className='font-bold uppercase'>Download App</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-200 my-4">
                    <div className="hero-content flex-col lg:flex-row m-5">
                        <img src={app} alt='ajharnatradeint-website' className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div className='lg:pl-5'>
                            <div className='lg:flex gap-3 my-5 text-xs text-center'>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>BRANDING</p>
                                <p className='rounded-full bg-base-100 p-3  my-3 lg:my-0 text-gray-400'>UI/UX</p>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>DEVELOPMENT</p>

                            </div>
                            <h1 className="text-2xl font-bold">AJTI APP</h1>
                            <p className="py-6 text-justify text-gray-400 ">A Jharna Trade International is a Human Resource Management Solution Organization that provides manpower across the world as requirements.</p>
                            <a href="https://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                                <FaExternalLinkAlt />
                                <p className='font-bold uppercase'>Download App</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-200 my-4">
                    <div className="hero-content flex-col lg:flex-row-reverse m-5">
                        <img src={app} alt='ajharnatradeint-website' className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div className='lg:pr-5'>
                            <div className='lg:flex gap-3 my-5 text-xs text-center'>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>BRANDING</p>
                                <p className='rounded-full bg-base-100 p-3  my-3 lg:my-0 text-gray-400'>UI/UX</p>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>DEVELOPMENT</p>

                            </div>
                            <h1 className="text-2xl font-bold">AJTI APP</h1>
                            <p className="py-6 text-justify text-gray-400 ">A Jharna Trade International is a Human Resource Management Solution Organization that provides manpower across the world as requirements.</p>
                            <a href="https://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                                <FaExternalLinkAlt />
                                <p className='font-bold uppercase'>Download App</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDevDemo;