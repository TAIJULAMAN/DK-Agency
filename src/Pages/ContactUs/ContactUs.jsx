import { useEffect } from 'react';

import contactUsImg from '../../assets/Photos/Contact-Us.jpg'
import ContactForm from '../../Components/ContactForm/ContactForm';


const ContactUs = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);
    return (
        <div className='pt-16'>
            <div className="hero" style={{ backgroundImage: `url(${contactUsImg}) ` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content mx-auto max-w-6xl">
                    <div className="my-10 ">
                        <h1 className="mb-5 text-5xl font-bold text-white">Contact Us</h1>
                        <p className="mb-5">Dark Tech Solutions Inc. has been a leading IT firm for more than a decade with state-of-the-art technologies that can cater to a client specific business needs. Give us a call and discuss your idea with us and we will create an innovative solution with our seamless services that have aided several small/large scale businesses. We are not just any other IT company, we are a think-tank. Join us and bring your business ideas to life!</p>
                    </div>
                </div>
            </div>

            <ContactForm></ContactForm>


        </div>
    );
};

export default ContactUs;