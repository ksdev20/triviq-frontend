import { ctaSection1 } from "../../config/components/home-page";
import "../Features/TopTextSection";
import { TopTextSection } from "../Features/TopTextSection";

export function CtaSection1() {
  const { textObj, ctaButtons, img } = ctaSection1;
  const { url, alt } = img;
  return (
    <section className="cta-section flex-col-icenter gap-10 lg:gap-20 consistent-padding-x consistent-padding-y">
      <div className="flex-col-icenter w-full text-center gap-5">
        <TopTextSection
          textObj={textObj}
          customClass="consistent-text-section"
        />
        <div className="cta-buttons flex items-center gap-5">
          {ctaButtons.map((i, idx) => (
            <a key={idx} href={i.link} className={"btn " + i.variant}>
              {i.label}
            </a>
          ))}
        </div>
      </div>
      <img src={url} alt={alt} className="rounded-xl" loading="lazy" decoding="async" fetchPriority="low"/>
    </section>
  );
}
