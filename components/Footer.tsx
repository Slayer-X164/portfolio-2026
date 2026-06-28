"use client";
import React, { useState, useEffect } from "react";

export function Footer() {
  const [mumbaiTime, setMumbaiTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "2-digit",
        hour12: true,
      });
      setMumbaiTime(formatter.format(date));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-auto min-h-[159px] py-6 md:py-0 w-full relative flex items-center justify-center overflow-hidden">
      {/* Background Dots */}
      <img src="/assets/footer-left-dot.svg" className="brightness-70 absolute left-[-60px] md:left-[-5px] top-[60px] w-[236.65px] opacity-50 block" alt="" />
      <img src="/assets/footer-right-dot.svg" className="brightness-70 absolute right-[-90px] md:right-[-9px] top-[-8px] w-70 opacity-50 block" alt="" />

      <div className="flex flex-col items-center gap-[8px] z-10">
        <div className="flex flex-col items-center gap-[4px]">
          <span className="font-sans text-[13px] text-[#8C8C8C] text-center">Mumbai, {mumbaiTime || "8:43 PM"}</span>
          <h2 className="font-serif text-[30px] text-[#000000] dark:text-[#FFFFFF] leading-none">Siddhesh Ghag</h2>
        </div>
        <div className="flex flex-col items-center justify-center px-[17px] py-[8px] gap-[4px]">
          <span className="font-sans text-[13px] text-[#000000] dark:text-[#FFFFFF]">Connect With Me</span>
          <div className="flex items-end gap-3">
            <a href="https://www.linkedin.com/in/siddhesh-ghag/" target="_blank" rel="noreferrer"><img src="/assets/icon-linkedin-footer.svg" className="w-[19px] dark:filter dark:invert dark:opacity-40" alt="LinkedIn" /></a>
            <a href="mailto:siddheshghag150@gmail.com" target="_blank" rel="noreferrer"><img src="/assets/icon-x-footer.svg" className="w-[19px]  dark:filter dark:invert dark:opacity-40" alt="email" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
