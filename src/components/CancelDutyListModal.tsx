import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-u5xad0q8n7";
import modalSvgPaths from "../imports/svg-q8w1b094n6";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface CancelDutyListModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dutyLists: string[];
  operatorName: string;
  onConfirm: (selectedDutyLists: string[], reason: string) => void;
}

// Mock data for room descriptions and durations
const mockDutyListData: Record<string, { description: string; duration: string }> = {
  "Hospital 4th Floor": {
    description: "Texas Childrens West Campus EVS Room WC 460 00 Family Transition",
    duration: "06:21hr"
  },
  "Hospital 3rd Floor": {
    description: "St. Luke's Health System Surgical Suite S 350",
    duration: "04:15hr"
  },
  "Hospital 2nd Floor": {
    description: "Memorial Hermann Tower Recovery Room R 240 12",
    duration: "03:45hr"
  },
  "Hospital 5th Floor": {
    description: "Houston Methodist Cardiology Wing C 580 08",
    duration: "05:30hr"
  },
  "Emergency Department": {
    description: "Texas Medical Center Emergency Care ED 120 05",
    duration: "02:15hr"
  }
};

const reasons = [
  "Occupied Bed",
  "Patient Came Back",
  "Delayed",
  "Moved to Next Shift"
];

function CheckedCheckbox() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[4px] px-0 relative shrink-0 w-[22px]">
      <div className="bg-[#003396] relative rounded-[4px] shrink-0 size-[22px]">
        <div className="absolute inset-[31.82%_19.53%_25.82%_22.73%]">
          <div className="absolute inset-[4.43%_3.25%_8.89%_3.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9">
              <path d={modalSvgPaths.p33b54c00} fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UncheckedCheckbox() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-0 pt-[4px] px-0 relative shrink-0 w-[22px]">
      <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

