import React from "react";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <main className="w-full flex justify-center bg-[#FFFFFF]">
      {/* Main Container */}
      <div className="w-full max-w-[701px] flex flex-col border-[1px] border-dashed border-[#ABABAB] relative overflow-hidden bg-[#FFFFFF]">
        {/* top space */}
        <div className="h-[60px] w-full border-b-[1px] border-dashed border-[#ABABAB]"></div>

        {/* Content Section (Header + Projects) */}
        <section className="w-full flex flex-col border-b-[1px] border-dashed border-[#ABABAB]">
          {/* Header */}
          <div className="w-full flex flex-col px-6 py-[18px] md:px-[32px] md:py-[24px] gap-[8px]">
            <h1 className="font-sans font-normal text-[30px] text-[#0162EA] uppercase">PROJECTS</h1>
            <p className="font-sans font-normal text-[14px] md:text-[16px] text-[#000000] leading-snug w-full max-w-[636px]">
              Every project started with a simple question: &quot;Can I build this?&quot; Along the way, I learned new technologies, made countless mistakes, solved even more problems, and gained experience that no tutorial could ever teach.
            </p>
          </div>

          {/* Projects List */}
          <div className="w-full flex flex-col items-center pb-[38px] pt-[20px] px-4 md:px-0">
            <div className="flex flex-col gap-[31px] w-full max-w-[636px]">
              <ProjectCard
              title="ClauseGuard"
              description="an AI-powered contract analysis platform to simplify complex legal clauses and identify potential risks and also suggest better rewrites using RAG"
              imageBg="/assets/clauseguard-bg.png"
              imageFg="/assets/clauseguard-fg.png"
              technologies={["React.js", "TypeScript", "Python", "FastAPI", "Vercel", "OpenRouter", "Docker", "AWS", "Hugging Face"]}
            />

            <ProjectCard
              title="Affinote"
              description="customizable template platform to personalize & share appreciation pages by unique links. (900+ paid customers and 1K+ weekly unique visitors)"
              imageBg="/assets/affinote-bg.png"
              imageFg="/assets/affinote-fg.png"
              technologies={["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay", "PostgreSQL", "Resend", "ImageKit", "Cloudflare", "Redis", "Motion", "Zod"]}
            />

            <ProjectCard
              title="EzyExpense"
              description="full-stack expense tracking application enabling users to log and manage expenses with responsive dashboards and expense data insights."
              imageBg="/assets/ezyexpense-bg.png"
              imageFg="/assets/ezyexpense-fg.png"
              technologies={["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Axios", "NextAuth", "Redux", "Motion", "Vercel", "Zod"]}
            />
            <ProjectCard
              title="ClauseGuard"
              description="an AI-powered contract analysis platform to simplify complex legal clauses and identify potential risks and also suggest better rewrites using RAG"
              imageBg="/assets/clauseguard-bg.png"
              imageFg="/assets/clauseguard-fg.png"
              technologies={["React.js", "TypeScript", "Python", "FastAPI", "Vercel", "OpenRouter", "Docker", "AWS", "Hugging Face"]}
            />

            <ProjectCard
              title="Affinote"
              description="customizable template platform to personalize & share appreciation pages by unique links. (900+ paid customers and 1K+ weekly unique visitors)"
              imageBg="/assets/affinote-bg.png"
              imageFg="/assets/affinote-fg.png"
              technologies={["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay", "PostgreSQL", "Resend", "ImageKit", "Cloudflare", "Redis", "Motion", "Zod"]}
            />

            <ProjectCard
              title="EzyExpense"
              description="full-stack expense tracking application enabling users to log and manage expenses with responsive dashboards and expense data insights."
              imageBg="/assets/ezyexpense-bg.png"
              imageFg="/assets/ezyexpense-fg.png"
              technologies={["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Axios", "NextAuth", "Redux", "Motion", "Vercel", "Zod"]}
            />
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="h-auto min-h-[159px] py-6 md:py-0 w-full relative flex items-center justify-center overflow-hidden">
          {/* Background Dots */}
          <img src="/assets/footer-left-dot.svg" className="absolute left-[-60px] md:left-[-5px] top-[60px] w-[236.65px] opacity-50 block" alt="" />
          <img src="/assets/footer-right-dot.svg" className="absolute right-[-90px] md:right-[-9px] top-[-8px] w-70 opacity-50 block" alt="" />

          <div className="flex flex-col items-center gap-[8px] z-10">
            <div className="flex flex-col items-center gap-[3px]">
              <span className="font-sans text-[13px] text-[#8C8C8C] text-center">Mumbai, 8:43 PM</span>
              <h2 className="font-serif text-[30px] text-[#000000] leading-none">Siddhesh Ghag</h2>
            </div>
            <div className="flex flex-col items-center justify-center px-[17px] py-[8px] gap-[5px]">
              <span className="font-sans text-[13px] text-[#000000]">Connect With Me</span>
              <div className="flex items-end gap-3">
                <a href="#"><img src="/assets/icon-linkedin-footer.svg" className="w-[20px]" alt="LinkedIn" /></a>
                <a href="#"><img src="/assets/icon-x-footer.svg" className="w-[20px]" alt="X" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* bottom space */}
        <div className="h-[65px] w-full border-t-[1px] border-dashed border-[#ABABAB]"></div>

      </div>
    </main>
  );
}
