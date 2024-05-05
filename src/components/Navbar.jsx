import React, { useRef } from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const blackMenu = useRef();

  const openMenu = () => {
    blackMenu.current.classList.add("aktiv");
  };

  const closeMenu = () => {
    blackMenu.current.classList.remove("aktiv");
  };

  return (
    <>
      <div className="mobile-menu position-fixed" ref={blackMenu}>
      <IoMdClose className='close-icon' onClick={closeMenu} />


        <nav className="mobile-links">
          <Link to="/what-we-do" className="nav-link fw-medium">What we do</Link>
          <Link to="/career" className="nav-link text-success fw-medium">Career</Link>
          <Link to="/contact" className="nav-link fw-medium">Contact</Link>
          <Link to="/blog" className="nav-link fw-medium">Blog</Link>
        </nav>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/"> <img src="/assets/images/logo.svg" alt="" /> </a>

          <button onClick={openMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/what-we-do" className="nav-link fw-medium">What we do</Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link text-success fw-medium">Career</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-medium">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link fw-medium">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
