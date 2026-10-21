import svgPaths from "./svg-iodosqglfy";

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
    <div className="bg-[#ffe082] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Idle</p>
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
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#008245] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#008245] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ahead
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

function DutyLists() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag1 />
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
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] right-[8px] text-[#282e38] text-[16px] text-nowrap text-right top-[8px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            by 50 mins
          </p>
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
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            for 10 mins
          </p>
          <Operator />
          <WorkStaus />
        </div>
      </div>
    </div>
  );
}

function CardEmployee() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[935px] rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] top-[69px] w-[353px]" data-name="Card-Employee">
      <Topbar />
      <Content />
    </div>
  );
}

function ShiftInfo1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon1() {
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

function IconButton1() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon1 />
    </div>
  );
}

function MoreOptionsActions1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton1 />
    </div>
  );
}

function Topbar1() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo1 />
          <MoreOptionsActions1 />
        </div>
      </div>
    </div>
  );
}

function About1() {
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

function Tag2() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function EmployeeStatus1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About1 />
      <EmployeeStatus1 />
    </div>
  );
}

function Place1() {
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

function Location1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place1 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame1 />
          <Location1 />
        </div>
      </div>
    </div>
  );
}

function Bar1() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar1 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom1 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function DutyLists1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag3 />
    </div>
  );
}

function WorkStaus1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar1 />
          <DutyLists1 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            30 mins left
          </p>
          <Operator1 />
          <WorkStaus1 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[107px] rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] top-[69px] w-[353px]" data-name="Card-Employee">
      <Topbar1 />
      <Content1 />
    </div>
  );
}

function ShiftInfo2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon2() {
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

function IconButton2() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon2 />
    </div>
  );
}

function MoreOptionsActions2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton2 />
    </div>
  );
}

function Topbar2() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo2 />
          <MoreOptionsActions2 />
        </div>
      </div>
    </div>
  );
}

function About2() {
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

function Tag4() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function EmployeeStatus2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About2 />
      <EmployeeStatus2 />
    </div>
  );
}

function Place2() {
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

function Location2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place2 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame2 />
          <Location2 />
        </div>
      </div>
    </div>
  );
}

function Bar2() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#f27975] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar2 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e33e3b] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Behind
      </p>
      <Bottom2 />
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function DutyLists2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag5 />
    </div>
  );
}

function WorkStaus2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar2 />
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] right-[8px] text-[#282e38] text-[16px] text-nowrap text-right top-[8px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            by 30 mins
          </p>
          <DutyLists2 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            30 mins left
          </p>
          <Operator2 />
          <WorkStaus2 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[521px] rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] top-[69px] w-[353px]" data-name="Card-Employee">
      <Topbar2 />
      <Content2 />
    </div>
  );
}

function ShiftInfo3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon3() {
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

function IconButton3() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon3 />
    </div>
  );
}

function MoreOptionsActions3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton3 />
    </div>
  );
}

function Topbar3() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo3 />
          <MoreOptionsActions3 />
        </div>
      </div>
    </div>
  );
}

function About3() {
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

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon_Left">
          <path d={svgPaths.p3bcd2b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <IconLeft />
    </div>
  );
}

function EmployeeStatus3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About3 />
      <EmployeeStatus3 />
    </div>
  );
}

function Place3() {
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

function Location3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place3 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame3 />
          <Location3 />
        </div>
      </div>
    </div>
  );
}

function Bar3() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar3 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom3 />
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 2</p>
      </div>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">+2</p>
      </div>
    </div>
  );
}

function DutyLists3() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" data-name="Duty Lists">
      <Tag7 />
      <Tag8 />
      <Tag9 />
    </div>
  );
}

function WorkStaus3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar3 />
          <DutyLists3 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            for 10 mins
          </p>
          <Operator3 />
          <WorkStaus3 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[1349px] rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] top-[69px] w-[353px]" data-name="Card-Employee">
      <Topbar3 />
      <Content3 />
    </div>
  );
}

function ShiftInfo4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon4() {
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

function IconButton4() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon4 />
    </div>
  );
}

function MoreOptionsActions4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton4 />
    </div>
  );
}

function Topbar4() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo4 />
          <MoreOptionsActions4 />
        </div>
      </div>
    </div>
  );
}

function About4() {
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

function IconLeft1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_12_14432)" id="Icon_Left">
          <path d={svgPaths.p1ce74600} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_12_14432">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <IconLeft1 />
    </div>
  );
}

function EmployeeStatus4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About4 />
      <EmployeeStatus4 />
    </div>
  );
}

function Place4() {
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

function Location4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place4 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame4 />
          <Location4 />
        </div>
      </div>
    </div>
  );
}

function Bar4() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar4 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom4 />
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function DutyLists4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag11 />
    </div>
  );
}

function WorkStaus4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar4 />
          <DutyLists4 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            for 30 mins
          </p>
          <Operator4 />
          <WorkStaus4 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-start left-[1763px] rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] top-[69px] w-[353px]" data-name="Card-Employee">
      <Topbar4 />
      <Content4 />
    </div>
  );
}

export default function CardStates() {
  return (
    <div className="bg-white relative size-full" data-name="Card States">
      <CardEmployee />
      <CardEmployee1 />
      <CardEmployee2 />
      <CardEmployee3 />
      <CardEmployee4 />
    </div>
  );
}