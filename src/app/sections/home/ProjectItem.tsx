export default function ProjectItem(
  image: string,
  lang: string[],
  title: string,
  desc: string
) {
  return (
    <div className="border border-[var(--cadet-blue-crayola)] w-full">
      <div>
        {title} {image}
      </div>
      <div className="flex flex-wrap border border-[var(--cadet-blue-crayola)] border-l-0 border-r-0 p-[var(--small-gap)] gap-[var(--small-gap)]">
        {lang.map((item) => (
          <div key={item} className="">
            {item}
          </div>
        ))}
      </div>
      <div className="p-[var(--16-gap)]">
        <div className="font-medium textsize--24">{title}</div>
        <div className="margin-t-16">{desc}</div>
      </div>
    </div>
  );
}
