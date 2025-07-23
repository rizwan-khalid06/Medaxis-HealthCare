import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img className='nav-logo' src="./images/wmremove-transformed__2_-removebg-preview (2).png" alt="Logo" /> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className='link' to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
              </li>
              <li className="nav-item">
                <Link className='link' to="/about"><FontAwesomeIcon icon={faPeopleGroup} /> About Us</Link>
              </li>
        

             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
