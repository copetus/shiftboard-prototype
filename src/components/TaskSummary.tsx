import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-rh1g3fm2ym";
import donutSvgPaths from "../imports/svg-rs9eifyou2";
import { EmployeeTaskData } from "./EmployeeTaskCard";
import { animate, motion, AnimatePresence, useReducedMotion } from "motion/react";

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

interface TooltipData {
  category: string;
  status: string;
}

function AnimatedOperatorCount({ total }: { total: number }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    setCount(0);
    const animation = animate(0, total, {
      duration: 0.65,
      delay: 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: value => setCount(Math.round(value)),
    });
    return () => animation.stop();
  }, [total, reduceMotion]);

  return <span aria-label={`${total}`}><span aria-hidden="true">{reduceMotion ? total : count}</span></span>;
}

export function TaskSummary({ employeeData, isToday, isYesterday, isTomorrow, isDayAfterTomorrow }: TaskSummaryProps) {
  const [expanded, setExpanded] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<TooltipData | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

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
    const inProgressEmployees = activeEmployees.filter(emp => emp.progress > 0 && emp.progress < 100);

    // Update completed counts based on actual progress
    const completionRatio = activeEmployees.length > 0 ? completedEmployees.length / activeEmployees.length : 0;
    data.discharges.completed = Math.round(100 + completionRatio * 20);
    data.adHoc.completed = Math.round(5 + completionRatio * 10);

    // Adjust assigned/open based on in-progress
    const progressRatio = activeEmployees.length > 0 ? inProgressEmployees.length / activeEmployees.length : 0;
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

  const getCellBackground = (status: string) => {
    switch (status) {
      case "unassigned":
        return "bg-white hover:bg-[#f2f3f4]";
      case "assignedOpen":
        return "bg-[#f1f7ff] hover:bg-[#dce9f7]";
      case "cancelled":
        return "bg-[#f7f8f9] hover:bg-[#e5e7e9]";
      case "cannotComplete":
        return "bg-[#fffcf2] hover:bg-[#f7f3dc]";
      case "completed":
        return "bg-[#f2fff9] hover:bg-[#dcf7ed]";
      default:
        return "bg-white hover:bg-[#f7f8f9]";
    }
  };

  const getCellTextColor = (status: string) => {
    switch (status) {
      case "unassigned":
        return "text-[#282e38]";
      case "assignedOpen":
        return "text-[#003396]";
      case "cancelled":
        return "text-[#282e38]";
      case "cannotComplete":
        return "text-[#d6302d]";
      case "completed":
        return "text-[#008245]";
      default:
        return "text-[#282e38]";
    }
  };

  const getIconColor = (status: string) => {
    return "#64748B";
  };

  const getTooltipText = (category: string, status: string) => {
    const categoryName = category === "discharges" ? "Discharges" : category === "adHoc" ? "Ad Hoc" : "Duty Lists";
    const statusName = status === "assignedOpen" ? "Assigned and Open" :
                      status === "unassigned" ? "Unassigned" :
                      status === "cancelled" ? "Cancelled" :
                      status === "cannotComplete" ? "Cannot Complete" : "Completed";
    return `See detailed breakdown of ${statusName} ${categoryName}`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, category: string, status: string) => {
    setHoveredCell({ category, status });

    // Calculate tooltip position with edge detection
    const tooltipWidth = 250;
    const tooltipHeight = 100; // Approximate height
    const offset = 20;
    const padding = 10; // Padding from screen edges

    let x = e.clientX + offset;
    let y = e.clientY - 50;

    // Check right edge
    if (x + tooltipWidth + padding > window.innerWidth) {
      x = e.clientX - tooltipWidth - offset;
    }

    // Check left edge
    if (x < padding) {
      x = padding;
    }

    // Check bottom edge
    if (y + tooltipHeight + padding > window.innerHeight) {
      y = e.clientY - tooltipHeight - offset;
    }

    // Check top edge
    if (y < padding) {
      y = padding;
    }

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <div className="original-summary bg-white rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] w-full">
      <div className="original-summary-body box-border flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        {/* Progress Bar */}
        <div className="original-summary-progress flex flex-col gap-[16px] items-start w-full">
          <p className="font-['DM_Sans'] font-normal text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            {status.message}
          </p>

          {/* Bar and Data Points */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            {/* Bar */}
            <div className="relative w-full">
              <div className="overall-shift-progress-track bg-[#eceef0] flex flex-col items-start relative rounded-[4px] w-full">
                {status.barWidth > 0 && (
                  <div
                    className="original-progress-fill absolute bottom-0 left-0 rounded-[4px] top-0"
                    style={{
                      right: `${100 - status.barWidth}%`,
                      backgroundColor: getProgressBarColor()
                    }}
                  />
                )}
                <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 -translate-x-1/2 w-[14px]" />
              </div>
              {/* Target Label */}
              <div className="overall-shift-target-label">
                <p className="font-['DM_Sans'] font-normal text-[#282e38] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Target (50%)
                </p>
              </div>
            </div>

            {/* Data Points */}
            <div className="flex flex-wrap gap-[16px] items-center w-full">
              {/* Progress Completed */}
              <div className="flex gap-[7px] items-center">
                <div
                  className="rounded-[4px] size-[12px]"
                  style={{ backgroundColor: getProgressBarColor() }}
                />
                <div className="flex gap-[4px] items-start text-[#282e38] text-[16px] whitespace-nowrap">
                  <p className="font-['DM_Sans'] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {progress}%
                  </p>
                  <p className="font-['DM_Sans'] font-normal" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Section */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
              id="original-task-breakdown"
              className="w-full overflow-hidden"
            >
              <div className="original-breakdown-surface rounded-[8px] border border-[#d9dbde] w-full">
                <div className="original-breakdown-layout box-border flex gap-[24px] items-center p-[16px] relative w-full">
                  {/* Operator Work Status Distribution - Donut Chart */}
                  <div className="original-distribution basis-0 flex flex-col grow items-start p-[16px] relative rounded-[8px] gap-[16px]">
                    <p className="font-['DM_Sans'] font-normal text-[#4e535b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Operator work status distribution.
                    </p>

                    <div className="original-chart-and-legend flex gap-[24px] items-center w-full">
                      {/* Donut Chart */}
                      <div className="original-donut relative shrink-0 size-[207px]">
                        <motion.div
                          className="original-donut-segments"
                          initial={reduceMotion ? false : { maskImage: "conic-gradient(from 0deg, #000 0deg, transparent 0deg)" }}
                          animate={{ maskImage: "conic-gradient(from 0deg, #000 360deg, transparent 360deg)" }}
                          transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                        <div className="absolute flex inset-0 items-center justify-center">
                          <div className="flex-none rotate-[270deg] size-[216px]">
                            <div className="relative size-full">
                              <div className="absolute inset-[1.89%_8.91%_75.66%_61.34%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 47">
                                  <path d={donutSvgPaths.p53bf00} fill="#F27975" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center">
                          <div className="flex-none rotate-[270deg] size-[216px]">
                            <div className="relative size-full">
                              <div className="absolute inset-[27.31%_0.54%_55.29%_90.89%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 37">
                                  <g>
                                    <mask fill="white" id="path-1-inside-1_243_1078">
                                      <path d={donutSvgPaths.p317bf5c0} />
                                    </mask>
                                    <path d={donutSvgPaths.p317bf5c0} fill="white" mask="url(#path-1-inside-1_243_1078)" stroke="#CCCFD4" strokeWidth="4" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center">
                          <div className="flex-none rotate-[180deg] size-[216px]">
                            <div className="relative size-full">
                              <div className="absolute bottom-[0.06%] left-0 right-[31.9%] top-0">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 207">
                                  <path d={donutSvgPaths.p20270e00} fill="#008245" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex inset-0 items-center justify-center">
                          <div className="flex-none rotate-[180deg] size-[216px]">
                            <div className="relative size-full">
                              <div className="absolute bottom-[46.97%] left-[73.07%] right-0 top-[7.17%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 95">
                                  <path d={donutSvgPaths.p232f9a80} fill="#003396" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        </motion.div>
                        <div className="absolute flex flex-col font-['DM_Sans'] font-normal h-[100px] items-start justify-between text-[#282e38] text-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[188px]">
                          <p className="relative shrink-0 text-[70px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <AnimatedOperatorCount total={operatorBreakdown.total} />
                          </p>
                          <p className="relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Operators
                          </p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="original-chart-legend flex flex-col gap-[12px] items-start relative shrink-0">
                        <div className="flex gap-[7px] items-center relative shrink-0">
                          <div className="bg-[#008245] rounded-[4px] shrink-0 size-[12px]" />
                          <div className="flex gap-[4px] items-start text-[#282e38] text-nowrap whitespace-pre">
                            <p className="font-['DM_Sans'] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              {operatorBreakdown.ahead}
                            </p>
                            <p className="font-['DM_Sans'] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Ahead ({operatorBreakdown.aheadPercent}%)
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[7px] items-center relative shrink-0">
                          <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
                          <div className="flex gap-[4px] items-start text-[#282e38] text-nowrap whitespace-pre">
                            <p className="font-['DM_Sans'] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              {operatorBreakdown.onTrack}
                            </p>
                            <p className="font-['DM_Sans'] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              On Track ({operatorBreakdown.onTrackPercent}%)
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[7px] items-center relative shrink-0">
                          <div className="bg-[#f27975] rounded-[4px] shrink-0 size-[12px]" />
                          <div className="flex gap-[4px] items-start text-[#282e38] text-nowrap whitespace-pre">
                            <p className="font-['DM_Sans'] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              {operatorBreakdown.behind}
                            </p>
                            <p className="font-['DM_Sans'] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Behind ({operatorBreakdown.behindPercent}%)
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-[7px] items-center relative shrink-0">
                          <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]">
                            <div aria-hidden="true" className="absolute border-2 border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          </div>
                          <div className="flex gap-[4px] items-start text-[#282e38] text-nowrap whitespace-pre">
                            <p className="font-['DM_Sans'] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              {operatorBreakdown.inactive}
                            </p>
                            <p className="font-['DM_Sans'] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              N/A ({operatorBreakdown.inactivePercent}%)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="original-breakdown-divider" aria-hidden="true" />

                  {/* Task Status Breakdown */}
                  <div className="original-category-breakdown flex flex-col items-start p-[16px] relative rounded-[8px] gap-[16px]">
                    <p className="font-['DM_Sans'] font-normal text-[#4e535b] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Task status breakdown across categories.
                    </p>

                    {/* Task Category Matrix - Desktop */}
                    <div className="original-category-matrix box-border flex items-start pl-0 pr-px py-0 relative w-full">
                          <div className="flex flex-col items-end pr-[16px] pt-[34px] shrink-0">
                            <div className="box-border flex flex-col font-['DM_Sans'] font-normal text-black text-right pb-px text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <div className="flex items-center justify-end matrix-reveal-row min-h-[64px] mb-[-1px]"><p className="relative shrink-0">Unassigned</p></div>
                              <div className="flex items-center justify-end matrix-reveal-row min-h-[64px] mb-[-1px]"><p className="relative shrink-0">Assigned & Open</p></div>
                              <div className="flex items-center justify-end matrix-reveal-row min-h-[64px] mb-[-1px]"><p className="relative shrink-0">Cancelled</p></div>
                              <div className="flex items-center justify-end matrix-reveal-row min-h-[64px] mb-[-1px]"><p className="relative shrink-0">Cannot Complete</p></div>
                              <div className="flex items-center justify-end matrix-reveal-row min-h-[64px] mb-[-1px]"><p className="relative shrink-0">Completed</p></div>
                            </div>
                          </div>

                          {/* Data Columns */}
                          <div className="box-border flex flex-col gap-[16px] grow items-center mr-[-1px] relative shrink-0">
                            <p className="font-['DM_Sans'] font-bold text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Discharge
                            </p>
                            <div className="box-border flex flex-col items-start min-w-px pb-px pt-0 px-0 relative shrink-0 w-full">
                              <div className={`${getCellBackground("unassigned")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative rounded-br-[2px] rounded-tl-[8px] shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "discharges", "unassigned")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-br-[2px] rounded-tl-[8px]" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("unassigned")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.discharges.unassigned}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("assignedOpen")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "discharges", "assignedOpen")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("assignedOpen")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.discharges.assignedOpen}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("cancelled")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "discharges", "cancelled")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("cancelled")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.discharges.cancelled}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("cannotComplete")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "discharges", "cannotComplete")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("cannotComplete")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.discharges.cannotComplete}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("completed")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative rounded-bl-[8px] shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "discharges", "completed")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-bl-[8px]" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("completed")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.discharges.completed}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Ad Hoc Column */}
                          <div className="box-border flex flex-col gap-[16px] grow items-center mr-[-1px] relative shrink-0">
                            <p className="font-['DM_Sans'] font-bold text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Ad Hoc
                            </p>
                            <div className="box-border flex flex-col items-start min-w-px pb-px pt-0 px-0 relative shrink-0 w-full">
                              <div className={`${getCellBackground("unassigned")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "adHoc", "unassigned")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("unassigned")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.adHoc.unassigned}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("assignedOpen")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "adHoc", "assignedOpen")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("assignedOpen")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.adHoc.assignedOpen}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("cancelled")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "adHoc", "cancelled")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("cancelled")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.adHoc.cancelled}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("cannotComplete")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "adHoc", "cannotComplete")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("cannotComplete")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.adHoc.cannotComplete}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("completed")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "adHoc", "completed")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("completed")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.adHoc.completed}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Duty List Column */}
                          <div className="box-border flex flex-col gap-[16px] grow items-center mr-[-1px] relative shrink-0">
                            <p className="font-['DM_Sans'] font-bold text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Duty List
                            </p>
                            <div className="box-border flex flex-col items-start min-w-px pb-px pt-0 px-0 relative shrink-0 w-full">
                              <div className={`${getCellBackground("unassigned")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative rounded-tr-[8px] shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "dutyLists", "unassigned")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-tr-[8px]" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("unassigned")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.dutyLists.unassigned}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("assignedOpen")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "dutyLists", "assignedOpen")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("assignedOpen")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.dutyLists.assignedOpen}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("cancelled")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "dutyLists", "cancelled")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="absolute overflow-clip right-[16px] size-[24px] top-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                                      <div className="absolute inset-[22.917%]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                                          <path d={donutSvgPaths.p15306e80} fill="#64748B" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("cancelled")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.dutyLists.cancelled}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("cannotComplete")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "dutyLists", "cannotComplete")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("cannotComplete")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.dutyLists.cannotComplete}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${getCellBackground("completed")} mb-[-1px] matrix-reveal-row min-h-[64px] min-w-px relative rounded-br-[8px] shrink-0 w-full cursor-pointer transition-colors group`} onMouseMove={(e) => handleMouseMove(e, "dutyLists", "completed")} onMouseLeave={handleMouseLeave}>
                                <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-br-[8px]" />
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="box-border flex gap-[7px] items-center justify-center p-[16px] relative size-full">
                                    <div className="basis-0 flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                      <p className={`font-['DM_Sans'] font-bold text-[18px] text-center text-nowrap whitespace-pre ${getCellTextColor("completed")}`} style={{ fontVariationSettings: "'opsz' 14" }}>
                                        {taskData.dutyLists.completed}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>



                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Show More/Less Button */}
        <button
          aria-expanded={expanded}
          aria-controls="original-task-breakdown"
          onClick={() => setExpanded(!expanded)}
          className="original-summary-toggle box-border flex gap-[8px] items-center justify-center p-[8px] rounded-[6px] hover:bg-slate-50 transition-colors"
        >
          <div className={`size-[24px] transition-transform ${expanded ? 'rotate-180' : ''}`}>
            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p18b66300} fill="#003396" />
            </svg>
          </div>
          <p className="font-['DM_Sans'] font-bold text-[#003396] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            {expanded ? "Hide breakdown" : "Show breakdown"}
          </p>
        </button>

        {/* Tooltip */}
        {hoveredCell && (
          <div
            className="fixed bg-white box-border flex gap-[16px] items-start p-[16px] rounded-[8px] shadow-[0px_2px_12px_0px_#dcdcdd] w-[250px] z-50 pointer-events-none"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          >
            <p className="font-['DM_Sans'] font-normal text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              {getTooltipText(hoveredCell.category, hoveredCell.status)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
