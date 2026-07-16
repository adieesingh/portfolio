export default function StatusBar() {
  const links = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-[5vw] py-3.5 bg-bg/85 backdrop-blur-md border-b border-line font-mono text-[12.5px] text-ink-dim">
      <div className="font-semibold tracking-wide text-ink">
        <span
          className="inline-block w-[7px] h-[7px] rounded-full bg-teal mr-2 align-middle animate-pulse-ring"
        />
        adarsh<span className="text-teal">@</span>dev
      </div>
      <nav className="hidden sm:flex gap-7">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-ink-dim hover:text-teal transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal focus-visible:outline-offset-4"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
