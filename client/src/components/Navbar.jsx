import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import style from "./style.module.css";
import FlipLink from "./FlipLink";

const navs = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "#services" },
  { id: 3, name: "Products", link: "#products" },
  { id: 4, name: "About", link: "#about" },
  { id: 5, name: "Case Studies", link: "#caseStudy" },
];

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setShowNav(false);
    }
  };

  const handleNavigation = (navLink) => {
    if (navLink === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (location.pathname !== '/') {
        navigate('/');
      }
      // Add a slight delay to allow the route change before scrolling
      setTimeout(() => {
        const element = document.querySelector(navLink);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.container}>
      <motion.div
        initial={{ top: "1rem" }}
        animate={{
          top: scrolling ? 0 : "1rem",
          transition: { duration: 0.3 },
        }}
        className={style.navbarContainer}
      >
        <motion.div
          initial={{ borderRadius: "10px" }}
          animate={{
            borderRadius: scrolling ? "0 0 10px 10px" : "10px",
            transition: { duration: 0.3 },
          }}
          className={style.sticky}
        >
          <div>

          </div>
          <div className={style.navs}>
            {isMobile ? (
              <div
                className={style.hamburger}
                onClick={() => setShowNav(!showNav)}
              >
                &#9776;
              </div>
            ) : (
              <ul className={style.navList}>
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className={location.pathname === nav.link ? style.active : ''}
                    onClick={() => handleNavigation(nav.link)}
                  >
                    <FlipLink name={nav.name} link={nav.link}>{nav.name}</FlipLink>
                  </li>
                ))}
              </ul>
            )}
            {isMobile && showNav && (
              <div className={style.dropdownMenu}>
                {navs.map((nav) => (
                  <button
                    onClick={() => handleNavigation(nav.link)}
                    key={nav.id}
                    className={`${style.dropdownItem} ${location.pathname === nav.link ? style.active : ''}`}
                  >
                    {nav.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          {!isMobile && (
            <div className={style.btnContainer}>
              <Link className={style.navbarBtn} to='/contact'>Contact Us</Link>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
