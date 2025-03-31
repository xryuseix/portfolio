import { AboutTable } from "@/components/about";
import { rows } from "@/components/data/about/researches";
import { columns } from "@/components/data/about";

export default function AboutResearchesPage() {
  return (
    <section id="researches" className="w-screen py-[2%] px-[10%]">
      <div className="text-2xl m-2 text-left">🧪 Researches</div>
      <AboutTable columns={columns} rows={rows} />
    </section>
  );
}
