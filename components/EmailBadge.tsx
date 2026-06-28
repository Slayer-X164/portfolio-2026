"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function EmailBadge({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center justify-center px-[7px] py-[2px] gap-[7px] bg-[#F5F5F5] dark:bg-neutral-800 border-[1px] border-dashed border-[#D7D7D7] dark:border-[#444444] rounded-[3px] cursor-pointer hover:bg-[#EAEAEA] dark:hover:bg-neutral-700 transition-colors"
      title="Copy to clipboard"
    >
      <span className="font-mono text-[13px] text-[#9E9E9E]">{email}</span>
      <div className="w-[17px] h-[17px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.svg
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </motion.svg>
          ) : (
            <motion.img
              key="mail"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}
              src="/assets/icon-email.svg"
              className="w-[17px] h-[17px]"
              alt="Email"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
