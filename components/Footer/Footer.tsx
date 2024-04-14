import Link from "next/link";
import Container from "../common/Container";
import { socialLinks } from "@/constants/index";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-5 text-white bottom-0 border-t-[1px]">
      <Container>
        <p className="text-sm  text-center font-light">
          Built by Devs who don't know how to reverse a Linked List
        </p>
        <div className="flex flex-row justify-center items-center gap-3 mt-2 text-sm  font-extralight">
          <a href="https://www.linkedin.com/in/vikram-palani/" target="_blank">
            <p className="text-[#009871]">Vikram</p>
          </a>
          <p>🚀</p>
          <a href="">
            <p className="text-[#009871]">Pravin</p>
          </a>
        </div>
      </Container>
    </footer>
  );
}
