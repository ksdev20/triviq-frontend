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
    opacity: [0, 1],
    scale: [0.3, 1.0],
    y: [200, 0],
    transition: {
      duration: 0.3,
      ease: "easeOut",
      times: [0, 1],
    },
  },
  exit: {
    opacity: [1, 0],
    scale: [1, 0.3],
    y: [0, 200],
    transition: {
      duration: 0.3,
      ease: "easeIn",
      times: [0, 1],
    },
  },
};
