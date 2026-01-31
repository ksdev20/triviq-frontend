export type TextObjType = {
  top?: string;
  head?: string;
  subtitle?: string;
};

export function TopTextSection({
  textObj,
  variant = "default",
  tag = "h2",
  customClass
}: {
  textObj: TextObjType;
  variant?: "default" | "text-center";
  tag?: "h2" | "h3";
  customClass?: string;
}) {
  const { top, head, subtitle } = textObj;
  return (
    <section
      className={`text-section ${variant === "text-center" ? "text-center" : ""} ${customClass}`}
    >
      {top && <span>{top}</span>}
      {head && tag === "h2" ? <h2>{head}</h2> : <h3>{head}</h3>}
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
