import svgPaths from "./svg-l3u9yeoxj6";

function ShiftInfo() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3fdba000} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon />
    </div>
  );
}

function MoreOptionsActions() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton />
    </div>
  );
}

function Topbar() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo />
          <MoreOptionsActions />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="About">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',_sans-serif] font-bold overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sadia Atzenhofer
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-slate-500" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Inactive</p>
      </div>
    </div>
  );
}

function EmployeeStatus() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About />
      <EmployeeStatus />
    </div>
  );
}

function Place() {
  return (
    <div className="absolute left-[-5px] size-[24px] top-0" data-name="place">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="place">
          <path d={svgPaths.p2668b180} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame />
          <Location />
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start rounded-[8px] shrink-0 w-full" data-name="Bar" />;
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        0% Complete
      </p>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        N/A
      </p>
      <Bottom />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 2</p>
      </div>
    </div>
  );
}

function DutyLists() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" data-name="Duty Lists">
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function WorkStaus() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar />
          <DutyLists />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <Operator />
          <WorkStaus />
        </div>
      </div>
    </div>
  );
}

export default function CardEmployee() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] size-full" data-name="Card-Employee">
      <Topbar />
      <Content />
    </div>
  );
}