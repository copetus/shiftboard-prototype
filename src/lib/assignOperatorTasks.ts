import type { EmployeeTaskData } from "../components/EmployeeTaskCard";

export interface TaskAssignment {
  name: string;
  estimatedMinutes: number;
}

export function assignOperatorTasks(employee: EmployeeTaskData, tasks: TaskAssignment[]): EmployeeTaskData {
  const existing = new Set([employee.department, employee.dutyList, ...(employee.additionalTags || [])].filter(Boolean));
  const additions = tasks.filter(task => {
    if (existing.has(task.name)) return false;
    existing.add(task.name);
    return true;
  });
  if (!additions.length) return employee;

  // Existing prototype assignments have no duration: estimate 30 minutes each.
  const originalCount = new Set([employee.department, employee.dutyList, ...(employee.additionalTags || [])].filter(Boolean)).size + (employee.extraAssignments || 0);
  const previousWork = employee.estimatedWorkMinutes ?? Math.max(1, originalCount) * 30;
  const totalWork = previousWork + additions.reduce((sum, task) => sum + task.estimatedMinutes, 0);
  const completedWork = previousWork * employee.progress / 100;
  return {
    ...employee,
    additionalTags: [...(employee.additionalTags || []), ...additions.map(task => task.name)],
    estimatedWorkMinutes: totalWork,
    progress: Math.min(99, Math.round(completedWork / totalWork * 100)),
  };
}
