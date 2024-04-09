// import getFormattedDate from "@/lib/getFormattedDate";
import { getEventsByName, getEventsMeta } from "@/lib/actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "highlight.js/styles/github-dark.min.css";

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
    <div className="max-w-4xl mx-auto px-5 mt-24 mb-8 flex flex-col gap-5 ">
      <p className=" mt-2 text-left text-5xl font-bold">{meta.title}</p>
      <div className="w-72 h-auto overflow-hidden mx-auto">
        <Image
          src={meta.image}
          alt="poster"
          width={900}
          height={900}
          className=" object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 mt-10 mb-10 text-black flex flex-col gap-2">
        <article className="prose prose-xl">{content}</article>
        <a href={meta.link} target="_blank">
          <button className="bg-black text-white px-6 py-3 text-xl rounded-[10px]">
            Register
          </button>
        </a>
        <Link href="/" className="mt-5">
          Back to home
        </Link>
      </div>
    </div>
  );
}
