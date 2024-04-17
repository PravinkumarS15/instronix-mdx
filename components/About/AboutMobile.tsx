import { aboutContent } from "@/constants";
import { useRef } from "react";
import Image from "next/image";
import Container from "../common/Container";

export default function AboutMobile() {
  return (
    <section className="relative text-white" id="about-us">
      <div className="pt-10 my-20">
        <p className="section-heading mb-5">About Us</p>
        <div className="flex flex-col gap-10">
          {aboutContent.map((content: IAboutContent, index: number) => {
            return (
              <div
                key={index}
                className="w-screen px-5 lg:px-20 flex items-center justify-center"
              >
                <div className=" max-w-7xl mx-auto">
                  <div className="w-full flex gap-5 flex-col lg:flex-row items-center justify-center">
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                      <Image
                        src={content.image}
                        alt="about_image"
                        className="object-cover"
                        width={550}
                        height={300}
                      />
                    </div>

                    <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-left gap-4 px-3">
                      <p className="text-3xl font-light text-center lg:text-left">
                        {content.title}
                      </p>
                      <p className="text-xl font-thin">{content.description}</p>
                      {content?.link && (
                        <a href={content?.link}>
                          <p className="text-left px-5 py-4 mx-auto lg:mx-0  text-white max-w-max bg-[#009871] hover:bg-[#009871]/85 rounded-[40px]">
                            Know more
                          </p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
