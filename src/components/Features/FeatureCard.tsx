import { TextObjType, TopTextSection } from "./TopTextSection";

export type FeatureCardType = {
  textObj: TextObjType;
  img: string;
};

export function FeatureCard({
  obj,
  variant = "default",
}: {
  obj: FeatureCardType;
  variant?: "default" | "img-right";
}) {
  return (
    <div className={`feature-card ${variant}`}>
      <TopTextSection tag="h3" textObj={obj.textObj} />
      <img src={obj.img} alt="" loading="lazy" decoding="async" fetchPriority="low" />
    </div>
  );
}
