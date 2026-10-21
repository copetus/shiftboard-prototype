import { useState } from "react";
import { MapPin, MoreHorizontal, Clock3 } from "lucide-react";
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

  const statusLabel = isInactive ? "Inactive" : ({ "in-progress": "In progress", idle: "Idle", "on-break": "On break", active: "Active" }[displayOperatorStatus || "active"]);
  return (
    <article className="employee-card" data-status={displayWorkStatus}>
      <div className="employee-card-top">
        <span className={`operator-badge badge-${isInactive ? "inactive" : displayOperatorStatus}`}><span aria-hidden="true" />{statusLabel}</span>
        <Popover open={menuOpen} onOpenChange={setMenuOpen}>
          <PopoverTrigger asChild><button className="icon-action" aria-label={`Actions for ${employee.name}`}><MoreHorizontal size={20} aria-hidden="true" /></button></PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-0 shadow-none" align="end" sideOffset={5}><OperatorActionsMenu onReassign={handleReassign} onCancel={handleCancel} /></PopoverContent>
        </Popover>
      </div>
      <div className="employee-identity"><div className="employee-avatar" aria-hidden="true">{employee.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</div><div><h3>{employee.name}</h3><p>{employee.role === "HouseKeeper" ? "Housekeeper" : employee.role}</p></div></div>
      <div className="employee-location"><MapPin size={15} aria-hidden="true" /><span>{employee.location}</span></div>
      <div className="employee-progress">
        <div className="progress-heading"><span style={{ color: workStyle.textColor }}>{isInactive ? "No active work" : workStyle.label}</span><span className="progress-value">{displayProgress}%</span></div>
        <div className="progress-track" role="progressbar" aria-label={`${employee.name} task completion`} aria-valuenow={displayProgress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${displayProgress}%`, backgroundColor: workStyle.color }} /></div>
        <div className="progress-caption"><span>Task completion</span>{showTimeIndicator && <span><Clock3 size={13} aria-hidden="true" />{employee.timeIndicator}</span>}</div>
      </div>
      <div className="assignment-tags" aria-label="Assigned duty lists">{allTags.map((tag, index) => <span key={`${tag}-${index}`}>{tag}</span>)}{allTags.length === 0 && <span>No duty lists assigned</span>}</div>

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
    </article>
  );
}
