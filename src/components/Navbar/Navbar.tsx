import { Sling } from "hamburger-react";
import { BoolStateHook } from "../hooks/BoolStateHooks";
import "../../styles/components/Navbar.css";
import {
  homeLink,
  menuVariants,
  navMenu,
  playLink,
  NavMenuAnimationVariants,
} from "../../config/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { state: menuOpen, onClick } = BoolStateHook();
  return (
    <nav className="navbar">
      <div className="mobile-navbar-container">
        <button className="nav-btn">
          <Sling size={24} onToggle={onClick} />
        </button>
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
            className="mobile-nav-menu"
            variants={NavMenuAnimationVariants}
            initial="hidden"
            animate="visible"
            key="box"
            exit="exit"
          >
            {navMenu.map((i, idx) => (
              <li key={idx}>
                <a href={i.link}>{i.label}</a>
              </li>
            ))}
            <li className="border-t border-t-[#e5e7eb] mb-5"></li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="pc-navbar-container">
        <div className="logo-sec">
          <img src="" alt="" />
          <div></div>
        </div>
        <div className="nav-links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">How it works</a>
          <a href="#">Resources</a>
        </div>
        <button className="btn primary">Play</button>
      </div>
    </nav>
  );
}
