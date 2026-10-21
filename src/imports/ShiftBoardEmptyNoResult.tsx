import svgPaths from "./svg-id0ycrff7y";

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

function Areas() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal gap-[8px] items-start leading-[normal] relative shrink-0 text-black text-center w-full" data-name="Areas">
      <p className="relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        There are no operators to show for your selection
      </p>
      <p className="relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Try adjusting the date or shift.
      </p>
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

function IconLeft1() {
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
          <IconLeft1 />
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Day after tomorrow (Oct 16)
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

function Tag() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shift 1 (6:45 AM – 3:15 PM)</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shift 2 (3:15 PM – 10:15 PM)</p>
      </div>
    </div>
  );
}

function IconLeft2() {
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

function Tag2() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconLeft2 />
    </div>
  );
}

function Shifts() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0" data-name="Shifts">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Frame1() {
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
      <Frame1 />
    </div>
  );
}

function IconLeft3() {
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
      <IconLeft3 />
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
    <div className="absolute bg-white box-border content-stretch flex items-start justify-between left-0 pb-[16px] pt-[24px] px-[24px] right-0 shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] top-0" data-name="Top_Title & Action">
      <Left />
      <Right />
    </div>
  );
}

function AreaContent() {
  return (
    <div className="absolute bottom-0 left-[91px] overflow-x-clip overflow-y-auto right-0 top-[76px]" data-name="Area_Content">
      <Areas1 />
      <TopTitleAction />
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
        <g clipPath="url(#clip0_53_7215)" id="Patient Dining">
          <path d={svgPaths.p24cb6880} fill="var(--fill-0, #282E38)" id="Vector" />
          <path d={svgPaths.p26a85e00} fill="var(--fill-0, #282E38)" id="Vector_2" />
          <path d={svgPaths.p23ce0080} fill="var(--fill-0, #282E38)" id="Vector_3" />
          <path d={svgPaths.p33fc8bf0} fill="var(--fill-0, #282E38)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_53_7215">
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

function Bottom1() {
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
      <Bottom1 />
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
            <path d={svgPaths.p1611dda0} fill="url(#paint0_linear_53_7135)" id="Vector_7" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_53_7135" x1="64.9302" x2="52.5469" y1="11.7006" y2="18.7495">
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

export default function ShiftBoardEmptyNoResult() {
  return (
    <div className="bg-[#f7f8f9] relative size-full" data-name="ShiftBoard-Empty/No result">
      <AreaContent />
      <SideNav />
      <NavBar />
    </div>
  );
}