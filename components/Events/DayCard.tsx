import Image from "next/image";
import Link from "next/link";

export default async function DayCard({
  day,
  quote,
  link,
  tags,
  image,
}: {
  image: string;
  link: string;
  day: string;
  quote: string;
  tags: string[];
}) {
  return (
    <Link
      href={link}
      className="relative max-w-6xl w-full h-60 overflow-hidden rounded-lg shadow-lg group mx-auto px-6"
    >
      <Image
        src={image}
        alt="poster"
        className="w-full h-full transition-transform group-hover:scale-105 duration-200  object-cover"
        fill
      />
      <div className="absolute inset-0 flex flex-col gap-1 items-start justify-end p-4 text-white">
        <p className="text-2xl font-semibold">{day}</p>
        <p className="text-sm font-light">{quote}</p>
        <div className="flex flex-row gap-2 text-xs">
          {(tags ?? []).map((tag) => (
            <p className=" bg-black px-3 py-2"># {tag}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}
