import userImg from '../../assets/Photos/user-photo.jpeg'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ClientsReview = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className='py-10 bg-base-200'>
                <div className='mx-auto max-w-6xl px-5 lg:p-0 '>
                    <div className='text-center'>
                        <h1 className='mx-auto text-4xl font-bold my-3'>Our Clients Simply Love Our Work</h1>
                        <p className='text-gray-400'>Our services are appreciated by our clients from all across the globe for high quality and impressive results.</p>
                    </div>

                    <div className='my-5'>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={4000}
                            showDots={true}
                            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}

                            className='pb-8'
                        >
                            <div className='bg-base-100 p-5 border mx-2 '>
                                <div className="flex my-5 text-justify "> <span><FaQuoteLeft className='text-xl mr-3' /></span> <p className='text-gray-400'>We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p></div>
                                <div className='flex items-center gap-4'>
                                    <img src={userImg} alt="" className='rounded-full w-16 h-16' />
                                    <div>
                                        <p className='text-xl font-bold'>Fahad Bin Bashar</p>
                                        <p className='text-gray-400'>Managing Director</p>
                                        <span className='my-2 flex gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-base-100 p-5 border mx-2 '>
                                <div className="flex my-5 text-justify "> <span><FaQuoteLeft className='text-xl mr-3' /></span> <p className='text-gray-400'>We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p></div>
                                <div className='flex items-center gap-4'>
                                    <img src={userImg} alt="" className='rounded-full w-16 h-16' />
                                    <div>
                                        <p className='text-xl font-bold'>Md. Khorshed Alam</p>
                                        <p className='text-gray-400'>Developer</p>
                                        <span className='my-2 flex gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-base-100 p-5 border mx-2 '>
                                <div className="flex my-5 text-justify "> <span><FaQuoteLeft className='text-xl mr-3' /></span> <p className='text-gray-400'>We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p></div>
                                <div className='flex items-center gap-4'>
                                    <img src={userImg} alt="" className='rounded-full w-16 h-16' />
                                    <div>
                                        <p className='text-xl font-bold'>Fahad Bin Bashar</p>
                                        <p className='text-gray-400'>Managing Director</p>
                                        <span className='my-2 flex gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-base-100 p-5 border mx-2 '>
                                <div className="flex my-5 text-justify "> <span><FaQuoteLeft className='text-xl mr-3' /></span> <p className='text-gray-400'>We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p></div>
                                <div className='flex items-center gap-4'>
                                    <img src={userImg} alt="" className='rounded-full w-16 h-16' />
                                    <div>
                                        <p className='text-xl font-bold'>Md. Khorshed Alam</p>
                                        <p className='text-gray-400'>Developer</p>
                                        <span className='my-2 flex gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-base-100 p-5 border mx-2 '>
                                <div className="flex my-5 text-justify "> <span><FaQuoteLeft className='text-xl mr-3' /></span> <p className='text-gray-400'>We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p></div>
                                <div className='flex items-center gap-4'>
                                    <img src={userImg} alt="" className='rounded-full w-16 h-16' />
                                    <div>
                                        <p className='text-xl font-bold'>Fahad Bin Bashar</p>
                                        <p className='text-gray-400'>Managing Director</p>
                                        <span className='my-2 flex gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-base-100 p-5 border mx-2 '>
                                <div className="flex my-5 text-justify "> <span><FaQuoteLeft className='text-xl mr-3' /></span> <p className='text-gray-400'>We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer engaging possibilities and drive value to global clients. We work to make our customers happy through dedication and professionalism of our team.</p></div>
                                <div className='flex items-center gap-4'>
                                    <img src={userImg} alt="" className='rounded-full w-16 h-16' />
                                    <div>
                                        <p className='text-xl font-bold'>Md. Khorshed Alam</p>
                                        <p className='text-gray-400'>Developer</p>
                                        <span className='my-2 flex gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                            </div>

                        </Carousel>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default ClientsReview;