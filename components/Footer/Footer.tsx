import Link from "next/link";
import Container from "../common/Container";
import { socialLinks } from "@/constants/index";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="py-5 bg-black/50 text-white bottom-0">
      <Container>
        <p className="text-sm  text-center font-light">
          Made by Developer who don't know how to reverse a Linked List
        </p>
      </Container>
    </section>
  );
}
