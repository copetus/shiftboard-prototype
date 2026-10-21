import svgPaths from "../imports/svg-rh1g3fm2ym";
import { OperatorStatusDropdown, OperatorStatusValue } from "./OperatorStatusDropdown";

interface FilterBarProps {
  selectedStatuses: OperatorStatusValue[];
  onStatusChange: (statuses: OperatorStatusValue[]) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterBar({ selectedStatuses, onStatusChange, searchQuery, onSearchChange }: FilterBarProps) {
  return (
    <div className="flex gap-[16px] items-start w-full">
      {/* Status Dropdown */}
      <OperatorStatusDropdown 
        selectedStatuses={selectedStatuses}
        onStatusChange={onStatusChange}
      />

      {/* Search */}
      <div className="flex-1 bg-white h-[44px] rounded-[6px] border border-[#7e8b9d] focus-within:border-[#003396] transition-colors">
        <div className="box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, duty list or location"
            className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px] placeholder:text-[#878a8f] outline-none bg-transparent"
            style={{ fontVariationSettings: "'opsz' 14" }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="size-[24px] flex-shrink-0 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
              aria-label="Clear search"
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <div className="size-[24px] flex-shrink-0">
            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p89aed78} fill="#64748B" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
