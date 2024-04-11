// import getFormattedDate from "@/lib/getFormattedDate";
import { getEventsByName, getEventsMeta } from "@/lib/actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "highlight.js/styles/github-dark.min.css";
import Hero from "@/components/Hero/Hero";

type Props = {
  params: {
    eventId: string;
  };
};

export async function generateStaticParams() {
  const events = await getEventsMeta();

  if (!events) return [];

  return events.map((event) => ({
    eventId: event.id,
  }));
}

export async function generateMetadata({ params: { eventId } }: Props) {
  const event = await getEventsByName(`events/${eventId}.mdx`); //deduped!

  if (!event) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: event.meta.title,
  };
}

export default async function Post({ params: { eventId } }: Props) {
  const event = await getEventsByName(`events/${eventId}.mdx`); //deduped!

  if (!event) notFound();

  const { meta, content } = event;

  // const pubDate = getFormattedDate(meta.date);

  return (
    <div className="relative max-w-6xl mx-auto px-5 mt-20 mb-8 flex flex-col gap-5 ">
      <div className="flex flex-row gap-2 ">
        <div className="w-2/5 sticky top-28  flex flex-col items-start justify-center h-full gap-4">
          <p className=" text-left text-5xl font-bold">{meta.title}</p>
          <div className="overflow-hidden ">
            <Image
              src={meta.image}
              alt="poster"
              width={320}
              height={320}
              className="object-cover"
            />
          </div>
          <a href={meta.link} target="_blank">
            <button className="bg-black  text-white px-8 py-4 text-2xl rounded-[30px]">
              Register
            </button>
          </a>
        </div>

        <div className=" relative w-3/5 px-5  text-black flex flex-col gap-2">
          <div className="h-24 bg-gradient-to-b from-white to-transparent via-opacity-0 sticky top-20"></div>
          <article className="prose prose-xl">{content}</article>
          <Link href="/" className="mt-5">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
