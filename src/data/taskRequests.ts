export interface TaskRequest {
  id: string;
  name: string;
  location: string;
  estimatedMinutes: number;
  requestedTime: string;
  requestedAt: string;
  shift?: string;
  durationMinutes?: number;
  repeatTimes?: number;
  specificTime?: string;
  frequency?: "specific" | "all";
  days?: string[];
  notes?: string;
  assigned?: boolean;
}
export interface NewTaskDraft {
  taskClass: string;
  locations: string[];
  durationMinutes: number;
  repeatTimes: number;
  specificTime: string;
  frequency: "specific" | "all";
  days: string[];
  notes: string;
}
export function createTaskRequests(draft: NewTaskDraft): TaskRequest[] {
  const now = new Date();
  return draft.locations.map(location => ({
    id: crypto.randomUUID(), name: draft.taskClass, location,
    estimatedMinutes: draft.durationMinutes * draft.repeatTimes,
    durationMinutes: draft.durationMinutes, repeatTimes: draft.repeatTimes,
    specificTime: draft.specificTime, frequency: draft.frequency,
    days: draft.days, notes: draft.notes,
    requestedAt: now.toTimeString().slice(0, 8),
    requestedTime: now.toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit"}),
  }));
}

// Sample assignment inventory for the prototype.
export const initialTaskRequests: TaskRequest[] = [
  { id: "task-101", estimatedMinutes: 35, name: "Lab cleaning", location: "Main Building · Lab 104", requestedTime: "8:10 AM", requestedAt: "08:10", shift: "shift1" },
  { id: "task-102", estimatedMinutes: 25, name: "Pharmacy cleaning", location: "Main Building · Pharmacy 112", requestedTime: "8:25 AM", requestedAt: "08:25", shift: "shift1" },
  { id: "task-103", estimatedMinutes: 30, name: "Cardiology exam room cleaning", location: "Heart Center · Room 208", requestedTime: "8:40 AM", requestedAt: "08:40", shift: "shift1" },
  { id: "task-104", estimatedMinutes: 45, name: "Patient room discharge cleaning", location: "North Wing · Room 315", requestedTime: "3:35 PM", requestedAt: "15:35", shift: "shift2" },
  { id: "task-105", estimatedMinutes: 30, name: "Pulmonary clinic cleaning", location: "Outpatient Center · Room 126", requestedTime: "9:05 AM", requestedAt: "09:05", shift: "shift1" },
  { id: "task-106", estimatedMinutes: 20, name: "Clinical office cleaning", location: "South Wing · Office 204", requestedTime: "4:15 PM", requestedAt: "16:15", shift: "shift2" },
  { id: "task-107", estimatedMinutes: 40, name: "Waiting area floor cleaning", location: "Emergency Department · Main lobby", requestedTime: "10:30 PM", requestedAt: "22:30", shift: "shift3" },
];
