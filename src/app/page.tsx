import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import { Spacer } from "@heroui/spacer";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { Technologies } from "@/components/technologies";
import { Stars } from "@/components/stars";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4 md:py-4">
      <section className="h-screen justify-center items-center p-4 mt-16">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>I&apos;m&nbsp;</span>
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

      <Stars />

      <section id="about" className="w-screen md:h-screen py-[2%] px-[10%]">
        <div className="md:flex justify-center">
          <div className="md:w-[30%] flex justify-center">
            <Image
              isBlurred
              isZoomed
              alt="xryuseix icon"
              src="/icon_400x400.jpg"
              height={300}
              width={300}
            />
          </div>
          <div className="md:w-[60%] mt-4 md:mt-0 ml-0 md:ml-4">
            <div className="flex flex-wrap">
              <span
                className={`${title({ color: "violet" })} whitespace-nowrap`}
              >
                Ryusei Ishikawa
              </span>
              <span className={title({ color: "foreground" })}>
                &nbsp;/&nbsp;
              </span>
              <span className={title({ color: "cyan" })}>xryuseix</span>
            </div>
            <Spacer y={12} />
            <Card>
              <CardBody className="text-lg p-4">
                <div className="m-2">
                  <span className="text-gray-300 font-light">Company: </span>
                  <Link
                    isExternal
                    color="foreground"
                    href="https://flatt.tech/"
                    className="hover:underline"
                  >
                    GMO Flatt Security Inc.
                  </Link>
                </div>
                <div className="m-2">
                  <span className="text-gray-300 font-light">Occupation: </span>
                  Security Researcher and Software Engineer
                </div>
              </CardBody>
            </Card>
            <Spacer y={4} />
            <div className="text-right font-bold mr-2">
              <Link color="primary" href="/about" className="hover:underline">
                View more information →
              </Link>
            </div>
          </div>
        </div>
        <Spacer y={2} />
        <Technologies />
      </section>
    </div>
  );
}
