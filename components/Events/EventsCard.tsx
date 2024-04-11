import Image from "next/image";
import Link from "next/link";

export default async function Events({
  id,
  title,
  link,
  when,
  tags,
  subTitle,
  image,
}: IImageCardProps) {
  return (
    <div className="relative max-w-xs h-96 overflow-hidden rounded-lg shadow-lg group">
      <Image
        src={image}
        alt="poster"
        className="w-full h-full transition-transform group-hover:scale-105 duration-200 object-cover"
        fill
      />
      <div className="absolute inset-0 flex flex-col gap-1 items-start justify-end bg-gradient-to-t from-black to-transparent p-4 text-white">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-sm font-light">{subTitle}</p>
        <div className="flex flex-row gap-2 text-xs">
          {(tags ?? []).map((tag) => (
            <p className="">#{tag}</p>
          ))}
        </div>

        <Link href={`events/${id}`}>
          <button className="px-2 py-1 bg-black text-white rounded-[5px]">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}
