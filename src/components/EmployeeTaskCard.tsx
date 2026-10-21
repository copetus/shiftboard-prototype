import { useState } from "react";
import { MapPin, MoreVertical, Coffee, Sandwich } from "lucide-react";
import { TagsWithOverflow } from "./TagsWithOverflow";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { OperatorActionsMenu } from "./OperatorActionsMenu";
import { CancelDutyListModal } from "./CancelDutyListModal";
import { ReassignDutyListModal } from "./ReassignDutyListModal";

export interface EmployeeTaskData {
  shiftId?: string;
  name: string;
  role: string;
  location: string;
  operatorStatus?: "in-progress" | "idle" | "on-break" | "meal-break" | "active";
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

  const statusLabel = isInactive ? "Inactive" : ({ "in-progress": "In Progress", idle: "Idle", "on-break": "On Break", "meal-break": "Meal Break", active: "Active" }[displayOperatorStatus || "active"]);
  const shiftLabel = {
    shift1: "1st Shift (6:45 AM – 3:15 PM)",
    shift2: "2nd Shift (3:15 PM – 10:15 PM)",
    shift3: "3rd Shift (10:15 PM – 5:15 AM)",
  }[employee.shiftId || ""] || "Selected shift";
  // Only show an offset when the supplied data actually describes that work status.
  const workOffset = !isInactive && employee.timeIndicator?.toLowerCase().startsWith(displayWorkStatus + " by ")
    ? employee.timeIndicator.replace(/^(ahead|behind) /i, "") : undefined;
  const BreakIcon = displayOperatorStatus === "meal-break" ? Sandwich : Coffee;
  const isBreak = displayOperatorStatus === "on-break" || displayOperatorStatus === "meal-break";

  return (
    <article className="employee-card reference-card" data-status={displayWorkStatus}>
      <div className="operator-shift-strip">
        <span>{shiftLabel}</span>
        <Popover open={menuOpen} onOpenChange={setMenuOpen}>
          <PopoverTrigger asChild>
            <button className="icon-action" aria-label={`Actions for ${employee.name}`}>
              <MoreVertical size={17} aria-hidden="true" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-0 shadow-none" align="end" sideOffset={5}>
            <OperatorActionsMenu onReassign={handleReassign} onCancel={handleCancel} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="operator-details">
        <div className="operator-details-row">
          <div className="operator-name-block">
            <h3>{employee.name}</h3>
            <p>{employee.role === "HouseKeeper" ? "Housekeeper" : employee.role}</p>
          </div>
          <div className="operator-state-block">
            <span className={`operator-badge badge-${isInactive ? "inactive" : displayOperatorStatus}`} aria-label={statusLabel} title={statusLabel}>
              {isBreak ? <BreakIcon size={17} aria-hidden="true" /> : statusLabel}
            </span>
            {showTimeIndicator && <span className="operator-time">{employee.timeIndicator}</span>}
          </div>
        </div>
      </div>
      <div className="operator-bottom-panel">
        <div className="progress-heading">
          <div className="operator-work-label">
            <span style={{ color: workStyle.textColor }}>{workStyle.label}</span>
            {workOffset && <span className="work-offset">{workOffset}</span>}
          </div>
          <div className="employee-location"><MapPin size={16} aria-hidden="true" /><span>{employee.location}</span></div>
        </div>
        <div className="progress-track" role="progressbar" aria-label={`${employee.name} task completion`} aria-valuenow={displayProgress} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ width: `${displayProgress}%`, backgroundColor: workStyle.color }} />
        </div>
        <p className="operator-completion">{displayProgress}% Complete</p>
        <div className="operator-duty-lists" aria-label="Assigned duty lists">
          {allTags.length > 0 ? <TagsWithOverflow tags={allTags} /> : <span className="no-assignments">No duty lists assigned</span>}
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
    </article>
  );
}
