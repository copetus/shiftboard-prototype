import { MoreVertical, MapPin, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export interface Employee {
  id: string;
  name: string;
  role: string;
  shift: string;
  location: string;
  status: "on-track" | "ahead" | "behind" | "in-progress" | "inactive";
  progress: number;
  timeIndicator?: string;
  department: string;
  dutyList?: string;
  extraAssignments?: number;
}

interface EmployeeCardProps {
  employee: Employee;
}

const statusConfig = {
  "on-track": { label: "On Track", color: "bg-blue-500" },
  "ahead": { label: "Ahead", color: "bg-green-500" },
  "behind": { label: "Behind", color: "bg-red-500" },
  "in-progress": { label: "In Progress", color: "bg-yellow-500" },
  "inactive": { label: "Inactive", color: "bg-slate-400" },
};

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const status = statusConfig[employee.status];

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-sm text-slate-600">{employee.shift}</div>
            <h3 className="mt-1">{employee.name}</h3>
            <div className="text-sm text-slate-600">{employee.role}</div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit Assignment</DropdownMenuItem>
              <DropdownMenuItem>Reassign Tasks</DropdownMenuItem>
              <DropdownMenuItem>Send Message</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Location and Status */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <MapPin size={14} />
            <span>{employee.location}</span>
          </div>
          <Badge className={`${status.color} text-white`}>
            {status.label}
          </Badge>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">{employee.progress}% complete</span>
            {employee.timeIndicator && (
              <span className="text-slate-600 flex items-center gap-1">
                <Clock size={14} />
                {employee.timeIndicator}
              </span>
            )}
          </div>
          <Progress value={employee.progress} className="h-2" />
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline">{employee.department}</Badge>
          {employee.dutyList && (
            <Badge variant="outline">{employee.dutyList}</Badge>
          )}
          {employee.extraAssignments && employee.extraAssignments > 0 && (
            <Badge variant="secondary">+{employee.extraAssignments}</Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
