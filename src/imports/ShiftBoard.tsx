import svgPaths from "./svg-rh1g3fm2ym";

function Bar() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[92.33%] rounded-[4px] top-0" data-name="Fill" />
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        20%
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function DataPoint() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair />
    </div>
  );
}

function NameValuePair1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Target (50%)
      </p>
    </div>
  );
}

function DataPoint1() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[calc(50%+7px)] top-0 translate-x-[-50%]" data-name="Data Point">
      <NameValuePair1 />
    </div>
  );
}

function DataPoints() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint />
      <DataPoint1 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar />
      <DataPoints />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Task completion below target. Reassign or adjust as needed.
      </p>
      <Bottom />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon-Left">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #003396)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-[68px] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] right-[8px] rounded-[6px]" data-name="Button">
      <IconLeft />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Show More</p>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0 w-full" data-name="Tasks">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
          <ProgressBar />
          <Button />
        </div>
      </div>
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon-Right">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative rounded-[6px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        All Statuses
      </p>
      <IconRight />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[300px] relative shrink-0" data-name="🚧 Dropdown">
      <Input />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p89aed78} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InputSearch() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Input_Search">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#878a8f] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Search
          </p>
          <Search />
        </div>
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Filters">
      <Dropdown />
      <InputSearch />
    </div>
  );
}

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
        Jordan Suguitan
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
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

function Frame1() {
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
          <Frame1 />
          <Location />
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
          <ProgressBar1 />
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
            30 mins left
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
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
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
        Josh Penderville
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
        <g id="Icon_Left">
          <path d={svgPaths.p3bcd2b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <IconLeft1 />
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

function Frame2() {
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
        Room 102/B
      </p>
    </div>
  );
}

function Operator1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame2 />
          <Location1 />
        </div>
      </div>
    </div>
  );
}

function Bar2() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#008245] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
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
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#008245] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ahead
      </p>
      <Bottom2 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">6 East</p>
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
          <ProgressBar2 />
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] right-[8px] text-[#282e38] text-[16px] text-nowrap text-right top-[8px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            by 50 mins
          </p>
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
            for 15 mins
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
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
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
    <div className="box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-slate-500" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Inactive</p>
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

function Frame3() {
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
        Room 303/A
      </p>
    </div>
  );
}

function Operator2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame3 />
          <Location2 />
        </div>
      </div>
    </div>
  );
}

function Bar3() {
  return <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start rounded-[8px] shrink-0 w-full" data-name="Bar" />;
}

function Bottom3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar3 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        0% Complete
      </p>
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        N/A
      </p>
      <Bottom3 />
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

function Tag6() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 2</p>
      </div>
    </div>
  );
}

function DutyLists2() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" data-name="Duty Lists">
      <Tag5 />
      <Tag6 />
    </div>
  );
}

function WorkStaus2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar3 />
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
          <Operator2 />
          <WorkStaus2 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee2() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar2 />
      <Content2 />
    </div>
  );
}

function Employees() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Employees">
      <CardEmployee />
      <CardEmployee1 />
      <CardEmployee2 />
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
        Anup Lobo
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_9_12503)" id="Icon_Left">
          <path d={svgPaths.p1ce74600} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_12503">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <IconLeft2 />
    </div>
  );
}

function EmployeeStatus3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag7 />
    </div>
  );
}

function Frame5() {
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
        Room 202/A
      </p>
    </div>
  );
}

function Operator3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame5 />
          <Location3 />
        </div>
      </div>
    </div>
  );
}

function Bar4() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#f27975] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
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
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e33e3b] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Behind
      </p>
      <Bottom4 />
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">6 South East</p>
      </div>
    </div>
  );
}

function DutyLists3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag8 />
    </div>
  );
}

function WorkStaus3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar4 />
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] right-[8px] text-[#282e38] text-[16px] text-nowrap text-right top-[8px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            by 50 mins
          </p>
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
            for 30 mins
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
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
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
        Panch Arthaballe
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function EmployeeStatus4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag9 />
    </div>
  );
}

