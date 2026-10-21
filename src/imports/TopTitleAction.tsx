import svgPaths from "./svg-5hrkfxdaho";

function Title() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Title">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[32px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Shift Board
      </p>
    </div>
  );
}

function IconLeft() {
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

function Input() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <IconLeft />
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Today (Oct 14)
          </p>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="🚧 Dropdown">
      <Input />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#003396] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function ShiftsSimplifiedRepresentation() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[8px] h-full items-center justify-end p-[8px] relative rounded-[6px] shrink-0" data-name="Shifts-Simplified Representation">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Tag />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3059a9] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Shifts</p>
      </div>
    </div>
  );
}

function IconLeft1() {
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

function Tag1() {
  return (
    <div className="bg-[#f1f7ff] box-border content-stretch flex gap-[4px] h-full items-center justify-end px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#7993c6] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconLeft1 />
    </div>
  );
}

function Shifts() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0" data-name="Shifts">
      <ShiftsSimplifiedRepresentation />
      <Tag1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Dropdown />
      <Shifts />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Left">
      <Title />
      <Frame />
    </div>
  );
}

function IconLeft2() {
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

function Button() {
  return (
    <div className="bg-[#003396] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center p-[16px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconLeft2 />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">New Task</p>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Right">
      <Button />
    </div>
  );
}

export default function TopTitleAction() {
  return (
    <div className="bg-white relative shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] size-full" data-name="Top_Title & Action">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pb-[16px] pt-[24px] px-[24px] relative size-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}