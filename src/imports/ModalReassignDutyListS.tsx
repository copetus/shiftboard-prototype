import svgPaths from "./svg-q8w1b094n6";

function CheckSymbol() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[4px] px-0 relative shrink-0 w-[22px]" data-name="Check Symbol">
      <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full" data-name="Check Symbol">
        <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function AboutInfo() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow items-start min-h-px min-w-px relative shrink-0" data-name="About Info">
      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] max-w-[400px] min-h-px min-w-[300px] relative shrink-0 text-[#282e38]" data-name="NameValue Pair">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Hospital 4th Floor
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Texas Childrens West Campus EVS Room WC 460 00 Family Transition
        </p>
      </div>
      <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38]" data-name="NameValue Pair">
        <p className="relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Estimated duration
        </p>
        <p className="relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          06:21hr
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <CheckSymbol />
      <AboutInfo />
    </div>
  );
}

function CheckSymbol1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[4px] px-0 relative shrink-0 w-[22px]" data-name="Check Symbol">
      <div className="bg-[#003396] relative rounded-[4px] shrink-0 size-[22px]" data-name="Check Symbol">
        <div className="absolute inset-[31.82%_19.53%_25.82%_22.73%]" data-name="Vector">
          <div className="absolute inset-[4.43%_3.25%_8.89%_3.28%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
              <path d={svgPaths.p33b54c00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutInfo1() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow items-start min-h-px min-w-px relative shrink-0" data-name="About Info">
      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] max-w-[400px] min-h-px min-w-[300px] relative shrink-0" data-name="NameValue Pair">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#003396] text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Hospital 3rd Floor
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#1846a0] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`St. Luke's Health System Surgical Suite S 350`}</p>
      </div>
      <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 text-[#003396]" data-name="NameValue Pair">
        <p className="relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          Estimated duration
        </p>
        <p className="relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          04:15hr
        </p>
      </div>
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <CheckSymbol1 />
      <AboutInfo1 />
    </div>
  );
}

function DutyList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[6px] shrink-0 w-[740px]" data-name="Duty List">
      <div className="bg-[#f7f8f9] relative rounded-[6px] shrink-0 w-full" data-name="Duty List">
        <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
            <About />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f7ff] relative rounded-[6px] shrink-0 w-full" data-name="Duty List">
        <div aria-hidden="true" className="absolute border border-[#91a6d0] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
            <About1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-0 relative size-full">
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#282e38] text-[24px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Cancel Duty List(s)
          </p>
          <DutyList />
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="🚧 Dropdown">
            <p className="font-['DM_Sans:Bold',sans-serif] font-['DM_Sans:Regular',sans-serif] font-bold font-normal leading-[normal] relative shrink-0 text-[0px] text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              <span style={{ fontVariationSettings: "'opsz' 14" }}>Select Reason</span>
              <span className="text-[#d6302d]" style={{ fontVariationSettings: "'opsz' 14" }}>
                *
              </span>
            </p>
            <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
              <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
                  <div className="absolute bottom-px left-[2px] right-px rounded-[6px] top-px" data-name="Outline_Focused">
                    <div aria-hidden="true" className="absolute border-[#a9bada] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[9px]" />
                    <div className="absolute inset-0 rounded-[6px]" data-name="Border_Blue100">
                      <div aria-hidden="true" className="absolute border border-[#003396] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
                    </div>
                  </div>
                  <p className="basis-0 font-['DM_Sans:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#878a8f] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Select
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon-Right">
                    <div className="absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%]" data-name="Vector">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                        <path d={svgPaths.p180a8a80} fill="var(--fill-0, #64748B)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ModalReassignDutyListS() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start justify-between overflow-clip px-0 py-[24px] relative rounded-[6px] shadow-[0px_2px_12px_0px_rgba(41,46,55,0.1)] size-full" data-name="Modal-Reassign Duty List(s)">
      <div className="absolute overflow-clip right-[24px] size-[32px] top-[16px]" data-name="close">
        <div className="absolute inset-[20.833%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p2e824380} fill="var(--fill-0, #282E38)" id="Vector" />
          </svg>
        </div>
      </div>
      <Content />
      <div className="relative shrink-0 w-full" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[#cccfd4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="size-full">
          <div className="box-border content-start flex flex-wrap gap-[20px] isolate items-start pb-0 pt-[24px] px-[24px] relative w-full">
            <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0 z-[2]" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#003396] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="flex flex-row items-center justify-center min-w-inherit size-full">
                <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
                  <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[normal] whitespace-pre">Cancel</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 bg-[#91a6d0] grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0 z-[1]" data-name="Button">
              <div className="flex flex-row items-center justify-center min-w-inherit size-full">
                <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
                  <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[normal] whitespace-pre">Cancel Duty List(s)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}