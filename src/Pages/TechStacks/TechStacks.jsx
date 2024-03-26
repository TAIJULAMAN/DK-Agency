import { useState } from 'react';
import FrontEnd from '../../assets/Photos/FontEnd-Icon/front-end-development.svg'
import BackEnd from '../../assets/Photos/BackEnd-Icon/backend-development.svg'
import MA from '../../assets/Photos/MobileApp-Icon/mobile-app-development.svg'

import html from '../../assets/Photos/FontEnd-Icon/html-tech-icon.svg'
import css from '../../assets/Photos/FontEnd-Icon/css-tech-icon.svg'
import bootstrap from '../../assets/Photos/FontEnd-Icon/bootstrap-tech-icon.webp'
import tailwind from '../../assets/Photos/FontEnd-Icon/tailwind-css-tech-icon.webp'
import mui from '../../assets/Photos/FontEnd-Icon/material-ui-tech-icon.webp'
import react from '../../assets/Photos/FontEnd-Icon/react-js-tech-icon.svg'
import JavaScript from '../../assets/Photos/BackEnd-Icon/java-script-tech-icon.webp'
import NodeJs from '../../assets/Photos/BackEnd-Icon/nodejs-tech-icon.webp'
import MongoDB from '../../assets/Photos/BackEnd-Icon/mongo-db-tech-icon.webp'
import PHP from '../../assets/Photos/BackEnd-Icon/php-tech-icon.webp'
import Laravel from '../../assets/Photos/BackEnd-Icon/larvel-tech-icon.webp'
import MySQL from '../../assets/Photos/BackEnd-Icon/mysql-tech-icon.webp'
import ReactNative from '../../assets/Photos/MobileApp-Icon/react_logo-tech-icon.webp'
import Flutter from '../../assets/Photos/MobileApp-Icon/flutter-tech-icon.webp'


const TechStacks = () => {

    const [isClickedFE, setIsClickedFE] = useState(true);
    const [isClickedBE, setIsClickedBE] = useState(false);
    const [isClickedMA, setIsClickedMA] = useState(false);

    const handleClick = (type) => {
        if (type === 'FE') {
            setIsClickedFE(true);
            setIsClickedBE(false);
            setIsClickedMA(false);

        } else if (type === 'BE') {
            setIsClickedFE(false);
            setIsClickedBE(true);
            setIsClickedMA(false);
        } else if (type === 'MA') {
            setIsClickedFE(false);
            setIsClickedBE(false);
            setIsClickedMA(true);
        }
    };

    return (
        <div>
            <div className='py-10'>
                <div className='mx-auto max-w-6xl px-5 lg:p-0 '>
                    <div className='text-center'>
                        <div className="divider text-xl">
                            <h1 className='mx-auto text-4xl font-bold my-3'>Our Tech Stacks</h1>
                        </div>
                    </div>

                    <div className='bg-base-200 p-10 my-10'>
                        <div className='lg:flex gap-5'>
                            <div className='lg:w-1/3 mb-5'>
                                <div className={isClickedFE ? 'flex items-center gap-3 p-3 bg-base-100 rounded-full' : 'text-gray-400 flex items-center gap-3 p-3 bg-base-300 rounded-full'} onClick={() => handleClick('FE')}>
                                    <figure className='bg-base-200 rounded-full'><img src={FrontEnd} className='p-3 ' alt="front-end-development" /></figure>
                                    <h1 className='text-xl font-bold'>Front End Development</h1>
                                </div>
                                <div className={isClickedBE ? 'my-5 flex items-center gap-3 p-3 bg-base-100 rounded-full' : 'my-5 text-gray-400 flex items-center gap-3 p-3 bg-base-300 rounded-full'} onClick={() => handleClick('BE')}>
                                    <figure className='bg-base-200 rounded-full'><img src={BackEnd} className='p-3 ' alt="back-end-development" /></figure>
                                    <h1 className='text-xl font-bold'>Back End Development</h1>
                                </div>
                                <div className={isClickedMA ? 'flex items-center gap-3 p-3  bg-base-100 rounded-full' : 'text-gray-400 flex items-center gap-3 p-3 bg-base-300 rounded-full'} onClick={() => handleClick('MA')}>
                                    <figure className='bg-base-200 rounded-full'><img src={MA} className='p-3 ' alt="mobile-app-development" /></figure>
                                    <h1 className='text-xl font-bold'>App Development</h1>
                                </div>
                            </div>
                            <div className='lg:w-2/3'>
                                <div className={isClickedFE ? 'block' : 'hidden'}>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={html} className='my-2' alt="html" />
                                            <h1 className='text-xl font-bold'>HTML 5</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={css} className='my-2' alt="css" />
                                            <h1 className='text-xl font-bold'>CSS</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={bootstrap} className='my-2' alt="Bootstrap" />
                                            <h1 className='text-xl font-bold'>Bootstrap</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={tailwind} className='my-2' alt="Tailwind" />
                                            <h1 className='text-xl font-bold'>Tailwind</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={mui} className='my-2' alt="Material UI" />
                                            <h1 className='text-xl font-bold'>Material UI</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={react} className='my-2' alt="React.Js" />
                                            <h1 className='text-xl font-bold'>React.js</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className={isClickedBE ? 'block' : 'hidden'}>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={JavaScript} className='my-2' alt="JavaScript" />
                                            <h1 className='text-xl font-bold'>JavaScript</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={NodeJs} className='my-2' alt="Node.js" />
                                            <h1 className='text-xl font-bold'>Node.js</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={MongoDB} className='my-2' alt="MongoDB" />
                                            <h1 className='text-xl font-bold'>MongoDB</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={PHP} className='my-2' alt="PHP" />
                                            <h1 className='text-xl font-bold'>PHP</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={Laravel} className='my-2' alt="Laravel" />
                                            <h1 className='text-xl font-bold'>Laravel</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={MySQL} className='my-2' alt="MySQL" />
                                            <h1 className='text-xl font-bold'>MySQL</h1>
                                        </div>

                                    </div>
                                </div>
                                <div className={isClickedMA ? 'block' : 'hidden'}>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={ReactNative} className='my-2' alt="React Native" />
                                            <h1 className='text-xl font-bold'>React Native</h1>
                                        </div>
                                        <div className='p-5 grid justify-items-center bg-base-100 rounded-xl'>
                                            <img src={Flutter} className='my-2' alt="Flutter" />
                                            <h1 className='text-xl font-bold'>Flutter</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TechStacks;