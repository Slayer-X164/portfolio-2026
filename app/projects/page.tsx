import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

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

            <ProjectCard
              title="DevBlog"
              description="Developer Blogging platform , discover the latest projects, insights and discussions from the developer community"
              imageBg="/assets/devblog-bg.png"
              imageFg="/assets/devblog-fg.png"
              technologies={["React.js","MongoDB","Firebase","Redux", "Vercel","Express", "Tailwind CSS", "axios", "zod"]}
              liveLink="https://dev-blog-ptd4.vercel.app/"
              repoLink="https://github.com/Slayer-X164/devBlog"
            />


            </div>
          </div>
        </section>

        <Footer />

        {/* bottom space */}
        <div className="h-[65px] w-full border-t-[1px] border-dashed border-[#ABABAB]"></div>

      </div>
    </main>
  );
}
