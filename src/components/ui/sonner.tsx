"use client";

import { Toaster as Sonner } from "sonner@2.0.3";
import type { ToasterProps } from "sonner@2.0.3";
import svgPaths from "../../imports/svg-vtf9bx6xaz";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "bg-[#e0f1e9] rounded-[4px] border border-[#008245] border-l-[5px] flex items-center gap-[8px] pl-[16px] pr-[12px] py-[8px] shadow-sm min-h-[56px] w-full max-w-[420px]",
          title: "font-['DM_Sans'] font-normal text-[#282e38] text-[16px] flex-1",
          description: "font-['DM_Sans'] font-normal text-[#282e38] text-[14px] opacity-80 flex-1 mt-1",
          actionButton: "bg-zinc-400",
          cancelButton: "bg-orange-400",
          closeButton: "custom-toast-close-button",
          icon: "!m-0 !size-[32px] shrink-0",
        },
      }}
      icons={{
        success: (
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d={svgPaths.p3d154700} fill="#008245" />
            </svg>
          </div>
        ),
        error: (
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#E33E3B" />
              <path d="M10 10L22 22M10 22L22 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        ),
        warning: (
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d="M16 4L29 28H3L16 4Z" fill="#F59E0B" />
              <path d="M16 12V20M16 23V24.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        ),
        info: (
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" fill="#003396" />
              <path d="M16 14V22M16 10V11.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        ),
      }}
      closeButton={true}
      position="top-right"
      className="toaster group"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontVariationSettings: "'opsz' 14",
      } as React.CSSProperties}
      {...props}
    />
  );
};

export { Toaster };
