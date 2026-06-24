import React from "react";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <main className="w-full flex justify-center bg-[#FFFFFF]">
      {/* Main Container */}
      <div className="w-full max-w-[701px] flex flex-col border-[1px] border-dashed border-[#ABABAB] relative overflow-hidden bg-[#FFFFFF]">
        {/* top space */}
        <div className="h-[60px] w-full border-b-[1px] border-dashed border-[#ABABAB]"></div>

        {/* Row 1 */}
        <section className="min-h-[250px] w-full flex flex-row border-b-[1px] border-dashed border-[#ABABAB]">
          {/* Left: AB */}
          <div className="w-1/2 flex items-start justify-start min-h-auto border-r-[1px] md:border-b-0 md:border-r-[1px] border-dashed border-[#ABABAB] p-6">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">AB</span>
          </div>
          {/* Right: Text */}
          <div className="w-1/2 flex items-center justify-center min-h-auto p-6 md:p-10">
            <p className="font-sans font-normal text-[12px] md:text-lg text-[#000000] leading-snug">
              I like understanding how things work. Whether it&apos;s debugging a tricky issue, optimizing a backend service, or learning a new technology, I&apos;m happiest when I&apos;m solving problems and building something meaningful.
            </p>
          </div>
        </section>

        {/* Row 2 */}
        <section className="min-h-[250px] w-full flex flex-row-reverse md:flex-row border-b-[1px] border-dashed border-[#ABABAB]">
          {/* Left: Text (Appears first on mobile) */}
          <div className="w-1/2 flex items-center justify-center min-h-auto border-r-[1px] border-dashed border-[#ABABAB] p-6 md:p-10 order-2 md:order-1">
            <p className="font-sans font-normal text-[12px] md:text-lg text-[#000000] leading-snug">
              For me Every project is a conversation between curiosity and discipline.
            </p>
          </div>
          {/* Right: OU */}
          <div className="w-1/2 flex items-end justify-end min-h-auto p-6 order-1 md:order-2  border-dashed border-[#ABABAB]">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">OU</span>
          </div>
        </section>

        {/* Row 3 */}
        <section className="min-h-[250px] w-full flex flex-row border-b-[1px] border-dashed border-[#ABABAB]">
          {/* Left: T */}
          <div className="w-1/2 flex items-start justify-start min-h-auto border-r-[1px] border-dashed border-[#ABABAB] p-6">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">T</span>
          </div>
          {/* Right: Text */}
          <div className="w-1/2 flex items-center justify-center min-h-auto p-6 md:p-10">
            <p className="font-sans font-normal text-[12px] text-[#000000] leading-snug">
              I don&apos;t mind spending hours on a difficult bug if it means understanding the problem deeply. For me, software engineering is about curiosity, persistence, and building things that make sense.
            </p>
          </div>
        </section>

        {/* Row 4 */}
        <section className="min-h-[250px] w-full flex flex-row-reverse md:flex-row border-b-[1px] border-dashed border-[#ABABAB]">
          {/* Left: Text */}
          <div className="w-1/2 flex items-center justify-center min-h-auto border-r-[1px] border-dashed border-[#ABABAB] p-6 md:p-10 order-2 md:order-1">
            <p className="font-sans font-normal text-[12px] md:text-lg text-[#000000] leading-snug">
              Fueled by curiosity, anime, and the occasional &quot;How did that even work?&quot; moment.
            </p>
          </div>
          {/* Right: ME */}
          <div className="w-1/2 flex items-end justify-end min-h-auto p-6 order-1 md:order-2 border-dashed border-[#ABABAB]">
            <span className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0062EA] tracking-tight">ME</span>
          </div>
        </section>

        <Footer />

        {/* bottom space */}
        <div className="h-[65px] w-full border-t-[1px] border-dashed border-[#ABABAB]"></div>

      </div>
    </main>
  );
}
