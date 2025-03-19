import Link from "next/link";
import Image from "next/image";

export default function ProjectItem(
  image: string,
  lang: string[],
  title: string,
  desc: string,
  isLive: boolean = false,
  urlLive: string = "",
  isCached: boolean = false,
  urlCached: string = ""
) {
  return (
    <div className="border border-[var(--cadet-blue-crayola)] w-full h-fit relative">
      <div className="relative w-full h-[201px]">
        <Image
          src={image}
          fill
          className="object-cover"
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-wrap border border-[var(--cadet-blue-crayola)] border-l-0 border-r-0 p-[var(--small-gap)] gap-[var(--small-gap)]">
        {lang.map((item) => (
          <div key={item} className="">
            {item}
          </div>
        ))}
      </div>
      <div className="p-[var(--16-gap)] text-pretty">
        <div className="font-medium textsize--24 break-words">{title}</div>
        <div className="margin-t-16 break-words">{desc}</div>
      </div>
      <div className="p-[var(--16-gap)] flex gap-[var(--16-gap)]">
        {isLive ? (
          <Link href={urlLive}>
            <div className="flex gap-2 pt-[8px] pb-[8px] pr-[16px] pl-[16px] border border-[var(--deep-mauve)] w-fit cursor-pointer text-white">
              <label>Live</label>
              <div>{"<~>"}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {isCached ? (
          <Link href={urlCached}>
            <div className="flex gap-2 pt-[8px] pb-[8px] pr-[16px] pl-[16px] border border-[var(--cadet-blue-crayola)] w-fit text-[var(--cadet-blue-crayola)]">
              <label>Cached</label>
              <div>{">="}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
