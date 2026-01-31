import { featuresSection } from "../../config/components/home-page";
import { FeatureCard } from "./FeatureCard";
import { TopTextSection } from "./TopTextSection";
import "../../styles/components/features-section.css";

export function FeaturesSection() {
  return (
    <section className="features-section consistent-padding-x consistent-padding-y">
      <TopTextSection textObj={featuresSection.textObj} />
      <div className="features-cards">
        <div className="g1">
          <FeatureCard
            obj={featuresSection.featureCards[0]}
            key={0}
            variant={"img-right"}
          />
        </div>
        <div className="g2">
          <FeatureCard
            obj={featuresSection.featureCards[1]}
            key={1}
            variant={"default"}
          />
          <FeatureCard
            obj={featuresSection.featureCards[2]}
            key={2}
            variant={"default"}
          />
        </div>
      </div>
    </section>
  );
}
