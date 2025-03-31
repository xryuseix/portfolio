import { title } from "@/components/primitives";

export default function AboutLayout({
  career,
  works,
  techs,
  researches,
  others,
}: {
  career: React.ReactNode;
  works: React.ReactNode;
  techs: React.ReactNode;
  researches: React.ReactNode;
  others: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-screen text-center justify-center">
        <div>
          <h1 className={title()}>About Me</h1>
          {career}
          {works}
          {techs}
          {researches}
          {others}
        </div>
      </div>
    </section>
  );
}
