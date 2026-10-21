import { useState, useEffect, useRef } from "react";
import { TopNav } from "./components/TopNav";
import { SideNavigation } from "./components/SideNavigation";
import { ShiftHeader } from "./components/ShiftHeader";
import { TaskSummary } from "./components/TaskSummary";
import { FilterBar } from "./components/FilterBar";
import { EmployeeTaskCard, EmployeeTaskData } from "./components/EmployeeTaskCard";
import { NewTaskDialog } from "./components/NewTaskDialog";
import { getEmployeesForDateAndShifts } from "./data/employeeData";
import { EmployeeCardSkeleton } from "./components/EmployeeCardSkeleton";
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
  const [isLoading, setIsLoading] = useState(false);
  
  // Multi-select filter state
  const allStatusValues: OperatorStatusValue[] = ["in-progress", "on-break", "meal-break", "inactive", "idle"];
  const [selectedStatuses, setSelectedStatuses] = useState<OperatorStatusValue[]>(allStatusValues);
  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const filterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
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
    setIsLoading(true);
    setCurrentDate(date);
    setCurrentShifts(shifts);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const newData = getEmployeesForDateAndShifts(date, shifts);
      setEmployeeData(newData);
      setIsLoading(false);
    }, 500);
  };

  const handleShiftRemove = (shiftId: string) => {
    // Don't allow removing if it's the only shift
    if (currentShifts.length === 1) return;
    
    const newShifts = currentShifts.filter(id => id !== shiftId);
    handleDateShiftChange(currentDate, newShifts);
  };

  const handleStatusChange = (statuses: OperatorStatusValue[]) => {
    // Clear any existing timeout
    if (filterTimeoutRef.current) {
      clearTimeout(filterTimeoutRef.current);
    }

    // Immediately show loading state
    setIsFilterLoading(true);
    
    // Set the new statuses immediately
    setSelectedStatuses(statuses);
    
    // Debounce the actual filter application by 1 second
    filterTimeoutRef.current = setTimeout(() => {
      setIsFilterLoading(false);
      filterTimeoutRef.current = null;
    }, 1000);
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

  // Debounce search query with 500ms delay and loading state
  useEffect(() => {
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // If there's a search query, show loading
    if (searchQuery !== debouncedSearchQuery) {
      setIsSearchLoading(true);
    }

    // Set new timeout
    searchTimeoutRef.current = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      setIsSearchLoading(false);
    }, 500);

    // Cleanup
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (filterTimeoutRef.current) {
        clearTimeout(filterTimeoutRef.current);
      }
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

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
    // If no statuses selected or all statuses selected, show all
    if (selectedStatuses.length === 0 || selectedStatuses.length === allStatusValues.length) {
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
    <div className="bg-[#f7f8f9] min-h-screen">
      {/* Top Navigation */}
      <TopNav />

      <div className="flex">
        {/* Side Navigation */}
        <SideNavigation />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Shift Header */}
          <ShiftHeader 
            onNewTask={() => setNewTaskDialogOpen(true)} 
            onDateShiftChange={handleDateShiftChange}
            onShiftRemove={handleShiftRemove}
            currentDate={currentDate}
            currentShifts={currentShifts}
          />

          {/* Content - Add top padding to account for fixed header */}
          <div className="box-border flex flex-col gap-[24px] items-start px-[24px] py-[24px] mt-[140px]">
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
            <div className="flex flex-col gap-[64px] items-start w-full">
                  {isLoading || isFilterLoading || isSearchLoading ? (
                    <>
                      {/* Skeleton Loading State */}
                      {[1, 2, 3].map((areaIndex) => (
                        <div key={`skeleton-area-${areaIndex}`} className="flex flex-col gap-[16px] items-start w-full">
                          <div className="h-[32px] w-[120px] bg-slate-200 animate-pulse rounded" />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
                            {[1, 2, 3].map((cardIndex) => (
                              <EmployeeCardSkeleton key={`skeleton-${areaIndex}-${cardIndex}`} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {/* Main Area */}
                      {filteredEmployeeData.main.length > 0 && (
                        <div className="flex flex-col gap-[16px] items-start w-full">
                          <p className="font-['DM_Sans'] font-normal text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Main
                          </p>
                          
                          {/* Responsive Grid: 3 on desktop, 2 on tablet, 1 on mobile */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
                            {filteredEmployeeData.main.map((employee) => (
                              <EmployeeTaskCard 
                                key={`main-${employee.name}`} 
                                employee={employee} 
                                isToday={isToday}
                                area="main"
                                onCancelDutyLists={handleCancelDutyLists}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* North West Area */}
                      {filteredEmployeeData.northWest.length > 0 && (
                        <div className="flex flex-col gap-[16px] items-start w-full">
                          <p className="font-['DM_Sans'] font-normal text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                            North West
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
                            {filteredEmployeeData.northWest.map((employee) => (
                              <EmployeeTaskCard 
                                key={`nw-${employee.name}`} 
                                employee={employee} 
                                isToday={isToday}
                                area="northWest"
                                onCancelDutyLists={handleCancelDutyLists}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* South Area */}
                      {filteredEmployeeData.south.length > 0 && (
                        <div className="flex flex-col gap-[16px] items-start w-full">
                          <p className="font-['DM_Sans'] font-normal text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                            South
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
                            {filteredEmployeeData.south.map((employee) => (
                              <EmployeeTaskCard 
                                key={`south-${employee.name}`} 
                                employee={employee} 
                                isToday={isToday}
                                area="south"
                                onCancelDutyLists={handleCancelDutyLists}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* No Data Message */}
                      {filteredEmployeeData.main.length === 0 && filteredEmployeeData.northWest.length === 0 && filteredEmployeeData.south.length === 0 && (
                        <div className="flex flex-col gap-[8px] items-start w-full text-center py-12">
                          <p className="font-['DM_Sans'] font-normal text-[24px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {debouncedSearchQuery.trim() ? 'No operators match your search' : 'There are no operators to show for your selection'}
                          </p>
                          <p className="font-['DM_Sans'] font-normal text-[16px] text-black w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {debouncedSearchQuery.trim() ? `Try different search terms or clear your search.` : 'Try adjusting the date or shift.'}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
          </div>
        </div>
      </div>

      {/* New Task Dialog */}
      <NewTaskDialog open={newTaskDialogOpen} onOpenChange={setNewTaskDialogOpen} />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