function Frame6() {
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
        Room 240/B
      </p>
    </div>
  );
}

function Operator4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame6 />
          <Location4 />
        </div>
      </div>
    </div>
  );
}

function Bar5() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#008245] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar5 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#008245] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ahead
      </p>
      <Bottom5 />
    </div>
  );
}

function Tag10() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">6 South West</p>
      </div>
    </div>
  );
}

function Tag11() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 2</p>
      </div>
    </div>
  );
}

function Tag12() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">+2</p>
      </div>
    </div>
  );
}

function DutyLists4() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" data-name="Duty Lists">
      <Tag10 />
      <Tag11 />
      <Tag12 />
    </div>
  );
}

function WorkStaus4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar5 />
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] right-[8px] text-[#282e38] text-[16px] text-nowrap text-right top-[8px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            by 50 mins
          </p>
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
            30 mins left
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
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar4 />
      <Content4 />
    </div>
  );
}

function ShiftInfo5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon5() {
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

function IconButton5() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon5 />
    </div>
  );
}

function MoreOptionsActions5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton5 />
    </div>
  );
}

function Topbar5() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo5 />
          <MoreOptionsActions5 />
        </div>
      </div>
    </div>
  );
}

function About5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="About">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',_sans-serif] font-bold overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Mark Bajorski
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function Tag13() {
  return (
    <div className="bg-[#ffe082] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Idle</p>
      </div>
    </div>
  );
}

function EmployeeStatus5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag13 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About5 />
      <EmployeeStatus5 />
    </div>
  );
}

function Place5() {
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

function Location5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place5 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 574/A
      </p>
    </div>
  );
}

function Operator5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame7 />
          <Location5 />
        </div>
      </div>
    </div>
  );
}

function Bar6() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar6 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom6 />
    </div>
  );
}

function Tag14() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">5 West</p>
      </div>
    </div>
  );
}

function DutyLists5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag14 />
    </div>
  );
}

function WorkStaus5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar6 />
          <DutyLists5 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            for 10 mins
          </p>
          <Operator5 />
          <WorkStaus5 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee5() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar5 />
      <Content5 />
    </div>
  );
}

function Employees1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Employees">
      <CardEmployee3 />
      <CardEmployee4 />
      <CardEmployee5 />
    </div>
  );
}

function Area() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Area">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Main
      </p>
      <Employees />
      <Employees1 />
    </div>
  );
}

function ShiftInfo6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon6() {
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

function IconButton6() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon6 />
    </div>
  );
}

function MoreOptionsActions6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton6 />
    </div>
  );
}

function Topbar6() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo6 />
          <MoreOptionsActions6 />
        </div>
      </div>
    </div>
  );
}

function About6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="About">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',_sans-serif] font-bold overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Jordan Suguitan
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function Tag15() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function EmployeeStatus6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag15 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About6 />
      <EmployeeStatus6 />
    </div>
  );
}

function Place6() {
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

function Location6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place6 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame8 />
          <Location6 />
        </div>
      </div>
    </div>
  );
}

function Bar7() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar7 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom7 />
    </div>
  );
}

function Tag16() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function Tag17() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 2</p>
      </div>
    </div>
  );
}

function Tag18() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">+2</p>
      </div>
    </div>
  );
}

function DutyLists6() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" data-name="Duty Lists">
      <Tag16 />
      <Tag17 />
      <Tag18 />
    </div>
  );
}

function WorkStaus6() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar7 />
          <DutyLists6 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            30 mins left
          </p>
          <Operator6 />
          <WorkStaus6 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee6() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar6 />
      <Content6 />
    </div>
  );
}

function ShiftInfo7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon7() {
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

function IconButton7() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon7 />
    </div>
  );
}

