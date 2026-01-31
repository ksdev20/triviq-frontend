import { testimonialSection } from "../../config/components/home-page";
import {  TopTextSection } from "../Features/TopTextSection";
import { ReviewCard } from "./ReviewCard";

export function TestimonialSection() {
    const { textObj, reviews} = testimonialSection;
  return (
    <section className="testimonial-section consistent-padding-x">
        <TopTextSection textObj={textObj} />
        <ul className="review-cards">
            {reviews.map((i, idx) => <ReviewCard key={idx} review={i} />)}
        </ul>
    </section>
  );
}
