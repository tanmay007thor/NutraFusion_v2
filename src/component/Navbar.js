import React, { useState } from "react";
import Logo from '../img/Nutrafusion.png'
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [click, setClick] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    setClick(!click);
  };

  return (
    <header className={`header ${isNavOpen ? "nav-open" : ""}`}>
      <a href="#">
        <img
          className="logo"
          alt="Nutrafusion logo"
          src={Logo}
        />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button
        className={`btn-mobile-nav ${
          click ? (isNavOpen ? "" : "hidden") : isNavOpen ? "hidden" : ""
        }`}
        onClick={handleNavToggle}
      >
        <ion-icon
          className="icon-mobile-nav"
          name={`${click ? "close" : "menu"}-outline`}
        ></ion-icon>
      </button>
    </header>
  );
}