function MoreOptionsActions7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton7 />
    </div>
  );
}

function Topbar7() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo7 />
          <MoreOptionsActions7 />
        </div>
      </div>
    </div>
  );
}

function About7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="About">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',_sans-serif] font-bold overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Josh Penderville
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function IconLeft3() {
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

function Tag19() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <IconLeft3 />
    </div>
  );
}

function EmployeeStatus7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag19 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About7 />
      <EmployeeStatus7 />
    </div>
  );
}

function Place7() {
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

function Location7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place7 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 102/B
      </p>
    </div>
  );
}

function Operator7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame9 />
          <Location7 />
        </div>
      </div>
    </div>
  );
}

function Bar8() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#008245] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar8 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#008245] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ahead
      </p>
      <Bottom8 />
    </div>
  );
}

function Tag20() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">6 East</p>
      </div>
    </div>
  );
}

function DutyLists7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag20 />
    </div>
  );
}

function WorkStaus7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar8 />
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] right-[8px] text-[#282e38] text-[16px] text-nowrap text-right top-[8px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            by 50 mins
          </p>
          <DutyLists7 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            for 15 mins
          </p>
          <Operator7 />
          <WorkStaus7 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee7() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar7 />
      <Content7 />
    </div>
  );
}

function ShiftInfo8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon8() {
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

function IconButton8() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon8 />
    </div>
  );
}

function MoreOptionsActions8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton8 />
    </div>
  );
}

function Topbar8() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo8 />
          <MoreOptionsActions8 />
        </div>
      </div>
    </div>
  );
}

function About8() {
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

function Tag21() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-slate-500" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Inactive</p>
      </div>
    </div>
  );
}

function EmployeeStatus8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag21 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About8 />
      <EmployeeStatus8 />
    </div>
  );
}

function Place8() {
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

function Location8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place8 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 303/A
      </p>
    </div>
  );
}

function Operator8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame10 />
          <Location8 />
        </div>
      </div>
    </div>
  );
}

function Bar9() {
  return <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start rounded-[8px] shrink-0 w-full" data-name="Bar" />;
}

function Bottom9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar9 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        0% Complete
      </p>
    </div>
  );
}

function ProgressBar9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        N/A
      </p>
      <Bottom9 />
    </div>
  );
}

function Tag22() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function Tag23() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 2</p>
      </div>
    </div>
  );
}

function DutyLists8() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center overflow-clip relative shrink-0" data-name="Duty Lists">
      <Tag22 />
      <Tag23 />
    </div>
  );
}

function WorkStaus8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar9 />
          <DutyLists8 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <Operator8 />
          <WorkStaus8 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee8() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar8 />
      <Content8 />
    </div>
  );
}

function Employees2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Employees">
      <CardEmployee6 />
      <CardEmployee7 />
      <CardEmployee8 />
    </div>
  );
}

function Area1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Area">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        North West
      </p>
      <Employees2 />
    </div>
  );
}

function ShiftInfo9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon9() {
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

function IconButton9() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon9 />
    </div>
  );
}

function MoreOptionsActions9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton9 />
    </div>
  );
}

function Topbar9() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo9 />
          <MoreOptionsActions9 />
        </div>
      </div>
    </div>
  );
}

function About9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="About">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',_sans-serif] font-bold overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Jordan Suguitan
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function Tag24() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function EmployeeStatus9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag24 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About9 />
      <EmployeeStatus9 />
    </div>
  );
}

function Place9() {
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

function Location9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place9 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame11 />
          <Location9 />
        </div>
      </div>
    </div>
  );
}

function Bar10() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar10 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom10 />
    </div>
  );
}

function Tag25() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function DutyLists9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag25 />
    </div>
  );
}

function WorkStaus9() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar10 />
          <DutyLists9 />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            30 mins left
          </p>
          <Operator9 />
          <WorkStaus9 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee9() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar9 />
      <Content9 />
    </div>
  );
}

