import { X, ArrowLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";

interface ShiftOption {
  id: string;
  label: string;
  time: string;
}

interface ShiftSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedShifts: string[];
  onShiftToggle: (shiftId: string) => void;
  selectedDateLabel: string;
  onBack: () => void;
  onApply: () => void;
}

const shiftOptions: ShiftOption[] = [
  { id: "shift1", label: "Shift 1", time: "6:45 AM – 3:15 PM" },
  { id: "shift2", label: "Shift 2", time: "3:15 PM – 10:15 PM" },
  { id: "shift3", label: "Shift 3", time: "10:15 PM – 5:15 AM" },
];

export function ShiftSelectionModal({ open, onOpenChange, selectedShifts, onShiftToggle, selectedDateLabel, onBack, onApply }: ShiftSelectionModalProps) {
  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="selection-dialog">
      <div className="selection-dialog-body">
        <DialogTitle className="selection-dialog-title">Select Shift</DialogTitle>
        <DialogDescription className="sr-only">Choose one or more shifts to display on the shift board for {selectedDateLabel}</DialogDescription>
        <button type="button" className="icon-action selection-dialog-close" aria-label="Close shift selection" onClick={() => onOpenChange(false)}><X size={16} aria-hidden="true" /></button>
        <button type="button" className="selection-date-back" onClick={onBack}><ArrowLeft size={16} aria-hidden="true" /><span>{selectedDateLabel}</span></button>
        <div className="selection-options" role="group" aria-label="Shifts">
          {shiftOptions.map(option => <label className="selection-option" key={option.id}>
            <input type="checkbox" checked={selectedShifts.includes(option.id)} onChange={() => onShiftToggle(option.id)} />
            <span>{option.label} <span className="selection-option-detail">({option.time})</span></span>
          </label>)}
        </div>
      </div>
      <footer className="selection-dialog-actions">
        <button type="button" className="secondary-action" onClick={() => onOpenChange(false)}>Cancel</button>
        <button type="button" className="primary-action" onClick={onApply} disabled={selectedShifts.length === 0}>Apply</button>
      </footer>
    </DialogContent>
  </Dialog>;
}
