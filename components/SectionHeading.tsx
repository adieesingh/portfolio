export default function SectionHeading({
  num,
  title,
}: {
  num: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-3.5 mb-11">
      <span className="font-mono text-[13px] text-ink-faint">{num}</span>
      <span className="font-mono text-2xl font-bold">{title}</span>
      <div className="flex-1 h-px bg-line" />
    </div>
  );
}
