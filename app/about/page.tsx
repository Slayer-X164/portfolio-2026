import React from "react";

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
