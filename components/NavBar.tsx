"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  const validPaths = ["/", "/projects", "/about", "/resume"];

  if (!validPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-[10px] left-1/2 -translate-x-1/2 z-50 ">
      <div className="max-w-[310px] sm:max-w-[500px] flex items-center gap-[10px] px-[10px] py-[9px] bg-blue-600 border-[1px] border-dashed border-white  backdrop-blur-md">

        {/* Avatar */}
        <Link href={"/"} className=" sm:w-[30px] w-[25px] h-[25px] sm:h-[30px] rounded-[21.55px] border-[4.31px] border-[#AFCAFF] overflow-hidden flex-shrink-0">
          <img src="/assets/hero-avatar.png" className="w-full h-full object-cover" alt="Avatar" />
        </Link>

        {/* Divider */}
        {/* <div className="w-[0.5px] h-[15px] bg-[#E1E1E1]"></div> */}

        {/* Links */}
        <nav className="flex items-center gap-[10px] border-x px-3 border-blue-200">
          <Link href="/about" className="rounded-sm flex items-center justify-center px-[10px] py-[5px] bg-neutral-50  hover:bg-blue-100 transition-colors">
            <span className="font-sans  text-[9px] sm:text-[12px] text-black">ABOUT</span>
          </Link>
          <Link href="/projects" className="rounded-sm flex items-center justify-center px-[10px] py-[5px] bg-neutral-50  hover:bg-blue-100 transition-colors">
            <span className="font-sans  text-[9px] sm:text-[12px] text-black">PROJECTS</span>
          </Link>
          <Link href="/resume" className="rounded-sm flex items-center justify-center px-[10px] py-[5px] bg-neutral-50  hover:bg-blue-100 transition-colors">
            <span className="font-sans  text-[9px] sm:text-[12px] text-black">RESUME</span>
          </Link>
        </nav>

        {/* Divider */}
        {/* <div className="w-[0.5px] h-[15px] bg-[#E1E1E1]"></div> */}

        {/* Theme Toggle Icon */}
        <button className="flex items-center justify-center sm:w-[30px] w-[25px] h-[25px] sm:h-[30px] rounded-full hover:bg-[rgba(111, 111, 111, 0.84)] transition-colors">
          <img src="/assets/icon-light-dark.svg" className="w-full h-full" alt="Toggle Theme" />
        </button>

      </div>
    </div>
  );
}
