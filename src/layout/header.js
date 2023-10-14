import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = (props) => {
  const [show, setShow] = useState(false)
  const showNav = () => {
    document.getElementById('mobile_id').style.display = "block"
  }
  const hideNav = () => {
    document.getElementById('mobile_id').style.display = "none"
  }
  return (
    <header>
      <div className="page_width">
        <div className="nav_desktop">
          <div className="menu_bar" onClick={showNav} >
            <FaBars />
          </div>
          <div className="logo"><img src={props.logo} alt="" /></div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="outer_service">
                <Link to="/service">Services</Link>
                <div className="inner_service">
                  <ul className='service_list'>
                    <li>
                      <a href="">Ac Duct</a>
                    </li>
                    <li>
                      <a href="">Ac Duct</a>
                    </li>
                    <li>
                      <a href="">Ac Duct</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><a href="tel:+971586747123"> {props.icon} <span>+971 58 67 47 123</span></a></li>
            </ul>
          </nav>
          {/* {show == true && ( */}
          <div className="mobile_nav" id='mobile_id' >
            <div className="icon" >
              <FaTimes onClick={hideNav} />
            </div>
          </div>
          {/* )} */}

        </div>
      </div>
    </header>
  )
}

export default Header