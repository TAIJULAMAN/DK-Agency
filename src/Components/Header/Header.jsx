import { FaList, FaRegEnvelope, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-black px-5 lg:px-10 fixed z-30 ">
                <div className="navbar-start">
                    <Link to='/' className="text-2xl lg:text-4xl " id='BN'>Dark Tech</Link>
                </div>
                <div className="navbar-center hidden lg:block ">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><Link to='/' className='mx-1'>Home</Link></li>
                        <li><Link to='/web-development' className='mx-1'>Web Development</Link></li>
                        <li><Link to='/app-development' className='mx-1'>App Development</Link></li>
                        <li><Link to='/portfolio' className='mx-1'>Portfolio</Link></li>
                        <li><Link to='/about-us' className='mx-1'>About Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/contact-us' className="font-bold border rounded-full px-5 py-1 hidden lg:flex items-center gap-2" ><FaRegEnvelope /><span>Contact Us</span></Link>
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="lg:hidden">
                            <FaList className='text-xl' />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        </label>
                    </div>
                </div>
            </div>

            <div className="drawer z-50 lg:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-2/3 min-h-full bg-base-200 text-base-content">
                        <label htmlFor="my-drawer" className="drawer-overlay flex justify-between font-bold">
                            <p>Menu</p>
                            <p><FaTimes /></p>

                        </label>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/web-development'>Web Development</Link></li>
                        <li><Link to='/app-development'>App Development</Link></li>
                        <li><Link to='/portfolio'>Services</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>

                        <label htmlFor="my-drawer" className="drawer-overlay flex justify-between">
                            <Link to='/contact-us' className="font-bold border rounded-full px-5 py-1 my-3 flex items-center gap-2" ><FaRegEnvelope /><span>Contact Us</span></Link >
                        </label>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;




// const Header = () => {
//     return (
//         <div>
//             this is the header
//         </div>
//     );
// };

// export default Header;