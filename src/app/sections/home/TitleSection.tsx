export default function TitleSection(title: string) {
  return (
    <div className="flex xl:flex-row flex-col justify-between xl:items-center items-start">
      <div className="textsize--32 flex items-center gap--16">
        <div>
          <span className="text--deep-mauve">#</span>
          <span>{title}</span>
        </div>
        <div className="w-[239px] h-[1px] bg-[var(--deep-mauve)]"></div>
      </div>
    </div>
  );
}
