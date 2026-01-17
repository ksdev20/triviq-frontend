const frontendUrl = import.meta.env.PUBLIC_FRONTEND_URL;
const commonDesc = "Site-Description";
const siteName = "Site-Name";
const siteImg = frontendUrl + "/url";
const author = "Company Team";

export const defaultHead = {
    title: siteName,
    description: commonDesc,
    keywords: "keywords",
    url: frontendUrl,
    imageUrl: siteImg,
    imageAlt: "Site Image",
    author: author,
    jsonLd: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteName,
        "url": frontendUrl,
        "image": siteImg,
        "description": commonDesc,
        "alternativeName": "Anime Listicle hub",
        "publisher": {
            "name": author,
            "url": frontendUrl,
        }
    },
}