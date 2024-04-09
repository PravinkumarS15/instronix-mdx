import Container from "../common/Container";
import { getEventsMeta } from "@/lib/actions";

import EventsCard from "./EventsCard";

export default async function Events() {
  const posts = await getEventsMeta();

  if (!posts) {
    return (
      <p className=" mt-10 text-center mt-30">Sorry :( No posts found - 😢</p>
    );
  }

  return (
    <section className="pt-20 flex-1 ">
      <Container>
        <p className="section-heading">Events</p>

        <div className="grid grid-cols-4 gap-10 py-10">
          {posts.map((post) => {
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
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
