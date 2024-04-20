// import getFormattedDate from "@/lib/getFormattedDate";
import { getEventsByName, getEventsMeta } from "@/lib/actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "highlight.js/styles/github-dark.min.css";
import Hero from "@/components/Hero/Hero";
import EventsCard from "@/components/Events/EventsCard";



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

  const posts = await getEventsMeta();
  const filteredPosts = posts?.filter((post: any) => post.type === meta.type);

  return (
    <div className="relative max-w-6xl mx-auto px-5 mt-28 lg:mt-20 mb-8  flex flex-col gap-5 text-white">
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-2 ">
        <div className="w-full lg:w-2/5 lg:sticky top-28  flex flex-col items-center lg:items-start justify-center h-full gap-10 lg:gap-4">
          <p className=" text-left text-4xl font-bold">{meta.title}</p>
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
            <button className="text-center px-5 py-4  text-white max-w-max mx-auto bg-[#009871] hover:bg-[#009871]/85 rounded-[40px]">
              Register Here !
            </button>
          </a>
        </div>

        <div className=" relative w-full lg:w-3/5 px-5  text-black flex flex-col gap-2">
          <div className="h-24 bg-gradient-to-b from-black to-transparent via-opacity-0 hidden lg:sticky top-20"></div>
          <article className="prose prose-lg lg:prose-xl text-white prose-h4:text-white prose-h3:text-white">
            {content}
          </article>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-4xl text-center font-medium text-white">
          You May also like
        </p>

        <div>
          <div className="flex flex-wrap w-full items-center justify-center gap-10 py-10">
            {filteredPosts?.map((post: any) => {
              return (
                <EventsCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  subTitle={post.description}
                  link={post.link}
                  tags={post.tags}
                  when={post.when}
                  image={post.image}
                  type={post.type}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
