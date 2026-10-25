import { TeamSection } from "../team-section";

export const metadata = {
  title: "Research Team | Connected Minds",
  description:
    "Meet and learn more about the Connected Minds research team and affiliates.",
};

export default function TeamPage() {
  return (
    <div className="max-w-[1200px] mx-auto pb-20">
      <TeamSection />
    </div>
  );
}
