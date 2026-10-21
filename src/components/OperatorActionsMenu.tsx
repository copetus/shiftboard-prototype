import svgPaths from "../imports/svg-r48d9qwdqb";

interface OperatorActionsMenuProps {
  onReassign?: () => void;
  onCancel?: () => void;
}

function ReassignIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-[8.33%_4.17%_9.55%_12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g>
            <g>
              <path clipRule="evenodd" d={svgPaths.p3dbe1980} fill="#282E38" fillRule="evenodd" />
              <path d={svgPaths.p3b83ee80} fill="#282E38" />
              <path d={svgPaths.p36fedd00} fill="#282E38" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CancelIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p2511d980} fill="#D6302D" />
        </g>
      </svg>
    </div>
  );
}

export function OperatorActionsMenu({ onReassign, onCancel }: OperatorActionsMenuProps) {
  return (
    <div className="operator-actions-menu bg-white box-border content-stretch flex flex-col items-start px-0 py-[4px] rounded-[8px] shadow-[0px_2px_12px_0px_#dcdcdd] w-[280px]">
      {/* Reassign Duty List(s) */}
      <button
        onClick={onReassign}
        className="bg-white relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border-[#d9dbde] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
            <ReassignIcon />
            <p className="basis-0 font-['DM_Sans'] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Reassign Duty List(s)
            </p>
          </div>
        </div>
      </button>

      {/* Cancel Duty List(s) */}
      <button
        onClick={onCancel}
        className="bg-white relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[10px] items-center px-[16px] py-[12px] relative w-full">
            <CancelIcon />
            <p className="basis-0 font-['DM_Sans'] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#d6302d] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Cancel Duty List(s)
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
