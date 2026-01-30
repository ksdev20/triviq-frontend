export type LinkItem = {
  label: string;
  link: string
}

export type FooterColumnType = {
  heading: string;
  items: LinkItem[]
}

export const footerColumns: FooterColumnType[] = [
  {
    heading: "Play",
    items: [
      {
        label: "How it Works",
        link: "/how-it-works",
      },
      {
        label: "About Us",
        link: "/about-us",
      },
      {
        label: "Blog",
        link: "/blog",
      },
      {
        label: "Play now",
        link: "/lobby",
      },
      {
        label: "Sign up",
        link: "/sign-up",
      },
    ],
  },
  {
    heading: "Learn",
    items: [
      {
        label: "Community",
        link: "/community",
      },
      {
        label: "Support",
        link: "/support",
      },
      {
        label: "Leaderboards",
        link: "/leaderboards",
      },
      {
        label: "Tournaments",
        link: "/tournaments",
      },
      {
        label: "Mobile app",
        link: "/mobile-app",
      },
    ],
  },
  {
    heading: "Connect",
    items: [
      {
        label: "Instagram",
        link: "https://instagram.com",
      },
      {
        label: "X",
        link: "https://x.com",
      },
      {
        label: "Facebook",
        link: "https://facebook.com",
      },
      {
        label: "Reddit",
        link: "https://reddit.com",
      },
      {
        label: "Discord",
        link: "https://discord.com",
      },
    ],
  },
];

export const legalLinks = [
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    link: "/tos",
  },
  {
    label: "Cookie Settings",
    link: "/cookie-settings",
  },
];
