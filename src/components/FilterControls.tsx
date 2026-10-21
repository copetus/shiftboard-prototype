import { Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FilterControlsProps {
  onStatusChange: (status: string) => void;
  onSearchChange: (search: string) => void;
}

export function FilterControls({ onStatusChange, onSearchChange }: FilterControlsProps) {
  return (
    <div className="bg-white p-4 md:p-6 border-b">
      <div className="flex flex-col md:flex-row gap-4">
        <Select defaultValue="all" onValueChange={onStatusChange}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="on-track">On Track</SelectItem>
            <SelectItem value="ahead">Ahead</SelectItem>
            <SelectItem value="behind">Behind</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1 md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <Input
            placeholder="Search employees, rooms, or tasks..."
            className="pl-10"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