function ShiftInfo10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon10() {
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

function IconButton10() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon10 />
    </div>
  );
}

function MoreOptionsActions10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton10 />
    </div>
  );
}

function Topbar10() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo10 />
          <MoreOptionsActions10 />
        </div>
      </div>
    </div>
  );
}

function About10() {
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

function Tag26() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function EmployeeStatus10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag26 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About10 />
      <EmployeeStatus10 />
    </div>
  );
}

function Place10() {
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

function Location10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place10 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame12 />
          <Location10 />
        </div>
      </div>
    </div>
  );
}

function Bar11() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar11 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom11 />
    </div>
  );
}

function Tag27() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function DutyLists10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag27 />
    </div>
  );
}

function WorkStaus10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar11 />
          <DutyLists10 />
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            30 mins left
          </p>
          <Operator10 />
          <WorkStaus10 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee10() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar10 />
      <Content10 />
    </div>
  );
}

function Employees3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Employees">
      <CardEmployee9 />
      {[...Array(2).keys()].map((_, i) => (
        <CardEmployee10 key={i} />
      ))}
    </div>
  );
}

function ShiftInfo11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon11() {
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

function IconButton11() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon11 />
    </div>
  );
}

function MoreOptionsActions11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton11 />
    </div>
  );
}

function Topbar11() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo11 />
          <MoreOptionsActions11 />
        </div>
      </div>
    </div>
  );
}

function About11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="About">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',_sans-serif] font-bold overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Anup Lobo
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function IconLeft4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_9_12503)" id="Icon_Left">
          <path d={svgPaths.p1ce74600} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_9_12503">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tag28() {
  return (
    <div className="bg-slate-500 box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <IconLeft4 />
    </div>
  );
}

function EmployeeStatus11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag28 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About11 />
      <EmployeeStatus11 />
    </div>
  );
}

function Place11() {
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

function Location11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place11 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 202/A
      </p>
    </div>
  );
}

function Operator11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame13 />
          <Location11 />
        </div>
      </div>
    </div>
  );
}

function Bar12() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#f27975] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar12 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#e33e3b] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Behind
      </p>
      <Bottom12 />
    </div>
  );
}

function Tag29() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">6 South East</p>
      </div>
    </div>
  );
}

function DutyLists11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag29 />
    </div>
  );
}

function WorkStaus11() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar12 />
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] right-[8px] text-[#282e38] text-[16px] text-nowrap text-right top-[8px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            by 50 mins
          </p>
          <DutyLists11 />
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            for 30 mins
          </p>
          <Operator11 />
          <WorkStaus11 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee11() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar11 />
      <Content11 />
    </div>
  );
}

function ShiftInfo12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon12() {
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

function IconButton12() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon12 />
    </div>
  );
}

function MoreOptionsActions12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton12 />
    </div>
  );
}

function Topbar12() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo12 />
          <MoreOptionsActions12 />
        </div>
      </div>
    </div>
  );
}

function About12() {
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

function Tag30() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function EmployeeStatus12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag30 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About12 />
      <EmployeeStatus12 />
    </div>
  );
}

function Place12() {
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

function Location12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place12 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 101/A
      </p>
    </div>
  );
}

function Operator12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame14 />
          <Location12 />
        </div>
      </div>
    </div>
  );
}

function Bar13() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar13 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom13 />
    </div>
  );
}

function Tag31() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Behavioral Health</p>
      </div>
    </div>
  );
}

function DutyLists12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag31 />
    </div>
  );
}

function WorkStaus12() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar13 />
          <DutyLists12 />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            30 mins left
          </p>
          <Operator12 />
          <WorkStaus12 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee12() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar12 />
      <Content12 />
    </div>
  );
}

function ShiftInfo13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Shift Info">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Medium',_sans-serif] font-medium leading-[normal] overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[14px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        1st Shift (6:45 AM – 3:15 PM)
      </p>
    </div>
  );
}

