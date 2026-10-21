import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-rh1g3fm2ym";
import checkSvgPaths from "../imports/svg-29gzqlfx5a";

export type OperatorStatusValue = "in-progress" | "on-break" | "meal-break" | "inactive" | "idle";

interface OperatorStatusDropdownProps {
  selectedStatuses: OperatorStatusValue[];
  onStatusChange: (statuses: OperatorStatusValue[]) => void;
}

interface MenuItemProps {
  label: string;
  value: OperatorStatusValue | "all";
  isSelected: boolean;
  onClick: () => void;
}

function CheckedCheckbox() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <path d={checkSvgPaths.p10e14680} fill="#003396" />
        <path d={checkSvgPaths.p1ca57180} fill="white" />
      </svg>
    </div>
  );
}

function UncheckedCheckbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[22px]">
      <div aria-hidden="true" className="absolute border-2 border-[#7e8b9d] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function MenuItem({ label, value, isSelected, onClick }: MenuItemProps) {
  return (
    <div 
      className="bg-white relative shrink-0 w-full cursor-pointer hover:bg-slate-50 transition-colors"
      onClick={onClick}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['DM_Sans'] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            {label}
          </p>
          {isSelected ? <CheckedCheckbox /> : <UncheckedCheckbox />}
        </div>
      </div>
    </div>
  );
}

export function OperatorStatusDropdown({ selectedStatuses, onStatusChange }: OperatorStatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allStatusValues: OperatorStatusValue[] = ["in-progress", "on-break", "meal-break", "inactive", "idle"];
  
  const statusOptions: Array<{ label: string; value: OperatorStatusValue | "all" }> = [
    { label: "All Statuses", value: "all" },
    { label: "In Progress", value: "in-progress" },
    { label: "Break", value: "on-break" },
    { label: "Meal Break", value: "meal-break" },
    { label: "Inactive", value: "inactive" },
    { label: "Idle", value: "idle" },
  ];

  // Determine if all statuses are selected
  const isAllSelected = selectedStatuses.length === allStatusValues.length;

  // Generate display label
  const getDisplayLabel = () => {
    if (isAllSelected || selectedStatuses.length === 0) {
      return "All Statuses";
    }
    if (selectedStatuses.length === 1) {
      const option = statusOptions.find(opt => opt.value === selectedStatuses[0]);
      return option?.label || "1 Status";
    }
    return `${selectedStatuses.length} Statuses`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleStatusToggle = (status: OperatorStatusValue | "all") => {
    if (status === "all") {
      // Toggle all statuses
      if (isAllSelected) {
        onStatusChange([]);
      } else {
        onStatusChange([...allStatusValues]);
      }
    } else {
      // Toggle individual status
      const isCurrentlySelected = selectedStatuses.includes(status);
      let newStatuses: OperatorStatusValue[];
      
      if (isCurrentlySelected) {
        newStatuses = selectedStatuses.filter(s => s !== status);
      } else {
        newStatuses = [...selectedStatuses, status];
      }
      
      onStatusChange(newStatuses);
    }
    // Don't close dropdown to allow multi-select
  };

  return (
    <div className="relative flex flex-col gap-[8px] items-start max-w-[300px]" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] rounded-[6px] border border-[#7e8b9d] hover:border-[#003396] transition-colors w-full"
      >
        <p className="flex-1 text-left font-['DM_Sans'] font-normal text-[#282e38] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          {getDisplayLabel()}
        </p>
        <div className="size-[24px]">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p18b66300} fill="#282E38" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu - Only show on desktop (hidden on mobile) */}
      {isOpen && (
        <div className="hidden md:block absolute top-[52px] left-0 z-50 w-full min-w-[240px]">
          <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shadow-[0px_2px_12px_0px_#dcdcdd] size-full bg-white">
            {statusOptions.map((option) => {
              const isSelected = option.value === "all" 
                ? isAllSelected 
                : selectedStatuses.includes(option.value as OperatorStatusValue);
              
              return (
                <MenuItem
                  key={option.value}
                  label={option.label}
                  value={option.value}
                  isSelected={isSelected}
                  onClick={() => handleStatusToggle(option.value)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
