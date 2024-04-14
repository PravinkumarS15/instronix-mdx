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
  type,
}: IImageCardProps) {
  return (
    <Link
      href={`/events/${id}`}
      className="relative max-w-xs w-full h-96 overflow-hidden rounded-lg shadow-lg group"
    >
      <Image
        src={image}
        alt="poster"
        className="w-full h-full transition-transform group-hover:scale-105 duration-200  object-cover"
        fill
      />
      <div className="absolute inset-0 flex flex-col gap-1 items-start justify-end bg-gradient-to-t from-black to-transparent p-4 text-white">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-sm font-light">{subTitle}</p>
        <div className="flex flex-row gap-2 text-xs">
          {(tags ?? []).map((tag) => (
            <p className=""># {tag}</p>
          ))}
        </div>
        <p className=" rounded-[10px] font-medium right-2 text-[#009871] ">
          {type} | {when}
        </p>
      </div>
    </Link>
  );
}
