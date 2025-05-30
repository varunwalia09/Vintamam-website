import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-fixed">
    <div className="footer-left">
  <img 
    src="src\assets\logo-light.svg" 
    alt="Logo" 
    className="footer-logo" 
  />
  {/* <p className="footer-para">
    This is a sample paragraph under the logo describing something about the company or footer.
  </p> */}
  <div className="vintaverse">
    <h1>VintaVerse</h1>
    <p>©copyright</p>
  </div>
</div>


      <div className="footer-right">
        <div className="footer-sections">
          <Section 
            title="Navbar" 
            items={['Home', 'About', 'Contact']} 
          />
          <Section 
            title="Services" 
            items={['Design', 'Development', 'Marketing']} 
          />
          <Section 
            title="Resources" 
            items={['Blog', 'Docs', 'FAQs']} 
          />
        </div>

        <div className="footer-newsletter">
          <h3 className="footer-heading">
            Newsletter
            <AnimatedLine />
          </h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Section = ({ title, items }) => (
  <div className="footer-section">
    <h3 className="footer-heading">
      {title}
      <AnimatedLine />
    </h3>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const AnimatedLine = () => (
  <span className="animated-line"></span>
);

export default Footer;
