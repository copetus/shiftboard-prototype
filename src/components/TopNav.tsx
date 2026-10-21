import svgPaths from "../imports/svg-rh1g3fm2ym";

export function TopNav() {
  return (
    <div className="app-topbar bg-white box-border flex h-[76px] items-center justify-between px-[24px] py-[16px] shadow-[0px_1px_11px_0px_#c0c1c3] sticky top-0 z-50">
      {/* Left Side - Logo */}
      <div className="flex gap-[10px] items-center">
        <div className="h-[26px] overflow-clip w-[95px] relative">
          <div className="absolute bottom-0 left-0 right-[0.12%] top-[0.54%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95 26">
              <g id="Logo">
                <path d={svgPaths.p128438f0} fill="#050E1F" />
                <path d={svgPaths.p1b4adeb0} fill="#050E1F" />
                <path d={svgPaths.p11b85b00} fill="#050E1F" />
                <path d={svgPaths.p2d6f4700} fill="#050E1F" />
                <path d={svgPaths.p19a78040} fill="#050E1F" />
                <g>
                  <path d={svgPaths.p2c0ae780} fill="#050E1F" />
                  <path d={svgPaths.p1611dda0} fill="url(#paint0_linear_9_12514)" />
                </g>
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_12514" x1="64.9302" x2="52.5469" y1="11.7006" y2="18.7495">
                  <stop offset="0.2" stopColor="#13D6E5" />
                  <stop offset="0.4" stopColor="#3B9DE9" />
                  <stop offset="0.6" stopColor="#6459E4" />
                  <stop offset="0.7" stopColor="#413D9B" />
                  <stop offset="0.8" stopColor="#23255C" />
                  <stop offset="0.9" stopColor="#050E1F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="facility-context flex gap-[16px] items-center justify-end">
        {/* Department Select */}
        <div className="facility-name">
          <p className="font-['DM_Sans'] font-normal text-[#282e38] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            EVS 12345 - St. Sebastian's Hospital
          </p>

        </div>

        {/* Avatar */}
        <div className="bg-[#0c76d8] relative rounded-[24px] size-[36px]">
          <div className="absolute left-1/2 size-[36px] top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="block size-full" fill="none" viewBox="0 0 36 36">
              <g>
                <path d={svgPaths.p26a51200} fill="white" />
                <path d={svgPaths.p1576ac80} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
