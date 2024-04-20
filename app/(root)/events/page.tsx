import Container from "@/components/common/Container";
import { getEventsMeta } from "@/lib/actions";
import EventsCard from "@/components/Events/EventsCard";
import DayCard from "@/components/Events/DayCard";



export default async function Events() {
  const posts = await getEventsMeta();
  if (!posts) {
    return (
      <p className=" mt-10 text-center mt-30">Sorry :( No Events Found - 😢</p>
    );
  }

  return (
    <section className="pt-20">
      <Container className="flex flex-col items-center gap-6">
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

        <div className="flex flex-wrap w-full items-center justify-center gap-10 py-10">
          {posts.map((post: any) => {
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
      </Container>
    </section>
  );
}
