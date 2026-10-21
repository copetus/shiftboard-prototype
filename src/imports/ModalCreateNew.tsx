import svgPaths from "./svg-4lr7at9zxn";

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
    <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Clean-patient rooms
          </p>
          <IconRight />
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="🚧 Dropdown">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-['DM_Sans:Regular',_sans-serif] font-bold font-normal leading-[normal] relative shrink-0 text-[0px] text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span style={{ fontVariationSettings: "'opsz' 14" }}>Task Class</span>
        <span className="text-[#d6302d]" style={{ fontVariationSettings: "'opsz' 14" }}>
          *
        </span>
      </p>
      <Input />
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

function Input1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Pavilion\2\P2-202-A, Pavilion\5\P5-502-B
          </p>
          <IconRight1 />
        </div>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="🚧 Dropdown">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-['DM_Sans:Regular',_sans-serif] font-bold font-normal leading-[normal] relative shrink-0 text-[0px] text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span style={{ fontVariationSettings: "'opsz' 14" }}>Select Location</span>
        <span className="text-[#d6302d]" style={{ fontVariationSettings: "'opsz' 14" }}>
          *
        </span>
      </p>
      <Input1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Dropdown1 />
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4e535b] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Selecting multiple locations will create one task per location.
      </p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            10
          </p>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]" data-name="Text Input">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-['DM_Sans:Regular',_sans-serif] font-bold font-normal leading-[normal] relative shrink-0 text-[0px] text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span style={{ fontVariationSettings: "'opsz' 14" }}>Standard Duration (min)</span>
        <span className="text-[#d6302d]" style={{ fontVariationSettings: "'opsz' 14" }}>
          *
        </span>
      </p>
      <Input2 />
    </div>
  );
}

function Schedule() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="schedule">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="schedule">
          <path d={svgPaths.p30e64772} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            10:45 AM
          </p>
          <Schedule />
        </div>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]" data-name="Text Input">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Specific Time
      </p>
      <Input3 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-slate-500" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Repeat</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative rounded-[6px] shrink-0 w-[85px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        1
      </p>
    </div>
  );
}

function Repeat() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Repeat">
      <Checkbox />
      <Input4 />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-slate-500" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">
          times per shift<span className="text-[#d6302d]">*</span>
        </p>
      </div>
    </div>
  );
}

function IconRight2() {
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

function Input5() {
  return (
    <div className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Specific Days
          </p>
          <IconRight2 />
        </div>
      </div>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="🚧 Dropdown">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-['DM_Sans:Regular',_sans-serif] font-bold font-normal leading-[normal] relative shrink-0 text-[0px] text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span style={{ fontVariationSettings: "'opsz' 14" }}>Frequency</span>
        <span className="text-[#d6302d]" style={{ fontVariationSettings: "'opsz' 14" }}>
          *
        </span>
      </p>
      <Input5 />
    </div>
  );
}

function CheckSymbol() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Check Symbol">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Check Symbol">
          <path d={svgPaths.p10e14680} fill="var(--fill-0, #003396)" />
          <path d={svgPaths.p1ca57180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Checkbox">
      <CheckSymbol />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Sunday</p>
      </div>
    </div>
  );
}

function CheckSymbol1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[22px]" data-name="Check Symbol">
      <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Checkbox">
      <CheckSymbol1 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Monday</p>
      </div>
    </div>
  );
}

function CheckSymbol2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[22px]" data-name="Check Symbol">
      <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Checkbox">
      <CheckSymbol2 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Tuesday</p>
      </div>
    </div>
  );
}

function CheckSymbol3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[22px]" data-name="Check Symbol">
      <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Checkbox">
      <CheckSymbol3 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Wednesday</p>
      </div>
    </div>
  );
}

function CheckSymbol4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[22px]" data-name="Check Symbol">
      <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Checkbox">
      <CheckSymbol4 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Thursday</p>
      </div>
    </div>
  );
}

function CheckSymbol5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[22px]" data-name="Check Symbol">
      <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Checkbox">
      <CheckSymbol5 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Friday</p>
      </div>
    </div>
  );
}

function CheckSymbol6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Check Symbol">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Check Symbol">
          <path d={svgPaths.p10e14680} fill="var(--fill-0, #003396)" />
          <path d={svgPaths.p1ca57180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]" data-name="Checkbox">
      <CheckSymbol6 />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Saturday</p>
      </div>
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Checkboxes">
      <Checkbox1 />
      <Checkbox2 />
      <Checkbox3 />
      <Checkbox4 />
      <Checkbox5 />
      <Checkbox6 />
      <Checkbox7 />
    </div>
  );
}

function RepeatDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Repeat Details">
      <Repeat />
      <Dropdown2 />
      <Checkboxes />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <div className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="mb-0">This is a note the user wrote.</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Input">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Notes
      </p>
      <Input6 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[3]" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-0 relative size-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#282e38] text-[24px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Create New Task
          </p>
          <Dropdown />
          <Frame />
          <TextInput />
          <TextInput1 />
          <RepeatDetails />
          <TextInput2 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-white grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#003396] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal] whitespace-pre">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#003396] grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal] whitespace-pre">Create New Task</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-start flex flex-wrap gap-[20px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="absolute right-[24px] size-[32px] top-[16px] z-[1]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close">
          <path d={svgPaths.p2c7ebf00} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function ModalCreateNew() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col isolate items-start overflow-clip px-0 py-[24px] relative rounded-[6px] shadow-[0px_2px_12px_0px_rgba(41,46,55,0.1)] size-full" data-name="Modal-Create New">
      <Content />
      <Footer />
      <Close />
    </div>
  );
}