import type { TaskRequest } from "../data/taskRequests";
import type { TaskAssignment } from "../lib/assignOperatorTasks";
import { useEffect, useId, useState } from "react";
import { AssignmentSheetContent } from "./AssignmentSheetContent";
import { ArrowDownWideNarrow, Search } from "lucide-react";
import { Sheet, SheetTitle, SheetDescription } from "./ui/sheet";


interface AssignTaskPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  operatorName: string;
  role: string;
  location: string;
  shiftId?: string;
  assignedTasks: string[];
  assignedTaskIds: string[];
  tasks: TaskRequest[];
  onAssign: (tasks: TaskAssignment[]) => void;
  onCloseFocus: () => void;
}

export function AssignTaskPanel({ open, onOpenChange, operatorName, role, location, assignedTasks, assignedTaskIds, tasks, onAssign, onCloseFocus }: AssignTaskPanelProps) {
  const [query, setQuery] = useState("");
  const [scope, setScope] = useState("requests");
  const tabId = useId();
  const [selected, setSelected] = useState<string[]>([]);
  const [newestFirst, setNewestFirst] = useState(false);
  useEffect(() => {
    if (open) { setQuery(""); setScope("requests"); setSelected([]); setNewestFirst(false); }
  }, [open, operatorName]);
  const available = tasks.filter(task => !task.assigned && !assignedTaskIds.includes(task.id));
  const visible = available.filter(task => `${task.name} ${task.location}`.toLowerCase().includes(query.trim().toLowerCase()));
  visible.sort((a, b) => newestFirst ? b.requestedAt.localeCompare(a.requestedAt) : a.requestedAt.localeCompare(b.requestedAt));
  const assignedRequests = tasks.filter(task => assignedTaskIds.includes(task.id));
  const assigned = [
    ...assignedRequests,
    ...[...new Set(assignedTasks)].filter(name => !/^\+\d+$/.test(name) && !assignedRequests.some(task => name === `${task.name} · ${task.location}`)).map(name => ({ id: name, name, location: undefined, requestedTime: undefined })),
  ].filter(task => `${task.name} ${task.location || ""}`.toLowerCase().includes(query.trim().toLowerCase()));
  const chosen = available.filter(task => selected.includes(task.id));
  const toggle = (id: string) => setSelected(previous => previous.includes(id) ? previous.filter(value => value !== id) : [...previous, id]);
  const assign = () => {
    if (!chosen.length) return;
    onAssign(chosen);
    onOpenChange(false);
  };

  return <Sheet open={open} onOpenChange={onOpenChange}>
    <AssignmentSheetContent open={open} className="assign-task-panel" onCloseAutoFocus={event => { event.preventDefault(); onCloseFocus(); }}>
      <header className="assign-task-panel-header">
        <SheetTitle>Assign task</SheetTitle>
        <SheetDescription>Select tasks for {operatorName}.</SheetDescription>
      </header>
      <div className="assign-task-operator">
        <h3>{operatorName}</h3>
        <p>{role === "HouseKeeper" ? "Housekeeper" : role}</p>
        <p>{location}</p>
      </div>
      <div className="assign-task-scopes" role="tablist" aria-label="Operator tasks">
        {["requests", "assigned"].map(tab => <button key={tab} type="button" role="tab" id={`${tabId}-${tab}`} aria-controls={`${tabId}-panel`} aria-selected={scope === tab} tabIndex={scope === tab ? 0 : -1} onClick={() => setScope(tab)} onKeyDown={event => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const next = event.key === "Home" ? "requests" : event.key === "End" ? "assigned" : scope === "requests" ? "assigned" : "requests";
          setScope(next);
          document.getElementById(`${tabId}-${next}`)?.focus();
        }}>{tab === "requests" ? "Requests" : "Assigned"}</button>)}
      </div>
      <div className="assign-task-tools">
        {scope === "requests" && <button type="button" className="secondary-action" aria-label={newestFirst ? "Newest requests first; show oldest first" : "Oldest requests first; show newest first"} aria-pressed={newestFirst} title={newestFirst ? "Newest requests first" : "Oldest requests first"} onClick={() => setNewestFirst(value => !value)}><ArrowDownWideNarrow size={16} aria-hidden="true" /></button>}
        <label className="assign-task-search"><Search size={16} aria-hidden="true" /><input aria-label="Search tasks" placeholder="Search tasks" value={query} onChange={event => setQuery(event.target.value)} /></label>
      </div>
      <div className="assign-task-list" role="tabpanel" id={`${tabId}-panel`} aria-labelledby={`${tabId}-${scope}`} tabIndex={0}>
        {scope === "requests" ? <>
        {visible.map(task => <label key={task.id} className={`assign-task-option${selected.includes(task.id) ? " is-selected" : ""}`}>
          <input type="checkbox" checked={selected.includes(task.id)} onChange={() => toggle(task.id)} />
          <span className="assign-task-name"><strong>{task.name}</strong><span>{task.location}</span></span>
          <span className="assign-task-requested"><span>Requested</span><strong>{task.requestedTime}</strong></span>
        </label>)}
        {visible.length === 0 && <p className="assign-task-empty">{query ? "No tasks match your search." : "No available tasks in this view."}</p>}
        </> : <>
          {assigned.map(task => <div key={task.id} className="assign-task-option assigned-task-option">
            <span className="assign-task-name"><strong>{task.name}</strong>{task.location && <span>{task.location}</span>}</span>
            {task.requestedTime && <span className="assign-task-requested"><span>Requested</span><strong>{task.requestedTime}</strong></span>}
          </div>)}
          {assigned.length === 0 && <p className="assign-task-empty">{query ? "No assignments match your search." : "No tasks assigned yet."}</p>}
        </>}
      </div>
      {scope === "requests" && <footer className="assign-task-footer">
        <p aria-live="polite">{chosen.length ? `${chosen.length} ${chosen.length === 1 ? "task" : "tasks"} selected` : "Select tasks to assign"}</p>
        <button type="button" className="primary-action" disabled={!chosen.length} onClick={assign}>Assign now</button>
      </footer>}
    </AssignmentSheetContent>
  </Sheet>;
}
