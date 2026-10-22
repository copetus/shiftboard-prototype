import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { X, ChevronDown } from "lucide-react";
import type { NewTaskDraft } from "../data/taskRequests";

const locations = ["Pavilion\\2\\P2-202-A", "Pavilion\\5\\P5-502-B", "Pavilion\\1\\P1-104-Lab", "Pavilion\\1\\P1-112-Pharmacy", "Pavilion\\2\\P2-208-Cardiology", "Pavilion\\3\\P3-126-Pulmonary"];
const timeOptions = Array.from({ length: 96 }, (_, index) => {
  const hour = Math.floor(index / 4);
  const minute = String((index % 4) * 15).padStart(2, "0");
  return { value: `${String(hour).padStart(2, "0")}:${minute}`, label: `${hour % 12 || 12}:${minute} ${hour < 12 ? "AM" : "PM"}` };
});
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const taskClasses = ["Area Clean", "Clean-patient rooms", "Clean-staff areas", "Deliver Food", "Discharge Clean", "Discharge Clean patient"];
interface NewTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (draft: NewTaskDraft) => void;
}

export function NewTaskDialog({ open, onOpenChange, onCreate }: NewTaskDialogProps) {
  const [taskClass, setTaskClass] = useState("Clean-patient rooms");
  const [selectedLocations, setLocations] = useState(locations.slice(0, 2));
  const [locationOpen, setLocationOpen] = useState(false);
  const [duration, setDuration] = useState("10");
  const [time, setTime] = useState("10:45");
  const [repeatTimes, setRepeatTimes] = useState("1");
  const [frequency, setFrequency] = useState<"specific" | "all">("specific");
  const [selectedDays, setSelectedDays] = useState(["Sunday", "Saturday"]);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const toggleLocation = (location: string) => setLocations(previous => previous.includes(location) ? previous.filter(value => value !== location) : [...previous, location]);
  const toggleDay = (day: string) => setSelectedDays(previous => previous.includes(day) ? previous.filter(value => value !== day) : [...previous, day]);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedLocations.length) { setError("Select at least one location."); return; }
    if (!Number.isInteger(Number(duration)) || Number(duration) < 1 || !Number.isInteger(Number(repeatTimes)) || Number(repeatTimes) < 1) { setError("Duration and repeat count must be positive whole numbers."); return; }
    if (frequency === "specific" && !selectedDays.length) { setError("Select at least one day."); return; }
    onCreate({taskClass, locations: selectedLocations, durationMinutes: Number(duration), specificTime: time, repeatTimes: Number(repeatTimes), frequency, days: frequency === "all" ? days : selectedDays, notes: notes.trim()});
    setError("");
    onOpenChange(false);
  };
  return <Dialog open={open} onOpenChange={value => { setError(""); setLocationOpen(false); onOpenChange(value); }}>
    <DialogContent className="new-task-dialog new-task-functional">
      <form onSubmit={submit}>
        <div className="new-task-form-scroll">
          <DialogTitle className="new-task-heading">Create New Task</DialogTitle>
          <DialogDescription className="sr-only">Create requests for assignment to an operator.</DialogDescription>
          <div className="new-task-field">
            <label id="task-class-label">Task Class <span>*</span></label>
            <Select value={taskClass} onValueChange={setTaskClass}>
              <SelectTrigger className="new-task-control" aria-labelledby="task-class-label"><SelectValue /></SelectTrigger>
              <SelectContent position="popper" className="duty-dialog-select-menu">{taskClasses.map(value => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="new-task-field">
            <label id="task-locations-label">Select Locations <span>*</span></label>
            <Popover open={locationOpen} onOpenChange={setLocationOpen}>
              <PopoverTrigger asChild><button type="button" className="new-task-control new-task-location-trigger" aria-labelledby="task-locations-label"><span>{selectedLocations.length ? selectedLocations.join(", ") : "Select locations"}</span><ChevronDown size={16} aria-hidden="true" /></button></PopoverTrigger>
              <PopoverContent className="new-task-location-menu" align="start" sideOffset={4}>
                <div role="group" aria-label="Available locations">{locations.map(location => <label className="new-task-day" key={location}><input type="checkbox" checked={selectedLocations.includes(location)} onChange={() => toggleLocation(location)} /><span>{location}</span></label>)}</div>
              </PopoverContent>
            </Popover>
            <p className="new-task-help">Selecting multiple locations will create one task per location.</p>
          </div>
          <div className="new-task-field new-task-short-field"><label htmlFor="task-duration">Standard Duration (min) <span>*</span></label><input className="new-task-control" id="task-duration" type="number" min="1" step="1" required value={duration} onChange={event => setDuration(event.target.value)} /></div>
          <div className="new-task-field new-task-short-field">
            <label id="task-time-label">Specific Time</label>
            <Select value={time || "none"} onValueChange={value => setTime(value === "none" ? "" : value)}>
              <SelectTrigger className="new-task-control" aria-labelledby="task-time-label"><SelectValue /></SelectTrigger>
              <SelectContent position="popper" className="duty-dialog-select-menu">
                <SelectItem value="none">No specific time</SelectItem>
                {timeOptions.map(option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="new-task-repeat"><label htmlFor="task-repeat">Repeat</label><input className="new-task-control" id="task-repeat" aria-label="Times per shift" type="number" min="1" step="1" required value={repeatTimes} onChange={event => setRepeatTimes(event.target.value)} /><span>times per shift <span aria-hidden="true">*</span></span></div>
          <div className="new-task-field"><label id="task-frequency-label">Frequency <span>*</span></label>
            <Select value={frequency} onValueChange={value => setFrequency(value as "specific" | "all")}><SelectTrigger className="new-task-control" aria-labelledby="task-frequency-label"><SelectValue /></SelectTrigger><SelectContent position="popper" className="duty-dialog-select-menu"><SelectItem value="specific">Specific Days</SelectItem><SelectItem value="all">All Days</SelectItem></SelectContent></Select>
          </div>
          {frequency === "specific" && <div className="new-task-days" role="group" aria-label="Repeat on days">{days.map(day => <label className="new-task-day" key={day}><input type="checkbox" checked={selectedDays.includes(day)} onChange={() => toggleDay(day)} /><span>{day}</span></label>)}</div>}
          <div className="new-task-field"><label htmlFor="task-notes">Notes</label><textarea className="new-task-control" id="task-notes" rows={3} value={notes} onChange={event => setNotes(event.target.value)} /></div>
          {error && <p className="new-task-error" role="alert">{error}</p>}
        </div>
        <footer className="new-task-form-footer"><button className="secondary-action" type="button" onClick={() => onOpenChange(false)}>Cancel</button><button className="primary-action" type="submit">Create New Task</button></footer>
        <button type="button" aria-label="Close new task" className="new-task-close icon-action" onClick={() => onOpenChange(false)}><X size={16} aria-hidden="true" /></button>
      </form>
    </DialogContent>
  </Dialog>;
}