export function CancelDutyListModal({ open, onOpenChange, dutyLists, operatorName, onConfirm }: CancelDutyListModalProps) {
  const [selectedDutyLists, setSelectedDutyLists] = useState<string[]>([]);
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Reset selections when modal opens
  useEffect(() => {
    console.log("CancelDutyListModal open state changed:", open, "dutyLists:", dutyLists);
    if (open) {
      setSelectedDutyLists([]);
      setSelectedReason("");
      setIsDropdownOpen(false);
    }
  }, [open, dutyLists]);

  const handleCheckboxChange = (dutyList: string) => {
    if (selectedDutyLists.includes(dutyList)) {
      setSelectedDutyLists(selectedDutyLists.filter(item => item !== dutyList));
    } else {
      setSelectedDutyLists([...selectedDutyLists, dutyList]);
    }
  };

  const handleConfirm = () => {
    if (selectedDutyLists.length > 0 && selectedReason) {
      onConfirm(selectedDutyLists, selectedReason);
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const getDutyListData = (dutyList: string) => {
    return mockDutyListData[dutyList] || {
      description: "Default Hospital Room Description",
      duration: "04:00hr"
    };
  };

  const isConfirmEnabled = selectedDutyLists.length > 0 && selectedReason !== "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="duty-dialog bg-white box-border max-w-[788px] p-0 gap-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Cancel Duty List(s)</DialogTitle>
        <DialogDescription className="sr-only">
          Select duty lists to cancel for {operatorName}
        </DialogDescription>
        <div className="bg-white box-border flex flex-col px-0 py-[24px] relative rounded-[6px] shadow-[0px_2px_12px_0px_rgba(41,46,55,0.1)] max-h-[85vh]">
          {/* Close Button */}
          <button
            onClick={handleCancel}
            aria-label="Close dialog"
            className="absolute overflow-clip right-[24px] size-[32px] top-[16px] z-[4] cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="absolute inset-[20.833%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                <path d={modalSvgPaths.p2e824380} fill="#282E38" />
              </svg>
            </div>
          </button>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-[24px]">
            <div className="flex flex-col gap-[32px]">
                <p className="font-['DM_Sans'] font-bold leading-[normal] min-w-full relative shrink-0 text-[#282e38] text-[24px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Cancel Duty List(s)
                </p>

                {/* Duty Lists */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[6px] shrink-0 w-full">
                  {dutyLists.length > 0 ? (
                    dutyLists.map((dutyList) => {
                      const isSelected = selectedDutyLists.includes(dutyList);
                      const data = getDutyListData(dutyList);
                      
                      return (
                        <div
                          key={dutyList}
                          role="checkbox"
                          tabIndex={0}
                          aria-checked={isSelected}
                          onKeyDown={e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); handleCheckboxChange(dutyList); } }}
                          className={`${isSelected ? 'bg-[#f1f7ff]' : 'bg-[#f7f8f9]'} relative rounded-[6px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity`}
                          onClick={() => handleCheckboxChange(dutyList)}
                        >
                          <div aria-hidden="true" className={`absolute ${isSelected ? 'border-[#91a6d0]' : 'border-[#cccfd4]'} border border-solid inset-0 pointer-events-none rounded-[6px]`} />
                          <div className="size-full">
                            <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                                {isSelected ? <CheckedCheckbox /> : <UncheckedCheckbox />}
                                
                                <div className="basis-0 content-stretch flex gap-[48px] grow items-start min-h-px min-w-px relative shrink-0">
                                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[normal] max-w-[400px] min-h-px min-w-[300px] relative shrink-0">
                                    <p className={`font-['DM_Sans'] font-bold relative shrink-0 text-[24px] w-full ${isSelected ? 'text-[#003396]' : 'text-[#282e38]'}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                      {dutyList}
                                    </p>
                                    <p className={`font-['DM_Sans'] font-normal relative shrink-0 text-[16px] w-full ${isSelected ? 'text-[#1846a0]' : 'text-[#282e38]'}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                      {data.description}
                                    </p>
                                  </div>
                                  <div className={`content-stretch flex flex-col font-['DM_Sans'] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 ${isSelected ? 'text-[#003396]' : 'text-[#282e38]'}`}>
                                    <p className="relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                                      Estimated duration
                                    </p>
                                    <p className="relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                                      {data.duration}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p
                      className="font-['DM_Sans'] font-normal text-[#64748b] text-[16px] italic"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      No duty lists assigned to this operator.
                    </p>
                  )}
                </div>

                {/* Select Reason Dropdown */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['DM_Sans'] font-normal leading-[normal] relative shrink-0 text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <span style={{ fontVariationSettings: "'opsz' 14" }}>Select Reason</span>
                    <span className="text-[#d6302d]" style={{ fontVariationSettings: "'opsz' 14" }}>*</span>
                  </p>
                  <div className="relative w-full">
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      aria-label="Select cancellation reason"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="bg-white h-[44px] relative rounded-[6px] shrink-0 w-full cursor-pointer"
                    >
                      <div aria-hidden="true" className={`absolute ${isDropdownOpen ? 'border-[#003396]' : 'border-[#7e8b9d]'} border border-solid inset-0 pointer-events-none rounded-[6px]`} />
                      {isDropdownOpen && (
                        <div className="absolute bottom-px left-[2px] right-px rounded-[6px] top-px z-10">
                          <div aria-hidden="true" className="absolute border-[#a9bada] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[9px]" />
                        </div>
                      )}
                      <div className="flex flex-row items-center size-full">
                        <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
                          <p className={`basis-0 font-['DM_Sans'] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[18px] text-left ${selectedReason ? 'text-[#282e38]' : 'text-[#878a8f]'}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                            {selectedReason || "Select"}
                          </p>
                          <div className="overflow-clip relative shrink-0 size-[24px]">
                            <div className={`absolute bottom-[34.56%] left-1/4 right-1/4 top-[34.56%] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8">
                                <path d={modalSvgPaths.p180a8a80} fill="#64748B" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white rounded-[6px] border border-[#d9dbde] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] z-20 overflow-hidden">
                        {reasons.map((reason) => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => {
                              setSelectedReason(reason);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full text-left px-[16px] py-[12px] font-['DM_Sans'] font-normal text-[16px] text-[#282e38] hover:bg-[#f7f8f9] transition-colors cursor-pointer"
                            style={{ fontVariationSettings: "'opsz' 14" }}
                          >
                            {reason}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          {/* Footer */}
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#cccfd4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="box-border content-start flex flex-wrap gap-[20px] isolate items-start pb-0 pt-[24px] px-[24px] relative w-full">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="basis-0 bg-white grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0 z-[2] cursor-pointer hover:bg-[#f7f8f9] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#003396] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="flex flex-row items-center justify-center min-w-inherit size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
                      <div className="flex flex-col font-['DM_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[normal] whitespace-pre">Cancel</p>
                      </div>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={!isConfirmEnabled}
                  className={`basis-0 ${isConfirmEnabled ? 'bg-[#003396] cursor-pointer hover:bg-[#002673]' : 'bg-[#91a6d0] cursor-not-allowed'} grow h-[44px] min-h-px min-w-[190px] relative rounded-[6px] shrink-0 z-[1] transition-colors`}
                >
                  <div className="flex flex-row items-center justify-center min-w-inherit size-full">
                    <div className="box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center min-w-inherit p-[16px] relative w-full">
                      <div className="flex flex-col font-['DM_Sans'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[normal] whitespace-pre">Cancel Duty List(s)</p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
