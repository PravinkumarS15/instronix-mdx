import Container from "../common/Container";
import { getEventsMeta } from "@/lib/actions";

import EventsCard from "./EventsCard";
import Link from "next/link";
import DayCard from "./DayCard";

function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default async function Events() {
  const posts = await getEventsMeta();
  if (!posts) {
    return (
      <p className=" mt-10 text-center mt-30">Sorry :( No posts found - 😢</p>
    );
  }

  const shuffledPosts = shuffleArray(posts);
  const random8Posts = shuffledPosts.slice(0, 9);

  return (
    <section className="py-20">
      <Container className="flex flex-col gap-5">
        <p className="section-heading text-white">Events</p>
        <DayCard
          day="Day 1 | 25-April-2024"
          link="/events/day1"
          image="/assets/day1.webp"
          tags={["Fun", "Tech", "Party"]}
          quote="A day filled fun, joy and happiness"
        />
        <DayCard
          day="Day 2 | 26-April-2024"
          link="/events/day2"
          image="/assets/day2.jpeg"
          tags={["Fun", "Tech", "Party"]}
          quote="A day filled fun, joy and happiness"
        />
        <div>
          <div className="flex flex-wrap w-full items-center justify-center gap-10 py-10">
            {random8Posts.map((post: any) => {
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

        <Link href="/events">
          <p className="text-center px-5 py-4  text-white max-w-max mx-auto bg-[#009871] hover:bg-[#009871]/85 rounded-[40px]">
            Explore All Events
          </p>
        </Link>
      </Container>
    </section>
  );
}
