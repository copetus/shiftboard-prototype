import { Building2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface HeaderProps {
  onNewTask: () => void;
}

export function Header({ onNewTask }: HeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 md:p-6 bg-white border-b">
      <div className="flex items-center gap-4 flex-1 ml-0 md:ml-0 pl-0 md:pl-0">
        <div className="flex items-center gap-2">
          <Building2 className="text-blue-600" size={32} />
          <span className="hidden sm:block">HealthCare Dispatch</span>
        </div>
        
        <Select defaultValue="general">
          <SelectTrigger className="w-[180px] md:w-[240px]">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Hospital</SelectItem>
            <SelectItem value="north">North Wing</SelectItem>
            <SelectItem value="south">South Wing</SelectItem>
            <SelectItem value="emergency">Emergency</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={onNewTask} className="hidden md:flex items-center gap-2">
        <Plus size={18} />
        New Task
      </Button>
    </div>
  );
}