function Icon13() {
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

function IconButton13() {
  return (
    <div className="absolute inset-[-33.333%] rounded-[6px]" data-name="Icon Button">
      <Icon13 />
    </div>
  );
}

function MoreOptionsActions13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More Options_Actions">
      <IconButton13 />
    </div>
  );
}

function Topbar13() {
  return (
    <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Topbar">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[8px] relative w-full">
          <ShiftInfo13 />
          <MoreOptionsActions13 />
        </div>
      </div>
    </div>
  );
}

function About13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0" data-name="About">
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',_sans-serif] font-bold overflow-ellipsis overflow-hidden relative shrink-0 text-[#282e38] text-[18px] text-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Mark Bajorski
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        HouseKeeper
      </p>
    </div>
  );
}

function Tag32() {
  return (
    <div className="bg-[#ffe082] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Idle</p>
      </div>
    </div>
  );
}

function EmployeeStatus13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Employee Status">
      <Tag32 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <About13 />
      <EmployeeStatus13 />
    </div>
  );
}

function Place13() {
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

function Location13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[249px]" data-name="Location">
      <Place13 />
      <p className="-webkit-box absolute font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] left-[23px] overflow-ellipsis overflow-hidden right-[5px] text-[#282e38] text-[14px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Room 574/A
      </p>
    </div>
  );
}

function Operator13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Operator">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center p-[8px] relative w-full">
          <Frame15 />
          <Location13 />
        </div>
      </div>
    </div>
  );
}

function Bar14() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[70%] rounded-[8px] top-0" data-name="Fill" />
    </div>
  );
}

function Bottom14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar14 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        30% Complete
      </p>
    </div>
  );
}

function ProgressBar14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track
      </p>
      <Bottom14 />
    </div>
  );
}

function Tag33() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">5 West</p>
      </div>
    </div>
  );
}

function DutyLists13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Duty Lists">
      <Tag33 />
    </div>
  );
}

function WorkStaus13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Work Staus">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <ProgressBar14 />
          <DutyLists13 />
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
          <p className="absolute font-['DM_Sans:Italic',_sans-serif] font-normal italic leading-[normal] right-[16px] text-[14px] text-nowrap text-right text-slate-500 top-[49px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            for 10 mins
          </p>
          <Operator13 />
          <WorkStaus13 />
        </div>
      </div>
    </div>
  );
}

function CardEmployee13() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] shrink-0" data-name="Card-Employee">
      <Topbar13 />
      <Content13 />
    </div>
  );
}

function Employees4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Employees">
      <CardEmployee11 />
      <CardEmployee12 />
      <CardEmployee13 />
    </div>
  );
}

function Area2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Area">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        South
      </p>
      <Employees3 />
      <Employees4 />
    </div>
  );
}

function Areas() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Areas">
      <Area />
      <Area1 />
      <Area2 />
    </div>
  );
}

function Areas1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-[24px] px-0 py-[24px] top-[138px] w-[1091px]" data-name="Areas">
      <Tasks />
      <Filters />
      <Areas />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Title">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[32px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Shift Board
      </p>
    </div>
  );
}

function IconLeft5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon-Left">
          <path d={svgPaths.p6ea8c00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <IconLeft5 />
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Today (Oct 14)
          </p>
        </div>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="🚧 Dropdown">
      <Input1 />
    </div>
  );
}

function Tag34() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shift 1 (6:45 AM – 3:15 PM)</p>
      </div>
    </div>
  );
}

function Tag35() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shift 2 (3:15 PM – 10:15 PM)</p>
      </div>
    </div>
  );
}

function IconLeft6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon_Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon_Left">
          <path d={svgPaths.p121ff280} fill="var(--fill-0, #1846A0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag36() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconLeft6 />
    </div>
  );
}

