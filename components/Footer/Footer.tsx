import Link from "next/link";
import Container from "../common/Container";
import { socialLinks } from "@/constants/index";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="py-5 bg-black/90 text-white bottom-0">
      <Container>
        <div className="flex justify-between items-center">
          <p className="text-4xl font-light">Intronix</p>
          {socialLinks.map((link, index) => {
            return (
              <a href={link.href} key={index} target="_blank">
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={40}
                  height={40}
                />
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
