import React from "react";
import { TechnologyBadge } from "./TechnologyBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageBg: string;
  imageFg: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export function ProjectCard({ title, description, imageBg, imageFg, technologies, liveLink = "#", repoLink = "#" }: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[19.68px] p-[20px] bg-[#FFFFFF] border-[1px] border-dashed border-[rgba(0,0,0,0.42)]">
      {/* Image Container */}
      <div className="w-full md:w-[311.18px] h-[178.09px] flex-shrink-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center flex items-end justify-center"
          style={{ backgroundImage: `url(${imageBg})` }}
        >
          <img src={imageFg} className=" w-[280.64px] h-[146.96px] object-cover drop-shadow-md" alt={title} />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between w-full md:w-[267.13px] h-auto md:h-[178.09px] gap-4 md:gap-0">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <h3 className="font-serif text-[24px] text-[#000000]">{title}</h3>
          <div className="flex items-center gap-[7.45px]">
            <a href={liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-center px-[4.96px] py-[1.87px] gap-[2.48px] bg-[#EDEDED] border border-[#D0D0D0] hover:bg-[#E2E2E2] transition-colors">
              <span className="font-sans text-[11.58px] text-[#000000]">Live</span>
              <img src="/assets/icon-open.svg" className="w-[11.58px] h-[11.58px]" alt="Open" />
            </a>
            <a href={repoLink} target="_blank" rel="noreferrer" className="flex items-center justify-center px-[4.96px] py-[1.87px] gap-[4px] bg-[#EDEDED] border border-[#D0D0D0] hover:bg-[#E2E2E2] transition-colors">
              <span className="font-sans text-[11.58px] text-[#000000]">Repo</span>
              <img src="/assets/icon-github-project.svg" className="w-[11.58px] h-[11.58px]" alt="Github" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-[11px] text-[#646464] leading-snug">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-col gap-[4.69px] w-full">
          <span className="font-sans font-medium text-[12.18px] text-[#000000]">Technologies Used:</span>
          <div className="flex flex-wrap gap-[5.62px]">
            {technologies.map((tech) => (
              <TechnologyBadge key={tech} text={tech} variant="small" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