function Shifts() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0" data-name="Shifts">
      <Tag34 />
      <Tag35 />
      <Tag36 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Dropdown1 />
      <Shifts />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Left">
      <Title />
      <Frame4 />
    </div>
  );
}

function IconLeft7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon-Left">
          <path d={svgPaths.p21cef280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#003396] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center p-[16px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconLeft7 />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">New Task</p>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Right">
      <Button1 />
    </div>
  );
}

function TopTitleAction() {
  return (
    <div className="bg-white box-border content-stretch flex items-start justify-between pb-[16px] pointer-events-auto pt-[24px] px-[24px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] sticky top-0" data-name="Top_Title & Action">
      <Left />
      <Right />
    </div>
  );
}

function AreaContent() {
  return (
    <div className="absolute bottom-0 left-[91px] overflow-x-clip overflow-y-auto right-0 top-[76px]" data-name="Area_Content">
      <Areas1 />
      <div className="absolute inset-0 pointer-events-none">
        <TopTitleAction />
      </div>
    </div>
  );
}

function TaskUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TaskUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TaskUp">
          <path d={svgPaths.p29959b80} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLink() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <div aria-hidden="true" className="absolute border-[#0c76d8] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <TaskUp />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tasks
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[8.33%] left-0 right-[8.78%] top-[9.64%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Group">
          <path d={svgPaths.p1339fe80} fill="var(--fill-0, #282E38)" id="Vector" />
          <path d={svgPaths.p81ab180} fill="var(--fill-0, #282E38)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClearVue() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ClearVue">
      <Group />
    </div>
  );
}

function NavLink1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <ClearVue />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Assess-ments
      </p>
    </div>
  );
}

function PatientDining() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Patient Dining">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_9_12465)" id="Patient Dining">
          <path d={svgPaths.p24cb6880} fill="var(--fill-0, #282E38)" id="Vector" />
          <path d={svgPaths.p26a85e00} fill="var(--fill-0, #282E38)" id="Vector_2" />
          <path d={svgPaths.p23ce0080} fill="var(--fill-0, #282E38)" id="Vector_3" />
          <path d={svgPaths.p33fc8bf0} fill="var(--fill-0, #282E38)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_9_12465">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <PatientDining />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Meal Ordering
      </p>
    </div>
  );
}

function TrayTracking() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="TrayTracking">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="TrayTracking">
          <path d={svgPaths.p1ef9c900} fill="var(--fill-0, #282E38)" id="Vector" />
          <path d={svgPaths.p3bdeda00} fill="var(--fill-0, #282E38)" id="Vector_2" />
          <path d={svgPaths.p2ae29d00} fill="var(--fill-0, #282E38)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function NavLink3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <TrayTracking />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tray Tracking
      </p>
    </div>
  );
}

function KdsKitchenDisplaySystem() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="KDS (Kitchen Display System)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="KDS (Kitchen Display System)">
          <path d={svgPaths.p307c9c40} fill="var(--fill-0, #282E38)" id="Vector" />
          <path d={svgPaths.pdb36100} fill="var(--fill-0, #282E38)" id="Vector_2" />
          <path d={svgPaths.p1c7dd600} fill="var(--fill-0, #282E38)" id="Vector_3" />
          <path d={svgPaths.p13a2a280} fill="var(--fill-0, #282E38)" id="Vector_4" />
          <path d={svgPaths.p25d4e580} fill="var(--fill-0, #282E38)" id="Vector_5" />
          <path d={svgPaths.p24c60180} fill="var(--fill-0, #282E38)" id="Vector_6" />
          <path d={svgPaths.p211aad70} fill="var(--fill-0, #282E38)" id="Vector_7" />
          <path d={svgPaths.p3d149f0} fill="var(--fill-0, #282E38)" id="Vector_8" />
          <path d={svgPaths.p20c703f0} fill="var(--fill-0, #282E38)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function NavLink4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <KdsKitchenDisplaySystem />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        KDS
      </p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Settings">
          <path d={svgPaths.p1755f080} fill="var(--fill-0, #282E38)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function NavLink5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <Settings />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Settings
      </p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Top">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
      <NavLink3 />
      <NavLink4 />
      <NavLink5 />
    </div>
  );
}

