import { playLink, signupLink } from "../../config/components/Navbar";

export const featuresSection = {
  textObj: {
    top: "Features",
    head: "Built for real competition",
    subtitle: "Play instantly, anywhere, anytime",
  },
  featureCards: [
    {
      textObj: {
        top: "Live",
        head: "Real-time multiplayer battles",
        subtitle: "Face opponents in instant trivia matches",
      },
      img: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    },
    {
      textObj: {
        head: "Cross-platform everywhere",
        subtitle: "Switch between devices without losing progress",
      },
      img: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    },
    {
      textObj: {
        head: "Thousands of questions",
        subtitle: "Explore diverse categories and endless topics",
      },
      img: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    },
  ],
};

export const rewardsSection = {
  textObj: {
    top: "Rewards",
    head: "Why players choose us",
    subtitle: "Join thousands competing daily",
  },
  featureCards: [
    {
      textObj: {
        top: "Social",
        head: "Challenge your friends",
        subtitle: "Send invites and settle debates",
      },
      img: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    },
    {
      textObj: {
        top: "Global",
        head: "Compete worldwide",
        subtitle: "Test yourself against skilled players",
      },
      img: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    },
    {
      textObj: {
        top: "Growth",
        head: "Expand your mind",
        subtitle: "Learn while you play and climb ranks",
      },
      img: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    },
  ],
};

export const testimonialSection = {
  textObj: {
    head: "WHAT PLAYERS SAY",
    subtitle: "Read from our communuity",
  },
  reviews: [
    {
      stars: 5,
      text: "The competition here is real and the matches are fast. I've never felt more challenged.",
      reviewer: {
        profile: "/review-1-profile.jpg",
        name: "Marcus Chen",
        extra: "Competitive gamer",
      },
    },
    {
      stars: 5,
      text: "I play every day now. The variety of questions keeps me coming back for more. ",
      reviewer: {
        profile: "/review-2-profile.jpg",
        name: "Sarah Mitchell",
        extra: "Trivia enthusiast",
      },
    },
    {
      stars: 5,
      text: "Finally found a platform where my knowledge actually matters against real opponents.",
      reviewer: {
        profile: "/review-3-profile.jpg",
        name: "James Rodriguez",
        extra: "Strategy player",
      },
    },
  ],
};

export const playBtn = {
  label: "Play",
  link: "/lobby",
  variant: "primary",
};

export const signupBtn = {
  label: "Sign up",
  link: "/sign-up",
  variant: "outlined",
};

export const ctaSection1 = {
  textObj: {
    head: "START PLAYING RIGHT NOW",
    subtitle:
      "No downloads needed. Jump into a match in seconds and begin your climb.",
  },
  ctaButtons: [
    playBtn,
    signupBtn,
  ],
  img: {
    url: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    alt: "Cta Section Image"
  }
};
