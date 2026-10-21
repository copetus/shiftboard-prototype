function MenuItems() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Area Clean
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuItems1() {
  return (
    <div className="bg-[#f1f7ff] relative shrink-0 w-full" data-name="Menu Items">
      <div aria-hidden="true" className="absolute border-[#0c76d8] border-[0px_0px_0px_3px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Clean-patient rooms
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuItems2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Clean-staff areas
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuItems3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Deliver Food
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuItems4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Discharge Clean
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuItems5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Discharge Clean patient
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DropdownMenu() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shadow-[0px_2px_12px_0px_#dcdcdd] size-full" data-name="Dropdown Menu">
      <MenuItems />
      <MenuItems1 />
      <MenuItems2 />
      <MenuItems3 />
      <MenuItems4 />
      <MenuItems5 />
    </div>
  );
}