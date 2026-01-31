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
  ctaButtons: [playBtn, signupBtn],
  img: {
    url: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    alt: "Cta Section Image",
  },
};

export const questionsSection = {
  textObj: {
    head: "Questions",
    subtitle: "Everything you need to know about playing",
  },
  questions: [
    {
      question: "How do I start playing?",
      answer:
        "Create an account or sign in with your existing credentials. Choose a category, find an opponent, and the match begins instantly. You'll answer questions in real-time while competing against other players.",
    },
    {
      question: "Can I play on mobile?",
      answer:
        "Yes. Our platform works seamlessly across phones, tablets, and computers. Your progress syncs automatically so you can switch devices without any interruption.",
    },
    {
      question: "What categories are available?",
      answer:
        "We offer over fifty categories ranging from history and science to pop culture and sports. New topics are added regularly to keep the competition fresh and engaging.",
    },
    {
      question: "How are rankings calculated?",
      answer:
        "Your rank depends on wins, accuracy, and speed. The more matches you win and the faster you answer correctly, the higher you climb. Rankings reset monthly so everyone has a chance to compete.",
    },
    {
      question: "Can I challenge friends?",
      answer:
        "Absolutely. Send invites to friends and play private matches whenever you want. You can also see how your scores compare on the leaderboards.",
    },
    {
      question: "Is the platform free?",
      answer:
        "Yes, all core features are completely free. Play unlimited matches, compete in tournaments, and climb the rankings without spending anything.",
    },
  ],
  textObj2: {
    head: "Need more help?",
    subtitle: "Reach out to our team anytime",
  },
  contactBtn: {
    label: "Contact",
    link: "/contact",
    variant: "outlined"
  }
};


export const newsLetterSection = {
  textObj: {
    head: "Stay updated on new tournaments",
    subtitle: "Get notified about upcoming events, new categories, and exclusive challenges.",
  },
  note: "By clicking Subscribe you're confirming that you agree with our ",
  img: {
    url: "https://cdn.pixabay.com/photo/2025/11/28/14/40/sea-9983074_1280.jpg",
    alt: "NewsLetter Section Image"
  }
}