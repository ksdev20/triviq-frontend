import { Sling } from "hamburger-react";
import { BoolStateHook } from "../hooks/BoolStateHooks";
import "../../styles/components/Navbar.css";
import {
  homeLink,
  navMenu,
  playLink,
  NavMenuAnimationVariants,
  loginLink,
  signupLink,
} from "../../config/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { state: menuOpen, onClick } = BoolStateHook();
  return (
    <nav className="navbar">
      <div className="mobile-navbar-container">
        <div
          className="nav-btn"
        >
          <div className="sr-only">Toggle Menu Bar</div>
          <Sling size={24} onToggle={onClick} label="Toggle Menu Bar button"/>
        </div>
        <a href={homeLink} className="logo-sec">
          <div className="part1">Triv</div>
          <div className="part2">IQ</div>
        </a>
        <a href={playLink} className="btn primary">
          Play
        </a>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            role="menubar"
            aria-label="Menu bar"
            className="mobile-nav-menu"
            variants={NavMenuAnimationVariants}
            initial="hidden"
            animate="visible"
            key="box"
            exit="exit"
          >
            {navMenu.map((i, idx) => (
              <li key={idx} role="menuitem" aria-label={"Link to " + i.label + " page."}>
                <a href={i.link}>{i.label}</a>
              </li>
            ))}
            <li className="border-t border-t-[#e5e7eb] mb-5"></li>
            <li>
              <a href={signupLink}>Sign Up</a>
            </li>
            <li>
              <a href={loginLink}>Login</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="pc-navbar-container">
        <a href={homeLink} className="logo-sec">
          <div className="part1">Triv</div>
          <div className="part2">IQ</div>
        </a>
        <ul className="nav-links">
          {navMenu.map((i, idx) => (
            <li key={idx}>
              <a href={i.link}>{i.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-buttons">
          <a href={signupLink} className="btn outlined">
            Sign Up
          </a>
          <a href={playLink} className="btn primary">
            Play
          </a>
        </div>
      </div>
    </nav>
  );
}
