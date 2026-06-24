import { SectionTag } from "@/components/SectionTag";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import { ProjectCard } from "@/components/ProjectCard";
import { PulsatingDot } from "@/components/PulsatingDot";
import { EmailBadge } from "@/components/EmailBadge";
import { FaGithub, FaLinkedin, FaXTwitter, FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PixelPets } from "@/components/PixelPets";

export default function Home() {
  return (
    <main className="w-full flex justify-center  bg-[#FFFFFF]">
      {/* Main Container */}
      <div className="w-full max-w-[701px] flex flex-col border-[1px] border-dashed border-[#ABABAB] relative overflow-hidden bg-[#FFFFFF]">
        {/* top space */}
        <div className="h-[60px] w-full border-b-[1px] border-dashed border-[#ABABAB] relative">
          <PixelPets />
        </div>
        {/* Hero Section */}
        <section className="h-auto  w-full border-b-[1px] border-dashed border-[#ABABAB] relative flex items-center">
          <div className="w-full max-w-[635px] flex flex-col-reverse md:flex-row justify-between items-start md:items-center md:items-end mx-auto px-4 md:px-0 mt-[42px] mb-[52px] gap-8 md:gap-0">
            {/* Left Content */}
            <div className="w-full text-left md:text-center md:w-[409px] h-auto md:h-[206px] flex flex-col justify-between gap-6 md:gap-0 items-start md:items-start text-center md:text-left">
              <div className="flex flex-col gap-[6px]">
                <h1 className="font-serif text-[40px] md:text-[50px] leading-none text-[#000000]">Hey, i’m Sidd.              </h1>
                <div className="flex flex-col sm:flex-row items-start md:items-center gap-[10px]">
                  <span className="font-sans font-semibold text-[14px] text-[#9E9E9E] opacity-60">Software Engineer</span>
                  <div className="hidden sm:block w-[5px] h-[5px] rounded-full bg-[#9E9E9E]"></div>
                  <EmailBadge email="siddheshghag150@gmail.com" />
                </div>
              </div>

              <p className="font-charon font-light text-[14px] md:text-[13px] text-[#000000] leading-snug">
                Full-Stack Software Engineer from India who enjoys the
                process of building scalable end-to-end applications from scratch, debugging, maintaining and cloud deployment.
              </p>

              <div className="flex flex-row items-center gap-[15px]">
                <div className="flex items-center gap-2 h-auto">
                  <PulsatingDot />
                  <span className="font-charon-mono  font-medium text-[13px] text-green-600">Open To Work</span>
                </div>
                <div className="flex items-center gap-[14px]">
                  <Link href="https://github.com/Slayer-X164" className="text-[#727272] hover:text-[#0162EA] hover:-translate-y-[1px] transition-all duration-200"><FaGithub size={20} /></Link>
                  <Link href="https://www.linkedin.com/in/siddhesh-ghag/" className="text-[#727272] hover:text-[#0162EA] hover:-translate-y-[1px] transition-all duration-200"><FaLinkedin size={20} /></Link>
                  <Link href="https://x.com/FrontendDoc" className="text-[#727272] hover:text-[#0162EA] hover:-translate-y-[1px] transition-all duration-200"><FaXTwitter size={20} /></Link>
                </div>
              </div>
            </div>

            {/* Right Avatar */}
            <div className="w-[150px] md:w-[206px] h-[150px] md:h-[206px] rounded-[15px] border-[4.31px] border-[#AFCAFF] overflow-hidden flex-shrink-0">
              <img src="/assets/hero-avatar.png" className="w-full h-full object-cover" alt="Siddhesh Ghag" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="h-auto w-full border-b-[1px] border-dashed border-[#ABABAB] flex flex-col py-[30px] px-4 md:px-[30px]">
          <SectionTag text="Experience" width="w-[134px]" />
          <div className="mt-[26px] flex flex-col sm:flex-row  w-full gap-[17px]">
            <div className="w-[39px] h-[39px] rounded-[7.22px] bg-[#A1A1A1] flex-shrink-0 overflow-hidden  ">
              <img src="/assets/oceanlab.png" className="w-full h-full object-cover" alt="Oceanlab" />
            </div>
            <div className="w-full md:w-[564px] flex flex-col gap-[10px] items-center sm:items-start text-center sm:text-left">
              <div className="flex flex-col gap-[6px] w-full items-start text-center sm:text-left">
                <div className="flex flex-row justify-between items-start w-full gap-2 sm:gap-0">
                  <h3 className="font-sans font-bold text-[13px] text-[#000000]">Oceanlab Technology</h3>
                  <span className="font-sans italic text-[11px] text-[#737373]">Oct 2025 - Nov 2025</span>
                </div>
                <div className="px-4 py-1 bg-[#006BFF] border-[0.83px] border-dashed border-[#FFFFFF] flex items-center justify-center">
                  <span className="font-sans font-semibold text-[12px] text-[#FFFFFF]">Frontend <span className="italic">intern</span></span>
                </div>
              </div>
              <p className="font-inria text-[14px] text-left text-[#585858] leading-relaxed whitespace-pre-wrap">
                <span className="font-bold text-[#585858] ">• </span>Designed and developed responsive user interfaces from <span className="font-bold text-[#060606]">Figma</span> designs using <span className="font-bold text-[#000000]">React</span> and <span className="font-bold text-[#000000]">Next.js</span>, delivering pixel-perfect implementations.<br />
                <span className="font-bold text-[#585858] ">• </span>Built clean, maintainable, and high-performance frontend code to enhance user <span className="font-bold text-[#000000]">experience</span> and application performance.<br />
                <span className="font-bold text-[#585858] ">• </span>Created the company&apos;s <span className="font-bold text-[#000000]">logo</span> and contributed to the overall <span className="font-bold text-[#000000]">brand identity</span> and visual design.<br />
                <span className="font-bold text-[#585858] ">• </span>Provided design direction and collaborated with <span className="font-bold text-[#000000]">cross-functional teams</span> to improve product <span className="font-bold text-[#000000]">quality</span> and design consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="h-auto w-full border-b-[1px] border-dashed border-[#ABABAB] flex flex-col py-[30px] px-4 md:px-[30px]">
          <SectionTag text="Technologies" width="w-[144px]" />
          <div className="mt-[18px] flex flex-col gap-[17px] w-full items-start text-left">

            {/* LANGUAGES */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">LANGUAGES</span>
              <div className="flex flex-wrap justify-start gap-[7.57px]">
                <TechnologyBadge icon="/assets/icon-javascript.svg" text="JavaScript" />
                <TechnologyBadge icon="/assets/icon-java.svg" text="Java" />
                <TechnologyBadge icon="/assets/icon-typescript.svg" text="TypeScript" />
                <TechnologyBadge icon="/assets/icon-python.svg" text="Python" />
              </div>
            </div>

            {/* FRONTEND */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">FRONTEND</span>
              <div className="flex flex-wrap justify-start gap-[7.57px]">
                <TechnologyBadge icon="/assets/icon-react.svg" text="React.js" />
                <TechnologyBadge icon="/assets/icon-nextjs.svg" text="Next.js" />
                <TechnologyBadge icon="/assets/icon-tailwindcss.svg" text="Tailwind CSS" />
                <TechnologyBadge icon="/assets/icon-zustand.svg" text="Zustand" />
                <TechnologyBadge icon="/assets/motion.png" text="Motion" />
                <TechnologyBadge icon="/assets/icon-react-query.svg" text="TanStack Query" />
              </div>
            </div>

            {/* BACKEND & DB */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">BACKEND & DB</span>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-wrap justify-start gap-[7.57px]">
                  <TechnologyBadge icon="/assets/icon-nodejs.svg" text="Node.js" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-express.svg" text="Express.js" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-fastapi.svg" text="FastAPI" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-drizzle.svg" text="Drizzle" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-zod.svg" text="Zod" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-postgresql.svg" text="PostgreSQL" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-redis.svg" text="Redis" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-mongodb.svg" text="MongoDB" />
                  <TechnologyBadge icon="/assets/icon-supabase.svg" text="Supabase" />
                </div>

              </div>
            </div>

            {/* AI */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">AI</span>
              <div className="flex flex-wrap justify-start gap-[7.57px]">
                <TechnologyBadge icon="/assets/icon-langchain.svg" text="LangChain" />
                <TechnologyBadge icon="/assets/icon-langgraph.svg" text="LangGraph" />
                <TechnologyBadge icon="/assets/openrouter.png" text="OpenRouter" />
                <TechnologyBadge icon="/assets/icon-hugging-face.svg" text="Hugging Face" />
              </div>
            </div>

            {/* INFRA & TOOLS */}
            <div className="flex flex-col gap-[7px] w-full items-start text-left">
              <span className="font-sans font-medium text-[12px] tracking-[0.21em] text-[#A8A5A5]">INFRA & TOOLS</span>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-wrap justify-start gap-[7.57px]">
                  <TechnologyBadge icon="/assets/icon-docker.svg" text="Docker" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-github.svg" text="GitHub" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-vercel.svg" text="Vercel" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-cloudflare.svg" text="Cloudflare" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-aws.svg" text="AWS" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-linux.svg" text="Linux" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-figma.svg" text="Figma" borderDashed={false} />
                  <TechnologyBadge icon="/assets/icon-postman.svg" text="Postman" />
                  <TechnologyBadge icon="/assets/resend.png" text="Resend" />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Things I've Built Section */}
        <section className="h-auto w-full border-b-[1px] border-dashed border-[#ABABAB] flex flex-col py-[30px] px-4 md:px-[30px]">
          <SectionTag text="Things I’ve Built" width="w-[161px]" />

          <div className="mt-[27px] flex flex-col gap-[31px] w-full md:w-[636px]">
            <ProjectCard
              title="ClauseGuard"
              description="an AI-powered contract analysis platform to simplify complex legal clauses and identify potential risks and also suggest better rewrites using RAG"
              imageBg="/assets/clauseguard-bg.png"
              imageFg="/assets/clauseguard-fg.png"
              technologies={["React.js", "TypeScript", "Python", "FastAPI", "Vercel", "OpenRouter", "Docker", "AWS", "Hugging Face"]}
              liveLink="https://clauseguard.siddx.in"
              repoLink="https://github.com/Slayer-X164/legal_contract_analyser_w_RAG"
            />

            <ProjectCard
              title="Affinote"
              description="customizable template platform to personalize & share appreciation pages by unique links. (900+ paid customers and 1K+ weekly unique visitors)"
              imageBg="/assets/affinote-bg.png"
              imageFg="/assets/affinote-fg.png"
              technologies={["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay", "PostgreSQL", "Resend", "ImageKit", "Cloudflare", "Redis", "Motion", "Zod"]}
              liveLink="https://affinote.site"
              repoLink="https://github.com/Slayer-X164/affinote"
            />

            <ProjectCard
              title="EzyExpense"
              description="full-stack expense tracking application enabling users to log and manage expenses with responsive dashboards and expense data insights."
              imageBg="/assets/ezyexpense-bg.png"
              imageFg="/assets/ezyexpense-fg.png"
              technologies={["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Axios", "NextAuth", "Redux", "Motion", "Vercel", "Zod"]}
              liveLink="https://ezy-expense-omega.vercel.app/"
              repoLink="https://github.com/Slayer-X164/ezy_expense"
            />

            <a href="/projects" className="self-start flex items-center gap-[4px] px-[10px] py-[3px] bg-[#EDEDED] border-[0.7px] border-[#D0D0D0]">
              <span className="font-sans text-[12.67px] text-[#000000]">View all Projects</span>
              <img src="/assets/icon-arrow-bottom-left.svg" className="w-[13.37px] h-[13.37px]" alt="Arrow" />
            </a>
          </div>
        </section>

        <Footer />
        {/* bottom space */}
        <div className="h-[65px] w-full border-t-[1px] border-dashed border-[#ABABAB]"></div>

      </div>
    </main>
  );
}
