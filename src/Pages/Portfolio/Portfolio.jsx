import { useEffect, useState } from 'react';

import WebDevDemo from '../../Components/WebDevDemo/WebDevDemo';
import AppDevDemo from '../../Components/AppDevDemo/AppDevDemo';

const Portfolio = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    const [isClickedWEB, setIsClickedWEB] = useState(true);
    const [isClickedAPP, setIsClickedAPP] = useState(false);

    const handleClick = (type) => {
        if (type === 'WEB') {
            setIsClickedWEB(true);
            setIsClickedAPP(false);

        } else if (type === 'APP') {
            setIsClickedWEB(false);
            setIsClickedAPP(true);
        }
    };
    return (
        <div >
            <div className='py-20'>
                <div className='mx-auto max-w-6xl px-5 lg:p-0 '>
                    <div className='text-center'>
                        <div className="divider text-xl">
                            <h1 className='mx-auto text-4xl font-bold my-3'>Our Portfolio</h1>
                        </div>

                    </div>

                    <div className='my-10'>
                        <div className=' gap-5'>
                            <div className='flex justify-around mb-5'>
                                <div className={isClickedWEB ? 'p-3 border-b-2' : 'text-gray-400 p-3'} onClick={() => handleClick('WEB')}>
                                    <h1 className='text-xl font-bold'>WEB Development</h1>
                                </div>
                                <div className={isClickedAPP ? 'p-3 border-b-2' : 'text-gray-400 p-3'} onClick={() => handleClick('APP')}>
                                    <h1 className='text-xl font-bold'>APP Development</h1>
                                </div>
                            </div>

                            <div className=' '>
                                <div className={isClickedWEB ? 'block' : 'hidden'}>
                                    <WebDevDemo></WebDevDemo>
                                </div>

                                <div className={isClickedAPP ? 'block' : 'hidden'}>
                                    <AppDevDemo></AppDevDemo>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Portfolio;