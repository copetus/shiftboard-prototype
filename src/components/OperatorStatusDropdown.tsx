import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
export type OperatorStatusValue = "in-progress" | "on-break" | "meal-break" | "inactive" | "idle";
const options: { value: OperatorStatusValue; label: string }[] = [
  { value: "in-progress", label: "In progress" }, { value: "on-break", label: "Break" },
  { value: "meal-break", label: "Meal break" }, { value: "inactive", label: "Inactive" }, { value: "idle", label: "Idle" },
];
export function OperatorStatusDropdown({ selectedStatuses, onStatusChange }: {
  selectedStatuses: OperatorStatusValue[]; onStatusChange: (statuses: OperatorStatusValue[]) => void;
}) {
  const all = selectedStatuses.length === options.length;
  const label = all ? "All statuses" : selectedStatuses.length === 0 ? "No statuses" : selectedStatuses.length === 1 ? options.find(o => o.value === selectedStatuses[0])?.label : `${selectedStatuses.length} statuses`;
  return <DropdownMenu modal={false}><DropdownMenuTrigger asChild>
    <button className="secondary-action status-filter"><SlidersHorizontal size={17} aria-hidden="true" />{label}<ChevronDown size={16} aria-hidden="true" /></button>
  </DropdownMenuTrigger><DropdownMenuContent className="status-menu" align="end" sideOffset={8}>
    <DropdownMenuCheckboxItem checked={all} onSelect={e => e.preventDefault()} onCheckedChange={() => onStatusChange(all ? [] : options.map(o => o.value))}>All statuses</DropdownMenuCheckboxItem>
    <DropdownMenuSeparator />
    {options.map(option => <DropdownMenuCheckboxItem key={option.value} checked={selectedStatuses.includes(option.value)} onSelect={e => e.preventDefault()} onCheckedChange={checked => onStatusChange(checked ? [...selectedStatuses, option.value] : selectedStatuses.filter(s => s !== option.value))}>{option.label}</DropdownMenuCheckboxItem>)}
  </DropdownMenuContent></DropdownMenu>;
}
