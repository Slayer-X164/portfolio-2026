import React from "react";

export function Footer() {
  return (
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
            <a href="https://www.linkedin.com/in/siddhesh-ghag/" target="_blank" rel="noreferrer"><img src="/assets/icon-linkedin-footer.svg" className="w-[19px]" alt="LinkedIn" /></a>
            <a href="mailto:siddheshghag150@gmail.com" target="_blank" rel="noreferrer"><img src="/assets/icon-x-footer.svg" className="w-[19px] " alt="email" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
