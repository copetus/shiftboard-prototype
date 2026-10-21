import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EmployeeTaskData } from "./EmployeeTaskCard";

interface TaskSummaryProps {
  employeeData: {
    main: EmployeeTaskData[];
    northWest: EmployeeTaskData[];
    south: EmployeeTaskData[];
  };
  isToday: boolean;
  isYesterday: boolean;
  isTomorrow: boolean;
  isDayAfterTomorrow: boolean;
}

interface TaskCategoryData {
  discharges: {
    assignedOpen: number;
    unassigned: number;
    cancelled: number;
    cannotComplete: number;
    completed: number;
  };
  adHoc: {
    assignedOpen: number;
    unassigned: number;
    cancelled: number;
    cannotComplete: number;
    completed: number;
  };
  dutyLists: {
    assignedOpen: number;
    unassigned: number;
    cancelled: number;
    cannotComplete: number;
    completed: number;
  };
}

export function TaskSummary({ employeeData, isToday, isYesterday, isTomorrow, isDayAfterTomorrow }: TaskSummaryProps) {
  const [expanded, setExpanded] = useState(false);
  // Calculate task category data based on employee assignments
  const calculateTaskData = (): TaskCategoryData => {
    // Show all zeros for future dates (Tomorrow and Day after tomorrow)
    if (isTomorrow || isDayAfterTomorrow) {
      return {
        discharges: {
          assignedOpen: 0,
          unassigned: 0,
          cancelled: 0,
          cannotComplete: 0,
          completed: 0,
        },
        adHoc: {
          assignedOpen: 0,
          unassigned: 0,
          cancelled: 0,
          cannotComplete: 0,
          completed: 0,
        },
        dutyLists: {
          assignedOpen: 0,
          unassigned: 0,
          cancelled: 0,
          cannotComplete: 0,
          completed: 0,
        },
      };
    }

    // For Today and Yesterday, calculate real numbers
    const allEmployees = [
      ...employeeData.main,
      ...employeeData.northWest,
      ...employeeData.south,
    ];

    // Initialize with base values that will be updated by real operator activity
    const data: TaskCategoryData = {
      discharges: {
        assignedOpen: 78,
        unassigned: 2,
        cancelled: 0,
        cannotComplete: 7,
        completed: 100,
      },
      adHoc: {
        assignedOpen: 37,
        unassigned: 3,
        cancelled: 10,
        cannotComplete: 0,
        completed: 5,
      },
      dutyLists: {
        assignedOpen: 30,
        unassigned: 10,
        cancelled: 0,
        cannotComplete: 2,
        completed: 0,
      },
    };

    // Adjust based on active employees
    const activeEmployees = allEmployees.filter(emp => emp.workStatus !== "inactive");
    const completedEmployees = activeEmployees.filter(emp => emp.progress === 100);

    // Update completed counts based on actual progress
    const completionRatio = activeEmployees.length > 0 ? completedEmployees.length / activeEmployees.length : 0;
    data.discharges.completed = Math.round(100 + completionRatio * 20);
    data.adHoc.completed = Math.round(5 + completionRatio * 10);

    // Adjust assigned/open based on in-progress
    data.discharges.assignedOpen = Math.max(0, Math.round(78 - completionRatio * 30));
    data.adHoc.assignedOpen = Math.max(0, Math.round(37 - completionRatio * 15));
    data.dutyLists.assignedOpen = Math.max(0, Math.round(30 - completionRatio * 10));

    return data;
  };

  const taskData = calculateTaskData();

  // Calculate overall progress
  const calculateProgress = () => {
    if (!isToday && !isYesterday) {
      return 0;
    }

    const allEmployees = [
      ...employeeData.main,
      ...employeeData.northWest,
      ...employeeData.south,
    ];

    const activeEmployees = allEmployees.filter(emp => emp.workStatus !== "inactive");
    
    if (activeEmployees.length === 0) {
      return 0;
    }

    const totalProgress = activeEmployees.reduce((sum, emp) => sum + emp.progress, 0);
    const averageProgress = Math.round(totalProgress / activeEmployees.length);
    
    return averageProgress;
  };

  // Calculate operator progress breakdown
  const calculateOperatorBreakdown = () => {
    const allEmployees = [
      ...employeeData.main,
      ...employeeData.northWest,
      ...employeeData.south,
    ];

    const ahead = allEmployees.filter(emp => emp.workStatus === "ahead").length;
    const onTrack = allEmployees.filter(emp => emp.workStatus === "on-track").length;
    const behind = allEmployees.filter(emp => emp.workStatus === "behind").length;
    const inactive = allEmployees.filter(emp => emp.workStatus === "inactive").length;
    const total = allEmployees.length;

    return {
      ahead,
      onTrack,
      behind,
      inactive,
      total,
      aheadPercent: total > 0 ? Math.round((ahead / total) * 100) : 0,
      onTrackPercent: total > 0 ? Math.round((onTrack / total) * 100) : 0,
      behindPercent: total > 0 ? Math.round((behind / total) * 100) : 0,
      inactivePercent: total > 0 ? Math.round((inactive / total) * 100) : 0,
    };
  };

  const operatorBreakdown = calculateOperatorBreakdown();
  const progress = calculateProgress();
  const targetPercentage = 50;

  const getProgressStatus = () => {
    if (progress === 0) {
      return {
        message: "No task activity detected. Confirm task assignments and unblock as needed.",
        barWidth: 0,
      };
    } else if (progress < 30) {
      return {
        message: "Task completion below target. Reassign or adjust as needed.",
        barWidth: progress,
      };
    } else if (progress >= 30 && progress < 60) {
      return {
        message: "Task completion is on target. Maintain current pace.",
        barWidth: progress,
      };
    } else if (progress >= 60 && progress < 90) {
      return {
        message: "Tasks completed above target. Continue monitoring.",
        barWidth: progress,
      };
    } else if (progress >= 90 && progress < 100) {
      return {
        message: "Tasks completed above target. Reallocate resources if applicable.",
        barWidth: progress,
      };
    } else {
      return {
        message: "All tasks completed. Monitor for new requests.",
        barWidth: 100,
      };
    }
  };

  const status = getProgressStatus();

  const getProgressBarColor = () => {
    // Below target (50%): Red
    if (progress < targetPercentage) {
      return "#F27975";
    }
    // On target or above target (50-89%): Green
    if (progress >= targetPercentage && progress < 90) {
      return "#008245";
    }
    // Significantly above target (90%+): Blue
    return "#003396";
  };

  const breakdown = [
    { label: "Ahead", count: operatorBreakdown.ahead, color: "#008245" },
    { label: "On track", count: operatorBreakdown.onTrack, color: "#2457bf" },
    { label: "Behind", count: operatorBreakdown.behind, color: "#c74343" },
    { label: "Inactive", count: operatorBreakdown.inactive, color: "#8793a5" },
  ];
  return <section className="summary-panel" aria-labelledby="summary-title">
    <div className="summary-overview">
      <div className="summary-main"><span className="eyebrow" id="summary-title">Shift overview</span><div className="summary-number">{progress}<span>%</span><span className="summary-caption">completed</span></div><p>{status.message}</p>
        <div className="summary-track progress-track" role="progressbar" aria-label="Overall task completion" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${progress}%`, backgroundColor: getProgressBarColor() }} /><i aria-hidden="true" /></div>
        <div className="progress-caption"><span>Overall progress</span><span>Target: 50%</span></div>
      </div>
      <div className="summary-metrics">{breakdown.map(item => <div className="summary-metric" key={item.label}><span className="metric-label"><i style={{ background: item.color }} />{item.label}</span><strong>{item.count}</strong><span>operators</span></div>)}</div>
    </div>
    <button className="summary-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="shift-breakdown">{expanded ? "Hide" : "Show"} task breakdown<ChevronDown size={16} aria-hidden="true" style={{ transform: expanded ? "rotate(180deg)" : undefined }} /></button>
    {expanded && <div id="shift-breakdown" className="summary-breakdown"><table><caption>Tasks by category and status</caption><thead><tr><th scope="col">Task category</th><th scope="col">Assigned / open</th><th scope="col">Unassigned</th><th scope="col">Cancelled</th><th scope="col">Cannot complete</th><th scope="col">Completed</th></tr></thead><tbody>{([['discharges', 'Discharges'], ['adHoc', 'Ad hoc'], ['dutyLists', 'Duty lists']] as const).map(([key, label]) => <tr key={key}><th scope="row">{label}</th>{Object.entries(taskData[key]).map(([status, value]) => <td key={status}>{value}</td>)}</tr>)}</tbody></table></div>}
  </section>;
}
