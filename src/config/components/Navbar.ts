import { frontendUrl } from "../../data/globalData";

export const navMenu = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: frontendUrl + "/about",
  },
  {
    label: "How it works",
    link: frontendUrl + "/how-it-work",
  },
];

export const navRightButtons = [
  {
    label: "Sign in",
    link: frontendUrl + "/sign-in",
  },
  {
    label: "Play",
    link: frontendUrl + "/lobby",
  },
];

export const homeLink = "/";
export const playLink = "/play";

export const menuVariants = {
  hidden: { opacity: 0, scale: 0.3, y: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    y: 200,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export const NavMenuAnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 200,
  },
  visible: {
    opacity: [0, 0.7, 1, 1, 1],
    scale: [0.3, 1.05, 0.95, 1.02, 1],
    y: [200, -10, 5, -2, 0],
    transition: {
      duration: 0.8,
      ease: "easeOut",
      times: [0, 0.2, 0.5, 0.7, 1],
    },
  },
  exit: {
    opacity: [1, 1, 1, 0.7, 0],
    scale: [1, 0.95, 1.05, 0.9, 0.3],
    y: [0, -5, 10, -20, 200],
    transition: {
      duration: 0.8,
      ease: "easeIn",
      times: [0, 0.2, 0.5, 0.7, 1],
    },
  },
};
