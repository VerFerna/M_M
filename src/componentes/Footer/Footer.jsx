import React from 'react';
import './Footer.css';
import footer_logo from '../Img/logo.png';

const Footer = () => {
  return (
<div className="footer">
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Margarita Maia</p>
    </div>


      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>

</div>
  )
}

export default Footer