import { useState } from "react";
import svgPaths from "../imports/svg-rh1g3fm2ym";
import { TagsWithOverflow } from "./TagsWithOverflow";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { OperatorActionsMenu } from "./OperatorActionsMenu";
import { CancelDutyListModal } from "./CancelDutyListModal";
import { ReassignDutyListModal } from "./ReassignDutyListModal";

export interface EmployeeTaskData {
  name: string;
  role: string;
  location: string;
  operatorStatus?: "in-progress" | "idle" | "on-break" | "active";
  workStatus: "on-track" | "ahead" | "behind" | "inactive";
  progress: number;
  timeIndicator?: string;
  department: string;
  dutyList?: string;
  extraAssignments?: number;
  additionalTags?: string[];
}

interface EmployeeTaskCardProps {
  employee: EmployeeTaskData;
  isToday?: boolean;
  area?: "main" | "northWest" | "south";
  onCancelDutyLists?: (employeeName: string, area: "main" | "northWest" | "south", tagsToRemove: string[]) => void;
}

const workStatusConfig = {
  "on-track": {
    label: "On Track",
    color: "#003396",
    textColor: "#003396",
  },
  "ahead": {
    label: "Ahead",
    color: "#008245",
    textColor: "#008245",
  },
  "behind": {
    label: "Behind",
    color: "#f27975",
    textColor: "#e33e3b",
  },
  "inactive": {
    label: "N/A",
    color: "transparent",
    textColor: "rgb(100 116 139)",
  },
};

