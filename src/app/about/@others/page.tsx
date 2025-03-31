import { AboutTable } from "@/components/about";
import { rows } from "@/components/data/about/others";
import { columns } from "@/components/data/about";

export default function AboutOthersPage() {
  return (
    <section id="others" className="w-screen py-[2%] px-[10%]">
      <div className="text-2xl m-2 text-left">❓ Others</div>
      <AboutTable columns={columns} rows={rows} />
    </section>
  );
}
