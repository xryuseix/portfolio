import { AboutTable } from "@/components/about";
import { rows } from "@/components/data/about/techs";
import { columns } from "@/components/data/about";

export default function AboutTechsPage() {
  return (
    <section id="techs" className="w-screen py-[2%] px-[10%]">
      <div className="text-2xl m-2 text-left">💻 Techs</div>
      <AboutTable columns={columns} rows={rows} />
    </section>
  );
}
