import React, { useState } from 'react'
import './NavbarStyles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.jpg'

const Navbar = () => {

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = menuActive ? 'auto' : 'hidden';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top p-2" style={{ backgroundColor: "#fff", zIndex: 1000 }}>
        <div className="container-fluid">
          <a className="navbar-brand p-0 ms-3" href="#"><img src={Logo} className='img-fluid logo-img' alt="logo" /></a>
          <div className='dropdown-options'>
            <input type="checkbox" id="active" onChange={toggleMenu} checked={menuActive} />
            <label htmlFor="active" className="menu-btn"><i className="fas fa-bars" /></label>
            <div className="wrapper">
              <ul >
                <li><Link onClick={() => setMenuActive(false)} to="/">HOME</Link></li>
                <li><Link onClick={() => setMenuActive(false)} to="/photos">PHOTOS</Link></li>
                <li><Link onClick={() => setMenuActive(false)} to="/videos">VIDEOS</Link></li>
                <li><Link onClick={() => setMenuActive(false)} to="/contact">CONTACT US</Link></li>
                <li><Link onClick={() => setMenuActive(false)} to="/contact">LOGIN</Link></li>
              </ul>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-2 me-2" aria-current="page" to=''>HOME</Link>
              </li>
              <li className="nav-item">
                <Link to='/photos' className='nav-link ms-2 me-2'>PHOTOS</Link>
              </li>

              <li className="nav-item">
                <Link to='/videos' className='nav-link ms-2 me-2'>VIDEOS</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link ms-2 me-2" to='/contact'>CONTACT US</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link ms-2 me-5" to='/login'>LOGIN</Link>
              </li>

              {/* <li className="nav-item ">
                <div className='search-wrap me-3'>
                  <i className='fa-solid text-white fa-magnifying-glass'/>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar