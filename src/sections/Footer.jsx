import React from "react";
import { socialImgs } from "../constants";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Blog Link */}
        <div className="flex flex-col justify-center items-center">
          <a href="https://medium.com/@www.subhamg26/about" className="text-blue-400 hover:underline">
            Visit My Blog
          </a>
        </div>

        {/* Social Icons */}
        <div className="socials flex gap-4 justify-center mt-4">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              href={img.url}
              key={img.url}
            >
              <img src={img.imgPath} alt="social-icon" className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center mt-4">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Subhy | All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
