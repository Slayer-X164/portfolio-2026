import React from "react";
import { Footer } from "@/components/Footer";

export default function Resume() {
  return (
    <main className="w-full min-h-screen flex justify-center bg-[#FFFFFF] dark:bg-[#121212]">
      {/* Main Container */}
      <div className="w-full max-w-[701px] flex flex-col border-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] relative overflow-hidden bg-[#FFFFFF] dark:bg-[#121212]">
        {/* top space */}
        <div className="h-[60px] w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]"></div>

        {/* Content Section (Header + Resume) */}
        <section className="w-full flex flex-col border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
          {/* Header */}
          <div className="w-full flex flex-col px-6 py-[18px] md:px-[32px] md:py-[24px] gap-[8px]">
            <h1 className="font-sans font-normal text-[30px] text-[#0162EA] uppercase">RESUME</h1>
            <p className="font-sans font-normal text-[14px] md:text-[16px] text-[#000000] dark:text-[#E0E0E0] leading-snug w-full max-w-[636px]">
              Everything recruiters want to know, conveniently packaged into a PDF that&apos;s significantly smaller than node_modules folder.
            </p>
          </div>

          {/* Resume Content */}
          <div className="w-full flex flex-col items-center pb-[38px] pt-[20px] px-4 md:px-0">
            <div className="flex flex-col gap-[8px] w-full max-w-[491px]">


              {/* Resume PDF Viewer */}
              <div className="w-full h-[500px] md:h-[650px] border-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex justify-center overflow-hidden">
                <iframe
                  src="https://drive.google.com/file/d/1Fgs1DrkyMe9H88EiX-6fis_A7ROjRVey/preview"
                  className="w-full h-full border-none"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <Footer />

        {/* bottom space */}
        <div className="h-[65px] w-full border-t-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]"></div>

      </div>
    </main>
  );
}
