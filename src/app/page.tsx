import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import { Spacer } from "@heroui/spacer";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4 md:py-4">
      <section className="h-screen justify-center items-center p-4 mt-16">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>I'm&nbsp;</span>
          <span className={title({ color: "cyan" })}>xryuseix&nbsp;</span>
          <span className={title()}>👋</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Security Researcher and Software Engineer.
          </div>
        </div>
        <Spacer y={16} />
        <div className="max-w-xl text-center justify-center">
          <Link
            className={buttonStyles({ variant: "bordered" })}
            href={"#about"}
          >
            About Me
          </Link>
        </div>
      </section>

      <section id="about" className="w-screen py-[2%] px-[10%] border-2">
        <div className="flex justify-center">
          <div className="w-[30%]">
            <Image
              isBlurred
              isZoomed
              alt="xryuseix icon"
              src="/icon_400x400.jpg"
              height={300}
              width={300}
            />
          </div>
          <div className="w-[60%]">
            <div>
              <span className={title({ color: "violet" })}>
                Ryusei Ishikawa
              </span>
              <span className={title({ color: "foreground" })}>
                &nbsp;/&nbsp;
              </span>
              <span className={title({ color: "cyan" })}>xryuseix</span>
            </div>
            <Spacer y={16} />
            <Card>
              <CardBody className="text-lg p-4">
                <div className="m-2">Company: GMO Flatt Security Inc.</div>
                <div className="m-2">
                  Occupation: Security Researcher and Software Engineer
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <Spacer y={8} />
        <Technologies />
      </section>
    </div>
  );
}
