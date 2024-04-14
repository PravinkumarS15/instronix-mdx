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
  const filteredPosts = posts?.filter((post: any) => post.when === "day1");

  return (
    <section className="py-20">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-3">
          <p className="section-heading text-white">Events</p>
          <p className="text-2xl text-[#009871]">Day 1 | 24-April-2024</p>
        </div>

        <div>
          <div className="flex flex-wrap w-full items-center justify-center gap-10 py-10">
            {filteredPosts.map((post: any) => {
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
        <p className="text-4xl text-center font-medium text-white mt-10">
          Don't miss out the fun from Day 2
        </p>
        <DayCard
          day="Day 2 | 25-April-2024"
          link="/events/day2"
          image="/assets/day2.jpeg"
          tags={["Fun", "Tech", "Party"]}
          quote="A day filled fun, joy and happiness"
        />
      </Container>
    </section>
  );
}
