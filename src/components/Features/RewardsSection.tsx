import { rewardsSection } from "../../config/components/home-page";
import { FeatureCard } from "./FeatureCard";
import { TopTextSection } from "./TopTextSection";
import "../../styles/components/features-section.css";

export function RewardsSection() {
  return (
    <section className="features-section rewards consistent-padding-x consistent-padding-y">
      <TopTextSection textObj={rewardsSection.textObj} />
      <div className="features-cards">
        <div className="g1">
          <FeatureCard
            obj={rewardsSection.featureCards[0]}
            key={0}
            variant={"img-right"}
          />
        </div>
        <div className="g2">
          <FeatureCard
            obj={rewardsSection.featureCards[1]}
            key={1}
            variant={"default"}
          />
          <FeatureCard
            obj={rewardsSection.featureCards[2]}
            key={2}
            variant={"default"}
          />
        </div>
      </div>
    </section>
  );
}
