import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start">
        <div className="container p-4">
          <div className="row justify-content-center p-2">
            <div className="w-100 col-lg-3 col-md-6 p-0 text-center">
            <ul className="list-inline m-0 d-flex justify-content-evenly justify-content-lg-evenly">
                <li className="list-inline-item">
                  <a href="#!" className="text-light" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                <a href="#!" className="text-light">
                <i className="bi bi-envelope-fill"></i>
                </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-light" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-light" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
