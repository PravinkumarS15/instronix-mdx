import Link from "next/link";
import Container from "../common/Container";
import { footerLinks } from "@/constants/index";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bottom-0 mt-12">
      <div className="flex flex-row items-center justify-center gap-6 my-5">
        {footerLinks?.map((link: any, index: number) => (
          <a
            href={link?.mail ? `mailto:${link?.link}` : link?.link}
            key={index}
            type=""
          >
            <Image
              src={link?.icon}
              alt="icon"
              className="w-10 h-10 object-cover"
              width={40}
              height={40}
            />
          </a>
        ))}
      </div>
      <div className="border-t-[2px] border-white py-5">
        <Container>
          <p className=" text-sm lg:text-sm text-center font-light text-white">
            Built by Devs who don't know how to reverse a Linked List
          </p>
          <div className="flex flex-row justify-center items-center gap-3 mt-2 text-sm  font-extralight">
            <a
              href="https://www.linkedin.com/in/vikram-palani/"
              target="_blank"
            >
              <p className="text-[#009871]">Vikram</p>
            </a>
            <Image src="/assets/troll.png" alt="gif" width={50} height={50} />
            <a href="">
              <p className="text-[#009871]">Pravin</p>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
