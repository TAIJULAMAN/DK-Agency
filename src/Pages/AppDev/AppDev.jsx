import { useEffect } from 'react';
import AppDevImg from '../../assets/Photos/mobile-app-development.jpg'
import AppDevDemo from '../../Components/AppDevDemo/AppDevDemo';

const AppDev = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);
    return (
        <div className='pt-12'>
            <div className="hero" style={{ backgroundImage: `url(${AppDevImg}) ` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mx-auto max-w-6xl">
                    <div className="my-12 ">
                        <h1 className='mx-auto text-5xl font-bold mb-5 text-white'>App Development</h1>
                        <p className="mb-5">Dark Tech Solutions Inc. combines state-of-the-art technologies to drive new values and unlock unexplored client opportunities. We promise to deliver promising technology that ensures to rewire the global economy for shared notes. Join our forward-thinking doers to shape new values in your industry.</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-6xl'>
                <AppDevDemo></AppDevDemo>
            </div>

        </div>
    );
};

export default AppDev;