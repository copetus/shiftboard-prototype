import { Search, X } from "lucide-react";
import { OperatorStatusDropdown, OperatorStatusValue } from "./OperatorStatusDropdown";
interface FilterBarProps {
  selectedStatuses: OperatorStatusValue[];
  onStatusChange: (statuses: OperatorStatusValue[]) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}
export function FilterBar({ selectedStatuses, onStatusChange, searchQuery, onSearchChange }: FilterBarProps) {
  return <div className="filter-bar" role="search" aria-label="Filter operators">
    <div className="operator-search">
      <Search size={18} aria-hidden="true" />
      <input aria-label="Search operators by name, duty list or location" value={searchQuery} onChange={e => onSearchChange(e.target.value)} placeholder="Search name, duty list or location…" />
      {searchQuery && <button onClick={() => onSearchChange("")} className="icon-action" aria-label="Clear search"><X size={17} aria-hidden="true" /></button>}
    </div>
    <OperatorStatusDropdown selectedStatuses={selectedStatuses} onStatusChange={onStatusChange} />
  </div>;
}
