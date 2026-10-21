import svgPaths from "../imports/svg-5ychjwd32k";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface ShiftOption {
  id: string;
  label: string;
  time: string;
}

interface ShiftSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedShifts: string[];
  onShiftToggle: (shiftId: string) => void;
  selectedDateLabel: string;
  onBack: () => void;
  onApply: () => void;
}

const shiftOptions: ShiftOption[] = [
  { id: "shift1", label: "Shift 1", time: "6:45 AM – 3:15 PM" },
  { id: "shift2", label: "Shift 2", time: "3:15 PM – 10:15 PM" },
  { id: "shift3", label: "Shift 3", time: "10:15 PM – 5:15 AM" },
];

function CheckSymbol({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <div className="relative shrink-0 size-[22px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g>
            <path d={svgPaths.p10e14680} fill="#003396" />
            <path d={svgPaths.p1ca57180} fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[22px]">
      <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox({ option, checked, onClick }: { option: ShiftOption; checked: boolean; onClick: () => void }) {
  return (
    <button aria-pressed={checked} onClick={onClick} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full text-left cursor-pointer">
      <CheckSymbol checked={checked} />
      <div
        className={`flex flex-col justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap ${
          checked ? "font-['DM_Sans'] font-bold" : "font-['DM_Sans'] font-normal"
        }`}
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[normal] whitespace-pre">{`${option.label} (${option.time})`}</p>
      </div>
    </button>
  );
}

export function ShiftSelectionModal({
  open,
  onOpenChange,
  selectedShifts,
  onShiftToggle,
  selectedDateLabel,
  onBack,
  onApply,
}: ShiftSelectionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white box-border max-w-[480px] p-0 gap-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Select Shift</DialogTitle>
        <DialogDescription className="sr-only">
          Choose one or more shifts to display on the shift board for {selectedDateLabel}
        </DialogDescription>
        <div className="bg-white box-border content-stretch flex flex-col gap-[24px] isolate items-start overflow-clip px-0 py-[24px] relative rounded-[6px] shadow-[0px_2px_12px_0px_rgba(41,46,55,0.1)]">
          {/* Content */}
          <div className="relative shrink-0 w-full z-[3]">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col gap-[32px] items-start px-[24px] py-0 relative w-full">
                <p
                  className="font-['DM_Sans'] font-bold leading-[normal] min-w-full relative shrink-0 text-[#282e38] text-[24px] w-[min-content]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  Select Shift
                </p>

                {/* Back Button with Date */}
                <button
                  onClick={onBack}
                  className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0 cursor-pointer"
                >
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <path d={svgPaths.p73b2780} fill="#282E38" />
                      </g>
                    </svg>
                  </div>
                  <div
                    className="flex flex-col font-['DM_Sans'] font-normal justify-center leading-[0] relative shrink-0 text-[#282e38] text-[24px] text-center text-nowrap"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    <p className="leading-[normal] whitespace-pre">{selectedDateLabel}</p>
                  </div>
                </button>

                {/* Shift Options */}
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {shiftOptions.map((option) => (
                    <Checkbox
                      key={option.id}
                      option={option}
                      checked={selectedShifts.includes(option.id)}
                      onClick={() => onShiftToggle(option.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative shrink-0 w-full z-[2]">
            <div aria-hidden="true" className="absolute border-[#cccfd4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="box-border content-start flex flex-wrap gap-[20px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="basis-0 bg-white cursor-pointer grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0"
                >
                  <div aria-hidden="true" className="absolute border border-[#003396] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="flex flex-row items-center justify-center min-w-inherit size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
                      <div
                        className="flex flex-col font-['DM_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        <p className="leading-[normal] whitespace-pre">Cancel</p>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Apply Button */}
                <button
                  type="button"
                  onClick={onApply}
                  disabled={selectedShifts.length === 0}
                  className={`basis-0 grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0 ${
                    selectedShifts.length === 0
                      ? "bg-[#cccfd4] cursor-not-allowed"
                      : "bg-[#003396] cursor-pointer"
                  }`}
                >
                  <div className="flex flex-row items-center justify-center min-w-inherit size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
                      <div
                        className="flex flex-col font-['DM_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        <p className="leading-[normal] whitespace-pre">Apply</p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close shift selection"
            className="absolute block cursor-pointer right-[24px] size-[32px] top-[16px] z-[4]"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g>
                <path d={svgPaths.p2c7ebf00} fill="#282E38" />
              </g>
            </svg>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
