import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface DateOption {
  id: string;
  label: string;
  date: string;
}

interface DateSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: string;
  onDateSelect: (date: string) => void;
  onContinueToShift: () => void;
}

const dateOptions: DateOption[] = [
  { id: "yesterday", label: "Yesterday (Oct 13)", date: "2024-10-13" },
  { id: "today", label: "Today (Oct 14)", date: "2024-10-14" },
  { id: "tomorrow", label: "Tomorrow (Oct 15)", date: "2024-10-15" },
  { id: "day-after", label: "Day after tomorrow (Oct 16)", date: "2024-10-16" },
];

export function DateSelectionModal({ open, onOpenChange, selectedDate, onDateSelect, onContinueToShift }: DateSelectionModalProps) {
  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="selection-dialog">
      <div className="selection-dialog-body">
        <DialogTitle className="selection-dialog-title">Select Date</DialogTitle>
        <DialogDescription className="sr-only">Choose a date for viewing shift board information</DialogDescription>
        <button type="button" className="icon-action selection-dialog-close" aria-label="Close date selection" onClick={() => onOpenChange(false)}><X size={16} aria-hidden="true" /></button>
        <div className="selection-options" role="group" aria-label="Date">
          {dateOptions.map(option => <label className="selection-option" key={option.id}>
            <input type="radio" name="shift-board-date" checked={selectedDate === option.date} onChange={() => onDateSelect(option.date)} />
            <span>{option.label}</span>
          </label>)}
        </div>
      </div>
      <footer className="selection-dialog-actions">
        <button type="button" className="secondary-action" onClick={() => onOpenChange(false)}>Cancel</button>
        <button type="button" className="primary-action" onClick={onContinueToShift}>Select Shift</button>
      </footer>
    </DialogContent>
  </Dialog>;
}
