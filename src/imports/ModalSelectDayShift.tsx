import svgPaths from "./svg-5ychjwd32k";

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon-Left">
          <path d={svgPaths.p73b2780} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Button">
      <IconLeft />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[24px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Today (Oct 14)</p>
      </div>
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

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <CheckSymbol />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shift 1 (6:45 AM – 3:15 PM)</p>
      </div>
    </div>
  );
}

function CheckSymbol1() {
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <CheckSymbol1 />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shift 2 (3:15 PM – 10:15 PM)</p>
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

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <CheckSymbol2 />
      <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shift 3 (10:15 PM – 5:15 AM)</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Checkbox />
      <Checkbox1 />
      <Checkbox2 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-0 relative w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#282e38] text-[24px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Select Shift
          </p>
          <Button />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <button className="basis-0 bg-white grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#003396] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal] whitespace-pre">Cancel</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Button2() {
  return (
    <button className="basis-0 bg-[#003396] grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[normal] whitespace-pre">Apply</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#cccfd4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-start cursor-pointer flex flex-wrap gap-[20px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Close() {
  return (
    <button className="absolute block cursor-pointer right-[24px] size-[32px] top-[16px] z-[1]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close">
          <path d={svgPaths.p2c7ebf00} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

export default function ModalSelectDayShift() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] isolate items-start overflow-clip px-0 py-[24px] relative rounded-[6px] shadow-[0px_2px_12px_0px_rgba(41,46,55,0.1)] size-full" data-name="Modal-Select Day+Shift">
      <Content />
      <Footer />
      <Close />
    </div>
  );
}