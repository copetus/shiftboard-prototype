import svgPaths from "./svg-vtf9bx6xaz";

function TaskAlt() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="task_alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="task_alt">
          <path d={svgPaths.p3d154700} fill="var(--fill-0, #008245)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <path d={svgPaths.p3fd9e500} fill="var(--fill-0, #282E38)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Alert() {
  return (
    <div className="bg-[#e0f1e9] relative rounded-[4px] size-full" data-name="Alert">
      <div aria-hidden="true" className="absolute border-[#008245] border-[1px_1px_1px_5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative size-full">
          <TaskAlt />
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Alert message
          </p>
          <Close />
        </div>
      </div>
    </div>
  );
}