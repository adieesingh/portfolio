import StatusBar from "@/components/StatusBar";
import Terminal from "@/components/Terminal";
import SectionHeading from "@/components/SectionHeading";

const stack = [
  "JavaScript", "TypeScript", "Node.js", "Express", "React", "Next.js",
  "Tailwind CSS", "PostgreSQL", "MongoDB", "Prisma", "Zod", "Docker",
  "Kubernetes", "AWS EC2", "Nginx", "PM2", "Python", "Git",
];

const experience = [
  {
    time: "Apr 2026 — present",
    role: "Junior Node.js Developer",
    org: "Feat System, Mumbai",
    desc: "Building backend services and REST API integrations in Node.js that connect third-party services with web applications. Work includes invoice reconciliation against purchase orders and goods receipt notes (quantities, rates, taxes, GSTINs) in PostgreSQL, JSON validation and transformation between APIs, and email and calendar integrations with ICS invitations and reusable configuration across projects.",
  },
  {
    time: "Dec 2025 — Mar 2026",
    role: "Full Stack Developer Intern",
    org: "Weblord Infotech",
    desc: "Worked on a client web application built with React.js and Node.js, where clients fill in and submit their details through forms. Tested the React components and the RESTful APIs, and verified that submitted data was saved and retrieved correctly in the database.",
  },
  {
    time: "2024",
    role: "BE",
    org: "Thakur College of Engineering & Technology · CGPA 7.99",
    desc: "Started in civil engineering, pivoted into software — now completing the Docker & Kubernetes modules of 100xDevs Full Stack Cohort 3.",
  },
];

