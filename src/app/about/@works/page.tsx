import { AboutTable } from "@/components/about";
import { rows } from "@/components/data/about/works";
import { columns } from "@/components/data/about";

export default function AboutWorksPage() {
  return (
    <section id="works" className="w-screen py-[2%] px-[10%]">
      <div className="text-2xl m-2 text-left">💼 Works</div>
      <AboutTable columns={columns} rows={rows} />
    </section>
  );
}
