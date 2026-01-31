import { newsLetterSection } from "../../config/components/home-page";
import { TopTextSection } from "../Features/TopTextSection";
export function NewsLetterSection() {
  const { textObj, note, img } = newsLetterSection;
  const { url: imageUrl, alt } = img;
  return (
    <section className="news-letter-section f-col consistent-padding-x consistent-padding-y">
      <div className="nls-container">
        <img
          src={imageUrl}
          alt={alt}
        />
        <div className="text-overlay f-col">
          <div className="text-overlay-container f-col">
            <TopTextSection textObj={textObj} customClass="consistent-text-section"/>
            <form className="f-col gap-3 md:gap-6">
              <div className="nl-main">
                <input type="text" placeholder="Enter your email" />
                <button className="btn text-black bg-white px-5 py-3">
                  Subscribe
                </button>
              </div>
              <p className="nl-note">
                {note}
                <a href="/tos" className="underline">Terms of Service</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
