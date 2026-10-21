import svgPaths from "../imports/svg-u5xad0q8n7";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface DateOption {
  id: string;
  label: string;
  date: string;
}

interface DateSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: string;
  onDateSelect: (date: string) => void;
  onContinueToShift: () => void;
}

const dateOptions: DateOption[] = [
  { id: "yesterday", label: "Yesterday (Oct 13)", date: "2024-10-13" },
  { id: "today", label: "Today (Oct 14)", date: "2024-10-14" },
  { id: "tomorrow", label: "Tomorrow (Oct 15)", date: "2024-10-15" },
  { id: "day-after", label: "Day after tomorrow (Oct 16)", date: "2024-10-16" },
];

function RadioSymbol({ selected }: { selected: boolean }) {
  return (
    <div className="bg-white relative rounded-[120px] shrink-0 size-[22px]">
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none rounded-[120px] ${
          selected ? "border-[#003396] border-[6px]" : "border-2 border-[#7e8b9d]"
        } border-solid`}
      />
    </div>
  );
}

function RadioButton({ option, selected, onClick }: { option: DateOption; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full text-left cursor-pointer"
    >
      <RadioSymbol selected={selected} />
      <div
        className={`flex flex-col justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap ${
          selected ? "font-['DM_Sans'] font-bold" : "font-['DM_Sans'] font-normal"
        }`}
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[normal] whitespace-pre">{option.label}</p>
      </div>
    </button>
  );
}

export function DateSelectionModal({ open, onOpenChange, selectedDate, onDateSelect, onContinueToShift }: DateSelectionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white box-border max-w-[480px] p-0 gap-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Select Date</DialogTitle>
        <DialogDescription className="sr-only">
          Choose a date for viewing shift board information
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
                  Select Date
                </p>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {dateOptions.map((option) => (
                    <RadioButton
                      key={option.id}
                      option={option}
                      selected={selectedDate === option.date}
                      onClick={() => onDateSelect(option.date)}
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

                {/* Select Shift Button */}
                <button
                  type="button"
                  onClick={onContinueToShift}
                  className="basis-0 bg-[#003396] cursor-pointer grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0"
                >
                  <div className="flex flex-row items-center justify-center min-w-inherit size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
                      <div
                        className="flex flex-col font-['DM_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        <p className="leading-[normal] whitespace-pre">Select Shift</p>
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
