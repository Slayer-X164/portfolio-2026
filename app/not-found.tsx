import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex justify-center bg-[#FFFFFF]">
      {/* Main Container */}
      <div className="w-full max-w-[701px] flex flex-col border-[1px] border-dashed border-[#ABABAB] relative overflow-hidden bg-[#FFFFFF]">
        {/* top space */}
        <div className="h-[60px] w-full border-b-[1px] border-dashed border-[#ABABAB]"></div>

        {/* 404 Content Section */}
        <section className="w-full h-full flex  flex-col items-center justify-center py-[100px] px-6 md:px-[32px] gap-[16px] ] border-dashed border-[#ABABAB] min-h-[400px]">
          <h1 className="font-sans font-normal text-[80px] md:text-[130px] leading-none text-[#0162EA] tracking-tight">404</h1>
          <p className="font-sans font-normal text-[16px] md:text-[20px] text-[#000000] text-center max-w-[400px] leading-snug">
            Oops! There is not such page
          </p>
          <Link
            href="/"
            className="mt-6 flex items-center justify-center px-[15px] py-[8px] gap-[6px] bg-[#EDEDED] border-[1px] border-[#D0D0D0] hover:bg-[#E2E2E2] transition-colors"
          >
            <span className="font-sans text-[14px] text-[#000000]">Return Home</span>
            <img src="/assets/icon-arrow-bottom-left.svg" className="w-[12px] h-[12px] rotate-[-135deg]" alt="Return" />
          </Link>
        </section>



        {/* bottom space */}
        <div className="h-[65px] w-full border-t-[1px] border-dashed border-[#ABABAB]"></div>

      </div>
    </main>
  );
}
