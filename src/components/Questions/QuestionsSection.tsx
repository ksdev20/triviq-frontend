import { questionsSection } from "../../config/components/home-page";
import { TopTextSection } from "../Features/TopTextSection";

export function QuestionsSection() {
  const { textObj, questions, textObj2, contactBtn } = questionsSection;
  const { link, label, variant } = contactBtn;
  return (
    <section className="questions-section f-col gap-10 md:gap-20 bg-[var(--secondary)] questions-section consistent-padding-x consistent-padding-y">
      <TopTextSection
        textObj={textObj}
        customClass="consistent-text-section"
        variant="default"
      />
      <ul className="questions-list">
        {questions.map((i, idx) => (
          <li key={idx}>
            <div className="question-card f-col">
              <header className="font-bold">{i.question}</header>
              <p>{i.answer}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="f-col gap-5 sm:gap-10">
        <TopTextSection textObj={textObj2} customClass="consistent-text-section" />
        <a href={link} className={"btn " + variant}>
          {label}
        </a>
      </div>
    </section>
  );
}
