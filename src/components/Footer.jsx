import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
  return (
    <footer className={`footer bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2023 Texthandler. All rights reserved.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/nouman.shahid.75286?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
