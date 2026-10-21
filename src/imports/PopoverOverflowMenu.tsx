function Tag() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 3</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f7f8f9] box-border content-stretch flex gap-[4px] items-center justify-end px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['DM_Sans:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">DutyList 4</p>
      </div>
    </div>
  );
}

export default function PopoverOverflowMenu() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Popover-Overflow Menu">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
          <Tag />
          <Tag1 />
        </div>
      </div>
    </div>
  );
}