export default function Home() {
  return (
    <>
      <StatusBar />

      {/* Hero */}
      <header className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-14 items-center px-[5vw] pt-[6vh] md:pt-[9vh] pb-[8vh]">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-teal uppercase tracking-[0.12em] mb-5">
            <span className="text-ink-faint">//</span> status: open to work
          </div>
          <h1 className="font-mono font-bold text-[2.1rem] md:text-[3.4rem] leading-[1.1] tracking-tight mb-5">
            Adarsh Singh
            <br />
            builds backend <span className="text-teal">systems</span>
            <br />
            that stay online.
          </h1>
          <p className="text-ink-dim text-[1.05rem] max-w-[46ch] mb-8">
            Junior Node.js developer at <b className="text-ink font-semibold">Feat System</b>, Mumbai — building REST
            APIs and backend integrations, designing PostgreSQL schemas with Prisma, and self-hosting side projects
            on real infrastructure, not just localhost.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#projects"
              className="font-mono text-[13px] font-bold px-6 py-3 rounded-md bg-teal text-bg border border-teal hover:-translate-y-0.5 transition-transform"
            >
              view projects
            </a>
            <a
              href="#contact"
              className="font-mono text-[13px] px-6 py-3 rounded-md border border-line text-ink hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-all"
            >
              get in touch
            </a>
          </div>
        </div>

        <Terminal />
      </header>

      {/* About */}
      <section id="about" className="max-w-[1280px] mx-auto px-[5vw] py-[6vh]">
        <SectionHeading num="01" title="about" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-ink-dim space-y-4">
            <p>
              I&apos;m a backend-focused Node.js developer based in Mumbai, with full-stack experience from a React
              and Node.js internship. My day job is building{" "}
              <b className="text-ink font-semibold">backend services and REST API integrations</b> —
              invoice reconciliation that matches invoices to POs and goods receipts, JSON validation between
              systems, and email and calendar integrations with ICS invites.
            </p>
            <p>
              Outside of work, I build in public: shipping side projects, writing up what breaks, and sharing
              progress as I go through <b className="text-ink font-semibold">100xDevs Cohort 3</b>. I came into
              software through an unusual door — a <b className="text-ink font-semibold">BE in Civil Engineering</b>{" "}
              — which mostly taught me that systems, whether concrete or code, fail the same way: quietly, until
              they don&apos;t.
            </p>
            <p>
              Right now I&apos;m deep in <b className="text-ink font-semibold">Stockline</b>, a multi-tenant
              inventory SaaS, and keeping a self-hosted URL shortener alive on a cloud Linux VM as a permanent
              reminder that &ldquo;it works on my machine&rdquo; isn&apos;t shipping.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 content-start">
            {stack.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-3 py-1.5 rounded-md border border-line bg-bg-card text-ink-dim"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-[1280px] mx-auto px-[5vw] py-[6vh]">
        <SectionHeading num="02" title="experience" />
        <div>
          {experience.map((entry, i) => (
            <div
              key={entry.role}
              className={`grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-2 sm:gap-6 py-5 border-t border-line ${
                i === experience.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-mono text-xs text-ink-faint pt-0.5">{entry.time}</div>
              <div>
                <div className="font-semibold text-[1.05rem] mb-1">{entry.role}</div>
                <div className="font-mono text-[13px] text-teal mb-2.5">{entry.org}</div>
                <p className="text-ink-dim text-[0.95rem] max-w-[62ch]">{entry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-[1280px] mx-auto px-[5vw] py-[6vh]">
        <SectionHeading num="03" title="projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col p-6 rounded-xl border border-line bg-bg-card hover:border-teal hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Stockline</h3>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-amber before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber">
                in progress
              </span>
            </div>
            <p className="text-ink-dim text-[0.92rem] mb-4 flex-1">
              A multi-tenant inventory SaaS built as a Turborepo monorepo. The Express/Prisma backend handles tenant
              isolation, authentication and role-based access control on a relational data model that keeps each
              tenant&apos;s data separate. The Next.js frontend shares packages with the backend and is in progress.
            </p>
            <div className="flex flex-wrap gap-1.5 ">
              {["Turborepo", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Node.js"].map((tag) => (
                <span key={tag} className="font-mono text-[10.5px] text-ink-faint border border-line rounded px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
             <div className="flex gap-4 font-mono text-[12.5px] mt-4">
              <a
                href="https://github.com/adieesingh/Multi-Tenant-Inventory-SaaS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-dim hover:text-teal border-b border-transparent hover:border-teal transition-colors"
              >
                source ↗
              </a>
              </div>
          </div>

          <div className="flex flex-col p-6 rounded-xl border border-line bg-bg-card hover:border-teal hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">URL Shortener</h3>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-teal before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal">
                live
              </span>
            </div>
            <p className="text-ink-dim text-[0.92rem] mb-4 flex-1">
              Self-hosted full-stack URL shortener in a Turborepo monorepo: a Next.js frontend and Express REST APIs
              for short URLs, custom aliases and redirects, with Zod input validation and Prisma/PostgreSQL storage.
              Deployed on a cloud Linux VM behind an Nginx reverse proxy, kept alive with PM2, on a custom domain.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {["Next.js", "Express", "Prisma", "Zod", "Nginx", "Node.js"].map((tag) => (
                <span key={tag} className="font-mono text-[10.5px] text-ink-faint border border-line rounded px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 font-mono text-[12.5px]">
              <a
                href="https://shorturl.adarshdev.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-dim hover:text-teal border-b border-transparent hover:border-teal transition-colors"
              >
                live site ↗
              </a>
              <a
                href="https://github.com/adieesingh/shortUrl_Monorepo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-dim hover:text-teal border-b border-transparent hover:border-teal transition-colors"
              >
                source ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-[1280px] mx-auto px-[5vw] py-[6vh]">
        <div className="text-center rounded-2xl border border-line bg-bg-card px-[5vw] py-14">
          <h2 className="font-mono text-3xl font-bold mb-3.5">Let&apos;s build something that stays up.</h2>
          <p className="text-ink-dim mb-8">
            Open to full-stack and backend roles — reach out if something here&apos;s a fit.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:adarsh.singh.devs@gmail.com"
              className="font-mono text-[13px] font-bold px-6 py-3 rounded-md bg-teal text-bg border border-teal hover:-translate-y-0.5 transition-transform"
            >
              email me
            </a>
            <a
              href="https://github.com/adieesingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] px-6 py-3 rounded-md border border-line text-ink hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-all"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-singh-116ba0249/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] px-6 py-3 rounded-md border border-line text-ink hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-all"
            >
              linkedin
            </a>
            <a
              href="https://x.com/AdarshSingh1606/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] px-6 py-3 rounded-md border border-line text-ink hover:border-teal hover:text-teal hover:-translate-y-0.5 transition-all"
            >
              x / twitter
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center px-[5vw] pt-9 pb-12 font-mono text-[11.5px] text-ink-faint">
        built by adarsh singh · deployed like everything else i ship — with nginx and a little too much pm2
      </footer>
    </>
  );
}
