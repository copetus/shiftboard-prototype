import { useState, useEffect } from "react";
import { TopNav } from "./components/TopNav";
import { SideNavigation } from "./components/SideNavigation";
import { ShiftHeader } from "./components/ShiftHeader";
import { TaskSummary } from "./components/TaskSummary";
import { FilterBar } from "./components/FilterBar";
import { EmployeeTaskCard, EmployeeTaskData } from "./components/EmployeeTaskCard";
import { NewTaskDialog } from "./components/NewTaskDialog";
import { getEmployeesForDateAndShifts } from "./data/employeeData";
import { OperatorStatusValue } from "./components/OperatorStatusDropdown";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

export default function App() {
  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("2024-10-14");
  const [currentShifts, setCurrentShifts] = useState(["shift1", "shift2"]);
  const [employeeData, setEmployeeData] = useState(() => 
    getEmployeesForDateAndShifts("2024-10-14", ["shift1", "shift2"])
  );
  const allStatusValues: OperatorStatusValue[] = ["in-progress", "on-break", "meal-break", "inactive", "idle"];
  const [selectedStatuses, setSelectedStatuses] = useState<OperatorStatusValue[]>(allStatusValues);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = searchQuery;

  // Check if current date is today
  const isToday = currentDate === "2024-10-14";
  const isYesterday = currentDate === "2024-10-13";
  const isTomorrow = currentDate === "2024-10-15";
  const isDayAfterTomorrow = currentDate === "2024-10-16";

  // Real-time simulation: Update progress and statuses for active employees
  useEffect(() => {
    // Only run simulation for today
    if (!isToday) return;

    const interval = setInterval(() => {
      setEmployeeData((prevData) => {
        const updateAreaEmployees = (employees: EmployeeTaskData[]): EmployeeTaskData[] => {
          return employees.map((employee) => {
            // Skip inactive employees
            if (employee.workStatus === "inactive") {
              return employee;
            }

            // Only update active and in-progress employees
            if (employee.operatorStatus === "active" || employee.operatorStatus === "in-progress") {
              let newProgress = employee.progress;
              let newWorkStatus = employee.workStatus;
              let newOperatorStatus = employee.operatorStatus;

              // Increment progress (simulate work being done)
              if (newProgress < 100) {
                // Random increment between 1-3%
                const increment = Math.floor(Math.random() * 3) + 1;
                newProgress = Math.min(100, newProgress + increment);
                
                // When reaching 100%, change to idle
                if (newProgress === 100) {
                  newOperatorStatus = "idle";
                  newWorkStatus = "on-track"; // Completed tasks are on track
                }
              }

              // Occasionally change work status (10% chance every update, but not if at 100%)
              if (newProgress < 100 && Math.random() < 0.1) {
                const statuses: Array<"on-track" | "ahead" | "behind"> = ["on-track", "ahead", "behind"];
                newWorkStatus = statuses[Math.floor(Math.random() * statuses.length)];
              }

              return {
                ...employee,
                progress: newProgress,
                workStatus: newWorkStatus,
                operatorStatus: newOperatorStatus,
              };
            }

            return employee;
          });
        };

        return {
          main: updateAreaEmployees(prevData.main),
          northWest: updateAreaEmployees(prevData.northWest),
          south: updateAreaEmployees(prevData.south),
        };
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [isToday]);

  const handleDateShiftChange = (date: string, shifts: string[]) => {
    setCurrentDate(date);
    setCurrentShifts(shifts);
    setEmployeeData(getEmployeesForDateAndShifts(date, shifts));
  };

  const handleShiftRemove = (shiftId: string) => {
    // Don't allow removing if it's the only shift
    if (currentShifts.length === 1) return;
    
    const newShifts = currentShifts.filter(id => id !== shiftId);
    handleDateShiftChange(currentDate, newShifts);
  };

  const handleStatusChange = (statuses: OperatorStatusValue[]) => {
    setSelectedStatuses(statuses);
  };

  const handleAssignTasks = (employeeName: string, area: "main" | "northWest" | "south", shiftId: string | undefined, tasks: string[]) => {
    setEmployeeData(previous => ({
      ...previous,
      [area]: previous[area].map(employee => employee.name === employeeName && employee.shiftId === shiftId
        ? { ...employee, additionalTags: [...new Set([...(employee.additionalTags || []), ...tasks])] }
        : employee),
    }));
    toast.success(`Assigned ${tasks.length} ${tasks.length === 1 ? "task" : "tasks"} to ${employeeName}`, { description: tasks.join(", ") });
  };

  const handleCancelDutyLists = (employeeName: string, area: "main" | "northWest" | "south", tagsToRemove: string[]) => {
    setEmployeeData((prevData) => {
      const updateEmployee = (employee: EmployeeTaskData): EmployeeTaskData => {
        if (employee.name !== employeeName) {
          return employee;
        }

        // Remove tags from the employee
        const updatedEmployee = { ...employee };

        // Check and remove department if in the list
        if (tagsToRemove.includes(employee.department)) {
          updatedEmployee.department = "";
        }

        // Check and remove dutyList if in the list
        if (employee.dutyList && tagsToRemove.includes(employee.dutyList)) {
          updatedEmployee.dutyList = undefined;
        }

        // Remove tags from additionalTags
        if (employee.additionalTags) {
          updatedEmployee.additionalTags = employee.additionalTags.filter(
            tag => !tagsToRemove.includes(tag)
          );
          // If no additional tags remain, set to undefined
          if (updatedEmployee.additionalTags.length === 0) {
            updatedEmployee.additionalTags = undefined;
          }
        }

        // Check if any "+X" tag was removed and reduce extraAssignments
        const removedExtraAssignments = tagsToRemove.filter(tag => tag.match(/^\+\d+$/));
        if (removedExtraAssignments.length > 0 && employee.extraAssignments) {
          // If the +X tag was removed, set extraAssignments to 0
          updatedEmployee.extraAssignments = 0;
        }

        return updatedEmployee;
      };

      return {
        main: area === "main" ? prevData.main.map(updateEmployee) : prevData.main,
        northWest: area === "northWest" ? prevData.northWest.map(updateEmployee) : prevData.northWest,
        south: area === "south" ? prevData.south.map(updateEmployee) : prevData.south,
      };
    });

    // Show success toast
    const tagCount = tagsToRemove.length;
    const tagText = tagCount === 1 ? "duty list" : "duty lists";
    toast.success(`Cancelled ${tagCount} ${tagText} for ${employeeName}`, {
      description: tagsToRemove.join(", "),
    });
  };

  // Filter employees based on search query
  const filterEmployeesBySearch = (employees: EmployeeTaskData[]): EmployeeTaskData[] => {
    if (!debouncedSearchQuery.trim()) {
      return employees;
    }

    const query = debouncedSearchQuery.toLowerCase().trim();

    return employees.filter((employee) => {
      // Search by name
      if (employee.name.toLowerCase().includes(query)) {
        return true;
      }

      // Search by location
      if (employee.location.toLowerCase().includes(query)) {
        return true;
      }

      // Search by duty list
      if (employee.dutyList && employee.dutyList.toLowerCase().includes(query)) {
        return true;
      }

      // Search by additional tags
      if (employee.additionalTags && employee.additionalTags.some(tag => tag.toLowerCase().includes(query))) {
        return true;
      }

      return false;
    });
  };

  // Filter employees based on selected statuses (multi-select)
  const filterEmployeesByStatus = (employees: EmployeeTaskData[]): EmployeeTaskData[] => {
    // Selecting every status shows all operators. An empty selection shows none.
    if (selectedStatuses.length === allStatusValues.length) {
      return employees;
    }

    return employees.filter((employee) => {
      // Check if inactive status is selected
      if (selectedStatuses.includes("inactive") && employee.workStatus === "inactive") {
        return true;
      }

      // Check if meal-break is selected (treat same as on-break)
      if (selectedStatuses.includes("meal-break") && employee.operatorStatus === "on-break") {
        return true;
      }

      // Check if employee's operator status matches any of the selected statuses
      if (employee.operatorStatus && selectedStatuses.includes(employee.operatorStatus as OperatorStatusValue)) {
        return true;
      }

      return false;
    });
  };

  // Apply both search and status filters
  const applyAllFilters = (employees: EmployeeTaskData[]): EmployeeTaskData[] => {
    let filtered = filterEmployeesBySearch(employees);
    filtered = filterEmployeesByStatus(filtered);
    return filtered;
  };

  const filteredEmployeeData = {
    main: applyAllFilters(employeeData.main),
    northWest: applyAllFilters(employeeData.northWest),
    south: applyAllFilters(employeeData.south),
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to shift board</a>
      {/* Top Navigation */}
      <TopNav />

      <div className="flex">
        {/* Side Navigation */}
        <SideNavigation />

        {/* Main Content Area */}
        <main id="main-content" className="main-content" tabIndex={-1}>
          {/* Shift Header */}
          <ShiftHeader 
            onNewTask={() => setNewTaskDialogOpen(true)} 
            onDateShiftChange={handleDateShiftChange}
            onShiftRemove={handleShiftRemove}
            currentDate={currentDate}
            currentShifts={currentShifts}
          />

          {/* Content - Add top padding to account for fixed header */}
          <div className="board-content">
            {/* Task Summary */}
            <TaskSummary 
              employeeData={employeeData} 
              isToday={isToday} 
              isYesterday={isYesterday}
              isTomorrow={isTomorrow}
              isDayAfterTomorrow={isDayAfterTomorrow}
            />

            {/* Filters */}
            <FilterBar 
              selectedStatuses={selectedStatuses}
              onStatusChange={handleStatusChange}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Areas */}
            <div className="area-list">
                  <>
                      {/* Main Area */}
                      {filteredEmployeeData.main.length > 0 && (
                        <div className="flex flex-col gap-[16px] items-start w-full">
                          <h2 className="area-title" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Main <span>{filteredEmployeeData.main.length} operators</span>
                          </h2>
                          
                          {/* Responsive Grid: 3 on desktop, 2 on tablet, 1 on mobile */}
                          <div className="operator-grid">
                            {filteredEmployeeData.main.map((employee) => (
                              <EmployeeTaskCard 
                                key={`main-${employee.name}`} 
                                employee={employee} 
                                isToday={isToday}
                                area="main"
                                onAssignTasks={handleAssignTasks}
                                onCancelDutyLists={handleCancelDutyLists}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* North West Area */}
                      {filteredEmployeeData.northWest.length > 0 && (
                        <div className="flex flex-col gap-[16px] items-start w-full">
                          <h2 className="area-title" style={{ fontVariationSettings: "'opsz' 14" }}>
                            North West <span>{filteredEmployeeData.northWest.length} operators</span>
                          </h2>
                          
                          <div className="operator-grid">
                            {filteredEmployeeData.northWest.map((employee) => (
                              <EmployeeTaskCard 
                                key={`nw-${employee.name}`} 
                                employee={employee} 
                                isToday={isToday}
                                area="northWest"
                                onAssignTasks={handleAssignTasks}
                                onCancelDutyLists={handleCancelDutyLists}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* South Area */}
                      {filteredEmployeeData.south.length > 0 && (
                        <div className="flex flex-col gap-[16px] items-start w-full">
                          <h2 className="area-title" style={{ fontVariationSettings: "'opsz' 14" }}>
                            South <span>{filteredEmployeeData.south.length} operators</span>
                          </h2>
                          
                          <div className="operator-grid">
                            {filteredEmployeeData.south.map((employee) => (
                              <EmployeeTaskCard 
                                key={`south-${employee.name}`} 
                                employee={employee} 
                                isToday={isToday}
                                area="south"
                                onAssignTasks={handleAssignTasks}
                                onCancelDutyLists={handleCancelDutyLists}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* No Data Message */}
                      {filteredEmployeeData.main.length === 0 && filteredEmployeeData.northWest.length === 0 && filteredEmployeeData.south.length === 0 && (
                        <div className="empty-state" role="status">
                          <p className="font-['DM_Sans'] font-normal text-[24px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {debouncedSearchQuery.trim() ? 'No operators match your search' : 'There are no operators to show for your selection'}
                          </p>
                          <p className="font-['DM_Sans'] font-normal text-[16px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {debouncedSearchQuery.trim() ? `Try different search terms or clear your search.` : 'Try adjusting your status filters, date or shift.'}
                          </p>
                          <button className="secondary-action" onClick={() => { setSearchQuery(""); setSelectedStatuses(allStatusValues); }}>Clear filters</button>
                        </div>
                      )}
                  </>
                </div>
          </div>
        </main>
      </div>

      {/* New Task Dialog */}
      <NewTaskDialog open={newTaskDialogOpen} onOpenChange={setNewTaskDialogOpen} />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
