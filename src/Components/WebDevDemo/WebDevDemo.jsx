import ajharnatradeint from '../../assets/Photos/WEB-Portfolio/ajharnatradeint.png'
import SB from '../../assets/Photos/WEB-Portfolio/sultana-boutique.png'
import GS from '../../assets/Photos/WEB-Portfolio/giftshare.png'
import { FaExternalLinkAlt } from 'react-icons/fa';

const WebDevDemo = () => {
    return (
        <div>
            <div>
                <div className="hero bg-base-200 my-4">
                    <div className="hero-content flex-col lg:flex-row-reverse m-5">
                        <img src={SB} alt='https://sultanaboutiques.com/' className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div className='lg:pr-5'>
                            <div className='lg:flex gap-3 my-5 text-xs text-center'>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>UI/UX</p>
                                <p className='rounded-full bg-base-100 p-3  my-3 lg:my-0 text-gray-400'>DEVELOPMENT</p>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>HOSTING</p>
                            </div>
                            <h1 className="text-2xl font-bold uppercase" >Sultana Boutique </h1>
                            <p className="py-6 text-justify text-gray-400 ">Sultana Boutique is a E-commerce site. We are passionate about helping you discover unique and elegant pieces that reflect your individuality and enhance your wardrobe.</p>
                            <a href="https://sultanaboutiques.com/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                                <FaExternalLinkAlt />
                                <p className='font-bold uppercase'>Visit Site</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-200 my-4">
                    <div className="hero-content flex-col lg:flex-row m-5">
                        <img src={GS} alt='https://giftshare.co.jp/' className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div className='lg:pl-5'>
                            <div className='lg:flex gap-3 my-5 text-xs text-center'>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>UI/UX</p>
                                <p className='rounded-full bg-base-100 p-3  my-3 lg:my-0 text-gray-400'>DEVELOPMENT</p>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>HOSTING</p>
                            </div>
                            <h1 className="text-2xl font-bold uppercase">Gift Share</h1>
                            <p className="py-6 text-justify text-gray-400 ">Giftshare is a E-commerce site, Giftshare Chocolate, where sweet dreams are crafted into delectable reality.</p>
                            <a href="https://giftshare.co.jp/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                                <FaExternalLinkAlt />
                                <p className='font-bold uppercase'>Visit Site</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero bg-base-200 my-4">
                    <div className="hero-content flex-col lg:flex-row-reverse m-5">
                        <img src={ajharnatradeint} alt='ajharnatradeint-website' className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div className='lg:pr-5'>
                            <div className='lg:flex gap-3 my-5 text-xs text-center'>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>UI/UX</p>
                                <p className='rounded-full bg-base-100 p-3  my-3 lg:my-0  text-gray-400'>DEVELOPMENT</p>
                                <p className='rounded-full bg-base-100 p-3  text-gray-400'>HOSTING</p>
                            </div>
                            <h1 className="text-2xl font-bold">A JHARNA TRADE INTERNATIONAL</h1>
                            <p className="py-6 text-justify text-gray-400 ">A Jharna Trade International is a Human Resource Management Solution Organization that provides manpower across the world as requirements.</p>
                            <a href="https://ajharnatradeint.com/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4'>
                                <FaExternalLinkAlt />
                                <p className='font-bold uppercase'>Visit Site</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WebDevDemo;