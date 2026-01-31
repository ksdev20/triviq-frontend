export type ReviewType = {
  stars: number;
  text: string;
  reviewer: {
    profile: string;
    name: string;
    extra: string;
  };
};

export function ReviewCard({ review }: { review: ReviewType }) {
  const { stars, text, reviewer } = review;
  const { profile, name, extra } = reviewer;
  return (
    <div className="review-card">
      <div className="mb-3 text-xl">{"★".repeat(stars)}</div>
      <p className="lg:text-xl">{text}</p>
      <div className="flex items-center gap-4">
        <img
          src={profile}
          alt="Reviewer Profile Image"
          className="profile-pic"
        />
        <div className="flex flex-col gap-0.5 xl:gap-1 text-sm 2xl:text-xl">
          <p className="font-semibold">{name}</p>
          <span>{extra}</span>
        </div>
      </div>
    </div>
  );
}
