import Link from "next/link";

export default function TitleSectionWithLink(title: string, link: string) {
  return (
    <div className="flex xl:flex-row flex-col justify-between xl:items-center items-start">
      <div className="textsize--32 flex items-center gap--16">
        <div>
          <span className="text--deep-mauve">#</span>
          <span>{title}</span>
        </div>
        <div className="w-[511px] h-[1px] bg-[var(--deep-mauve)]"></div>
      </div>
      <Link href={link}>View all {`~~>`}</Link>
    </div>
  );
}
