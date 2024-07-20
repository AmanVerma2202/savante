import { useState, useRef, useEffect } from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import LoginButton from '../../elements/LoginButton/LoginButton';
import SignupButton from '../../elements/SignupButton/SignupButton';
import Name from '../Name/Name';
import SignUp from '../../auth/SignUp/SignUp';


const Header = () => {
    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);
    

    const handleScroll = (elTopOffset, elHeight) => {
        if (window.pageYOffset > (elTopOffset + elHeight)) {
          setSticky({ isSticky: true, offset: elHeight });
        } else {
          setSticky({ isSticky: false, offset: 0 });
        }
      };
    
      // add/remove scroll event listener
      useEffect(() => {
        var header = headerRef.current.getBoundingClientRect();
        const handleScrollEvent = () => {
          handleScroll(header.top, header.height)
        }
    
        window.addEventListener('scroll', handleScrollEvent);
    
        return () => {
          window.removeEventListener('scroll', handleScrollEvent);
        };
      }, []);

    
  return (
    
    
    <div style={{ marginTop: sticky.offset }}>
    <div
      id="sticky-header"
      className={`navbar${sticky.isSticky ? ' sticky' : ''} flex flex-col md:flex-row justify-between items-center h-16 p-4 md:p-4`}
      ref={headerRef}
    >
      <div className="text-black text-2xl md:text-4xl font-bold">
        <Link to='/'>
          <Name />
        </Link>
        
      </div>
      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6">
        <Link to="/Our-Work" className="text-black">
          Our Work
        </Link>
        <Link to="/Brands&Agencies" className="text-black">
          Brands & Agencies
        </Link>
        <Link to="/About" className="text-black">
          About
        </Link>
        <Link to="/Contact-Us" className="text-black">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center mt-4 md:mt-0 space-x-4">
        <Link to="">
          <LoginButton sign={"Log in"} />
        </Link>
        <Link to="/sign-up/influencer">
          <SignupButton sign={"Sign Up"} />
        </Link>
      </div>
    </div>
  </div>

  )
}

export default Header