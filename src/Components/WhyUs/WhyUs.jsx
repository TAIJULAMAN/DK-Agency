import { FaAward, FaFileCode, FaGlobe, FaHandshake, FaHeadset, FaUsers } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <div className=''>
            <div className='py-5 bg-base-200'>
                <div className='mx-auto max-w-6xl px-5 lg:p-0 '>
                    <div className='text-center'>
                        <div className="divider py-5">
                            <h1 className='mx-auto text-4xl font-bold '>Why Us</h1>
                        </div>
                        <p className='mx-auto max-w-5xl text-gray-400'>Dark Tech Solutions Inc. is driving technological evolution by developing quality products for its clients. We are a one-stop shop for innovative digital solutions for every platform. Our experts follow a full work plan that unlocks the full potential of advanced technologies.</p>
                    </div>

                    <div className=' grid  grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                        <div className='flex items-center gap-5 p-5 lg:p-10 bg-base-100'>
                            <span className='bg-base-200 p-5 rounded-full'><FaUsers className='text-3xl' /></span>
                            <div>
                                <h4 className='text-2xl font-bold mb-3'>Expert Team</h4>
                                <p className='text-gray-400'>Our team of expert developers is tech-savvy and knows how to apply the latest technology to solve a particular business challenge.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-5 lg:p-10 bg-base-100'>
                            <span className='bg-base-200 p-5 rounded-full'><FaAward className='text-3xl' /></span>
                            <div>
                                <h4 className='text-2xl font-bold mb-3'>Transparent Process</h4>
                                <p className='text-gray-400'>Our development process for every project is transparent, where the information about your project is shared with you.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-5 lg:p-10 bg-base-100'>
                            <span className='bg-base-200 p-5 rounded-full'><FaGlobe className='text-3xl' /></span>
                            <div>
                                <h4 className='text-2xl font-bold mb-3'>Global Network</h4>
                                <p className='text-gray-400'>We extend our expert services to all businesses worldwide looking for advanced solutions for scalability and growth.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-5 lg:p-10 bg-base-100'>
                            <span className='bg-base-200 p-5 rounded-full'><FaFileCode className='text-3xl' /></span>
                            <div>
                                <h4 className='text-2xl font-bold mb-3'>On-Time Results</h4>
                                <p className='text-gray-400'>We avoid unnecessary delays and obstacles by maintaining a proper workflow and ensuring that it is strictly followed.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-5 lg:p-10 bg-base-100'>
                            <span className='bg-base-200 p-5 rounded-full'><FaHandshake className='text-3xl' /></span>
                            <div>
                                <h4 className='text-2xl font-bold mb-3'>End-to-End Services</h4>
                                <p className='text-gray-400'>To ensure quality output, we deliver services that include development, testing, and maintenance after deployment.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-5 lg:p-10 bg-base-100'>
                            <span className='bg-base-200 p-5 rounded-full'><FaHeadset className='text-3xl' /></span>
                            <div>
                                <h4 className='text-2xl font-bold mb-3'>24x7 Support</h4>
                                <p className='text-gray-400'>Staying in line with our quality services, we ensure that all your problems are resolved and provide 24x7 customer service for the same.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;