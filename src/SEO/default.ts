const frontendUrl = import.meta.env.PUBLIC_FRONTEND_URL;
const commonDesc = "Site-Description";
const siteName = "TrivIQ";
const siteImg = frontendUrl + "/cta-1.png";
const author = "TrivIQ Private Limited";

export const defaultHead = {
    title: siteName,
    description: commonDesc,
    keywords: "trivia, quix, real-time, multiplayer",
    url: frontendUrl,
    imageUrl: siteImg,
    imageAlt: "Welcom to TrivIQ",
    author: author,
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteName,
        "url": frontendUrl,
        "image": siteImg,
        "description": commonDesc,
        "alternativeName": "Real-Time Trivia Website",
        "publisher": {
            "name": author,
            "url": frontendUrl,
        }
    },
}