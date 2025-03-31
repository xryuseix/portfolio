import { AboutTable } from "@/components/about";
import { rows } from "@/components/data/about/career";
import { columns } from "@/components/data/about";

export default function AboutCareerPage() {
  return (
    <section id="career" className="w-screen py-[2%] px-[10%]">
      <div className="text-2xl m-2 text-left">📑 Career</div>
      <AboutTable columns={columns} rows={rows} />
    </section>
  );
}