export function EmployeeTaskCard({ employee, isToday = true, area = "main", onCancelDutyLists }: EmployeeTaskCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [reassignModalOpen, setReassignModalOpen] = useState(false);

  // For past/future dates OR if work status is inactive, show inactive state
  const isInactive = !isToday || employee.workStatus === "inactive";
  
  const displayWorkStatus = isInactive ? "inactive" : employee.workStatus;
  const displayOperatorStatus = isInactive ? undefined : employee.operatorStatus;
  const displayProgress = isInactive ? 0 : employee.progress;
  const showTimeIndicator = isToday && !isInactive && employee.timeIndicator;
  
  const workStyle = workStatusConfig[displayWorkStatus];
  const hasProgressBar = displayWorkStatus !== "inactive";

  // Build all tags for display
  const allTags: string[] = [];
  if (employee.department) allTags.push(employee.department);
  if (employee.dutyList) allTags.push(employee.dutyList);
  if (employee.additionalTags) allTags.push(...employee.additionalTags);
  if (employee.extraAssignments && employee.extraAssignments > 0) {
    allTags.push(`+${employee.extraAssignments}`);
  }

  // Get ALL tags for cancel modal (all tags that are displayed)
  const getDutyLists = () => {
    return allTags;
  };

  const handleCancelDutyLists = (selectedLists: string[], reason: string) => {
    if (onCancelDutyLists) {
      onCancelDutyLists(employee.name, area, selectedLists);
    }
    // Log the reason for cancellation
    console.log(`Duty lists cancelled for ${employee.name}. Reason: ${reason}`, selectedLists);
  };

  const handleReassign = () => {
    console.log("Reassign Duty List clicked", { allTags, dutyLists: getDutyLists() });
    setMenuOpen(false);
    // Small delay to ensure popover closes before opening modal
    setTimeout(() => {
      setReassignModalOpen(true);
    }, 100);
  };

  const handleReassignDutyLists = (selectedLists: string[], targetOperator: string) => {
    // Log the reassignment
    console.log(`Duty lists reassigned from ${employee.name} to ${targetOperator}`, selectedLists);
    // Here you would typically update your state/backend
  };

  const handleCancel = () => {
    console.log("Cancel Duty List clicked", { allTags, dutyLists: getDutyLists() });
    setMenuOpen(false);
    // Small delay to ensure popover closes before opening modal
    setTimeout(() => {
      setCancelModalOpen(true);
    }, 100);
  };

  return (
    <div className="flex-1 bg-white box-border flex flex-col items-start min-h-px min-w-px rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0]">
      {/* Topbar */}
      <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] w-full border-b border-[#cccfd4]">
        <div className="box-border flex gap-[10px] items-center px-[16px] py-[8px] w-full">
          <div className="flex-1 flex flex-col gap-[6px] items-start justify-center">
            <p className="font-['DM_Sans'] font-medium text-[#282e38] text-[14px] overflow-ellipsis overflow-hidden whitespace-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              1st Shift (6:45 AM – 3:15 PM)
            </p>
          </div>
          <Popover open={menuOpen} onOpenChange={setMenuOpen}>
            <PopoverTrigger asChild>
              <button className="size-[24px] relative cursor-pointer hover:bg-slate-200/50 rounded-[6px] transition-colors">
                <div className="absolute inset-[-33.333%] rounded-[6px]">
                  <div className="absolute left-1/2 size-[24px] top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p3fdba000} fill="#64748B" />
                    </svg>
                  </div>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-0 shadow-none" align="end" sideOffset={5}>
              <OperatorActionsMenu onReassign={handleReassign} onCancel={handleCancel} />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full">
        <div className="box-border flex flex-col gap-[8px] items-start p-[8px] w-full">
          {/* Time Indicator (top right) */}
          {showTimeIndicator && (
            <p className="absolute font-['DM_Sans'] font-normal italic text-[14px] text-nowrap text-right text-slate-500 right-[16px] top-[49px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              {employee.timeIndicator}
            </p>
          )}

          {/* Operator Section */}
          <div className="w-full">
            <div className="box-border flex flex-col gap-[10px] items-start justify-center p-[8px] w-full">
              {/* Name and Operator Status */}
              <div className="flex gap-[10px] items-start w-full">
                <div className="flex-1 flex flex-col gap-[2px] items-start">
                  <p className="font-['DM_Sans'] font-bold overflow-ellipsis overflow-hidden text-[#282e38] text-[18px] whitespace-nowrap w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {employee.name}
                  </p>
                  <p className="font-['DM_Sans'] font-normal text-[14px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {employee.role}
                  </p>
                </div>

                {/* Operator Status Badge - Show "Inactive" for inactive employees */}
                {isInactive ? (
                  <div className="flex items-start">
                    <div className="bg-white box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] border border-[#cccfd4]">
                      <p className="font-['DM_Sans'] font-semibold text-slate-500 text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Inactive
                      </p>
                    </div>
                  </div>
                ) : displayOperatorStatus ? (
                  <div className="flex items-start transition-all duration-300">
                    {displayOperatorStatus === "in-progress" && (
                      <div className="box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] bg-[#f1f7ff] border border-[#7993c6] animate-in fade-in duration-300">
                        <p className="font-['DM_Sans'] font-semibold text-[#3059a9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          In Progress
                        </p>
                      </div>
                    )}
                    {displayOperatorStatus === "idle" && (
                      <div className="box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] bg-[#ffe082] animate-in fade-in duration-300">
                        <p className="font-['DM_Sans'] font-semibold text-[#282e38] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Idle
                        </p>
                      </div>
                    )}
                    {displayOperatorStatus === "active" && (
                      <div className="bg-slate-500 box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] animate-in fade-in duration-300">
                        <div className="size-[20px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                            <path d={svgPaths.p3bcd2b00} fill="white" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {displayOperatorStatus === "on-break" && (
                      <div className="bg-slate-500 box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] animate-in fade-in duration-300">
                        <div className="size-[20px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                            <g clipPath="url(#clip0_12_14432)">
                              <path d="M0.833333 18.3167C0.833333 18.7833 1.20833 19.1583 1.675 19.1583H12.5C12.9667 19.1583 13.3417 18.7833 13.3417 18.3167V17.5H0.833333V18.3167ZM7.08333 7.49167C3.95833 7.49167 0.833333 9.16667 0.833333 12.5H13.3333C13.3333 9.16667 10.2083 7.49167 7.08333 7.49167ZM3.01667 10.8333C3.94167 9.54167 5.90833 9.15833 7.08333 9.15833C8.25833 9.15833 10.225 9.54167 11.15 10.8333H3.01667ZM0.833333 14.1667H13.3333V15.8333H0.833333V14.1667ZM15 4.16667V0.833333H13.3333V4.16667H9.16667L9.35833 5.83333H17.325L16.1583 17.5H15V19.1667H16.4333C17.1333 19.1667 17.7083 18.625 17.7917 17.9417L19.1667 4.16667H15Z" fill="white" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>

              {/* Location */}
              <div className="h-[24px] relative w-[249px]">
                <div className="absolute left-[-5px] size-[24px] top-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p2668b180} fill="#64748B" />
                  </svg>
                </div>
                <p className="absolute font-['DM_Sans'] font-semibold overflow-ellipsis overflow-hidden text-[#282e38] text-[14px] left-[23px] right-[5px] top-[3px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {employee.location}
                </p>
              </div>
            </div>
          </div>

          {/* Work Status */}
          <div className="bg-white relative rounded-[8px] w-full border border-[#d9dbde]">
            <div className="box-border flex flex-col gap-[8px] items-start p-[8px] w-full">
              {/* Progress Bar */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <p
                  className="font-['DM_Sans'] font-bold text-[18px] w-full transition-colors duration-500"
                  style={{
                    fontVariationSettings: "'opsz' 14",
                    color: workStyle.textColor,
                  }}
                >
                  {workStyle.label}
                </p>
                
                {/* Progress Bar Bottom */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  {/* Bar */}
                  <div className="bg-[#eceef0] flex flex-col h-[8px] items-start rounded-[8px] w-full relative">
                    {hasProgressBar && displayProgress > 0 && (
                      <div
                        className="absolute bottom-0 left-0 rounded-[8px] top-0 transition-all duration-1000 ease-in-out"
                        style={{
                          backgroundColor: workStyle.color,
                          right: `${100 - displayProgress}%`,
                        }}
                      />
                    )}
                  </div>
                  <p className="font-['DM_Sans'] font-normal text-[#282e38] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {displayProgress}% Complete
                  </p>
                </div>
              </div>

              {/* Time indicator (top right of work status) */}
              {!isInactive && (displayWorkStatus === "ahead" || displayWorkStatus === "behind") && (
                <p className="absolute font-['DM_Sans'] font-normal text-[#282e38] text-[16px] whitespace-nowrap text-right right-[8px] top-[8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  by 50 mins
                </p>
              )}

              {/* Duty Lists / Tags */}
              <TagsWithOverflow tags={allTags} />
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Duty List Modal */}
      <CancelDutyListModal
        open={cancelModalOpen}
        onOpenChange={setCancelModalOpen}
        dutyLists={getDutyLists()}
        operatorName={employee.name}
        onConfirm={handleCancelDutyLists}
      />

      {/* Reassign Duty List Modal */}
      <ReassignDutyListModal
        open={reassignModalOpen}
        onOpenChange={setReassignModalOpen}
        dutyLists={getDutyLists()}
        operatorName={employee.name}
        onConfirm={handleReassignDutyLists}
      />
    </div>
  );
}
