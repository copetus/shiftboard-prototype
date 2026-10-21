import svgPaths from "./svg-r48d9qwdqb";

function Icon() {
  return (
    <div className="absolute inset-[8.33%_4.17%_9.55%_12.5%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="icon">
            <path clipRule="evenodd" d={svgPaths.p3dbe1980} fill="var(--fill-0, #282E38)" fillRule="evenodd" />
            <path d={svgPaths.p3b83ee80} fill="var(--fill-0, #282E38)" />
            <path d={svgPaths.p36fedd00} fill="var(--fill-0, #282E38)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ReassignTask() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Reassign Task">
      <Icon />
    </div>
  );
}

function MenuItems() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Menu Items">
      <div aria-hidden="true" className="absolute border-[#d9dbde] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
          <ReassignTask />
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Reassign Duty List(s)
          </p>
        </div>
      </div>
    </div>
  );
}

function Cancel() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="cancel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="cancel">
          <path d={svgPaths.p2511d980} fill="var(--fill-0, #D6302D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItems1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
          <Cancel />
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#d6302d] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Cancel Duty List(s)
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PopupMenu() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start px-0 py-[4px] relative rounded-[8px] shadow-[0px_2px_12px_0px_#dcdcdd] size-full" data-name="PopupMenu">
      <MenuItems />
      <MenuItems1 />
    </div>
  );
}