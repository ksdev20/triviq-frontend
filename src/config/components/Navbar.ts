export const navMenu = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "How it works",
    link: "/how-it-work",
  },
];

export const navRightButtons = [
  {
    label: "Sign in",
    link: "/sign-in",
  },
  {
    label: "Play",
    link: "/lobby",
  },
];

export const homeLink = "/";
export const playLink = navRightButtons[1].link;
export const signupLink = "/signup";
export const loginLink = "/login";

export const NavMenuAnimationVariants = {
  hidden: {
    opacity: [0, 0],
    scale: [0.3, 0.3],
    y: [200, 200],
    transition: {
      duration: 0.01, // instant hide
    },
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