function Admin() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Admin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Admin">
          <path d={svgPaths.p3008d400} fill="var(--fill-0, #282E38)" id="Vector" />
          <path d={svgPaths.p1a359d00} fill="var(--fill-0, #282E38)" id="Vector_2" />
          <path d={svgPaths.p12885980} fill="var(--fill-0, #282E38)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function NavLink6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <Admin />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Admin
      </p>
    </div>
  );
}

function Message() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Message">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Message">
          <path d={svgPaths.p2977fa80} fill="var(--fill-0, #282E38)" id="Vector" />
          <path d={svgPaths.p350f4b80} fill="var(--fill-0, #282E38)" id="Vector_2" />
          <path d={svgPaths.pdaa7400} fill="var(--fill-0, #282E38)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function NavLink7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <Message />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Message
      </p>
    </div>
  );
}

function Analytics() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Analytics">
      <div className="absolute bottom-0 left-[-4.17%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
          <g id="Analytics">
            <path d={svgPaths.p217a2480} id="Vector" stroke="var(--stroke-0, #282E38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M18 5H24V13" id="Vector_2" stroke="var(--stroke-0, #282E38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavLink8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] relative shrink-0 w-full" data-name="NavLink">
      <Analytics />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Analytics
      </p>
    </div>
  );
}

function Bottom15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <NavLink6 />
      <NavLink7 />
      <NavLink8 />
    </div>
  );
}

function SideNav() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex flex-col items-start justify-between left-0 pb-[8px] pt-0 px-0 top-[76px] w-[91px]" data-name="SideNav">
      <div aria-hidden="true" className="absolute border-[#d9dbde] border-[0px_1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
      <Top />
      <Bottom15 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute bottom-0 left-0 right-[0.12%] top-[0.54%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95 26">
        <g id="Logo">
          <path d={svgPaths.p128438f0} fill="var(--fill-0, #050E1F)" id="Vector" />
          <path d={svgPaths.p1b4adeb0} fill="var(--fill-0, #050E1F)" id="Vector_2" />
          <path d={svgPaths.p11b85b00} fill="var(--fill-0, #050E1F)" id="Vector_3" />
          <path d={svgPaths.p2d6f4700} fill="var(--fill-0, #050E1F)" id="Vector_4" />
          <path d={svgPaths.p19a78040} fill="var(--fill-0, #050E1F)" id="Vector_5" />
          <g id="Group">
            <path d={svgPaths.p2c0ae780} fill="var(--fill-0, #050E1F)" id="Vector_6" />
            <path d={svgPaths.p1611dda0} fill="url(#paint0_linear_9_12514)" id="Vector_7" />
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
  );
}

function ProductLogos() {
  return (
    <div className="h-[26px] overflow-clip relative shrink-0 w-[95px]" data-name="Product Logos">
      <Logo />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Left Side">
      <ProductLogos />
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon-Right">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[8px] relative rounded-[6px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        EVS 12345 - St. Sebastian’s Hospital
      </p>
      <IconRight1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-1/2 size-[36px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 1">
          <g id="SG">
            <path d={svgPaths.p26a51200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1576ac80} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#0c76d8] relative rounded-[24px] shrink-0 size-[36px]" data-name="Avatar">
      <Frame />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right Side">
      <Input2 />
      <Avatar />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[76px] items-center justify-between left-0 px-[24px] py-[16px] right-0 shadow-[0px_1px_11px_0px_#c0c1c3] top-0" data-name="NavBar">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default function ShiftBoard() {
  return (
    <div className="bg-[#f7f8f9] relative size-full" data-name="ShiftBoard">
      <AreaContent />
      <SideNav />
      <NavBar />
    </div>
  );
}