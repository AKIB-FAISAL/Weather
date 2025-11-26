import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} | Developed by <strong>MD Akib Faisal</strong></p>
    </footer>
  );
};

export default Footer;
