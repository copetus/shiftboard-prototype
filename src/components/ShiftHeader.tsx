import { useState, useEffect } from "react";
import { DateSelectionModal } from "./DateSelectionModal";
import { ShiftSelectionModal } from "./ShiftSelectionModal";
import { X, CalendarDays, Plus } from "lucide-react";

interface ShiftHeaderProps {
  onNewTask: () => void;
  onDateShiftChange?: (date: string, shifts: string[]) => void;
  onShiftRemove?: (shiftId: string) => void;
  currentDate: string;
  currentShifts: string[];
}

export function ShiftHeader({ onNewTask, onDateShiftChange, onShiftRemove, currentDate, currentShifts }: ShiftHeaderProps) {
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [shiftModalOpen, setShiftModalOpen] = useState(false);
  
  // Temporary state (used in modals before Apply is clicked)
  const [tempDate, setTempDate] = useState(currentDate);
  const [tempShifts, setTempShifts] = useState(currentShifts);
  
  // Update temp state when current state changes externally
  useEffect(() => {
    setTempDate(currentDate);
    setTempShifts(currentShifts);
  }, [currentDate, currentShifts]);

  const getDateLabel = (date: string) => {
    const dateMap: Record<string, string> = {
      "2024-10-13": "Yesterday (Oct 13)",
      "2024-10-14": "Today (Oct 14)",
      "2024-10-15": "Tomorrow (Oct 15)",
      "2024-10-16": "Day after tomorrow (Oct 16)",
    };
    return dateMap[date] || "Today (Oct 14)";
  };

  const getShiftLabel = (shiftId: string) => {
    const shiftMap: Record<string, string> = {
      shift1: "Shift 1 (6:45 AM – 3:15 PM)",
      shift2: "Shift 2 (3:15 PM – 10:15 PM)",
      shift3: "Shift 3 (10:15 PM – 5:15 AM)",
    };
    return shiftMap[shiftId];
  };

  const handleOpenDateModal = () => {
    setTempDate(currentDate);
    setDateModalOpen(true);
  };

  const handleOpenShiftModal = () => {
    setTempShifts([...currentShifts]);
    setShiftModalOpen(true);
  };

  const handleShiftRemoveClick = (e: React.MouseEvent, shiftId: string) => {
    e.stopPropagation();
    if (onShiftRemove) {
      onShiftRemove(shiftId);
    }
  };

  const handleContinueToShift = () => {
    setDateModalOpen(false);
    setShiftModalOpen(true);
  };

  const handleBackToDate = () => {
    setShiftModalOpen(false);
    setDateModalOpen(true);
  };

  const handleShiftToggle = (shiftId: string) => {
    setTempShifts((prev) => {
      if (prev.includes(shiftId)) {
        // Don't allow deselecting if it's the only one selected
        if (prev.length === 1) return prev;
        return prev.filter((id) => id !== shiftId);
      }
      return [...prev, shiftId];
    });
  };

  const handleApplyShifts = () => {
    setShiftModalOpen(false);
    
    // Notify parent component of changes
    if (onDateShiftChange) {
      onDateShiftChange(tempDate, tempShifts);
    }
  };

  const handleCancelDate = () => {
    // Reset temp state
    setTempDate(currentDate);
    setDateModalOpen(false);
  };

  const handleCancelShift = () => {
    // Reset temp state
    setTempShifts([...currentShifts]);
    setShiftModalOpen(false);
  };

  return (
    <>
      <header className="shift-header">
        <div className="page-heading">
          <div><h1>Shift Board</h1></div>
          <button onClick={onNewTask} className="primary-action"><Plus size={18} aria-hidden="true" />New Task</button>
        </div>
        <div className="shift-controls">
          <button onClick={handleOpenDateModal} className="secondary-action"><CalendarDays size={18} aria-hidden="true" />{getDateLabel(currentDate)}</button>
          <div className="shift-chips" aria-label="Selected shifts">
            {currentShifts.map(shiftId => <div key={shiftId} className="shift-chip">
              <span>{getShiftLabel(shiftId)}</span>
              {currentShifts.length > 1 && <button onClick={e => handleShiftRemoveClick(e, shiftId)} className="icon-action" aria-label={`Remove ${getShiftLabel(shiftId)}`}><X size={16} aria-hidden="true" /></button>}
            </div>)}
            <button onClick={handleOpenShiftModal} className="shift-chip add-shift-button" aria-label="Add shift" title="Add shift"><Plus size={18} aria-hidden="true" /></button>
          </div>
        </div>
      </header>

      {/* Modals */}
      <DateSelectionModal
        open={dateModalOpen}
        onOpenChange={(open) => {
          if (!open) handleCancelDate();
        }}
        selectedDate={tempDate}
        onDateSelect={setTempDate}
        onContinueToShift={handleContinueToShift}
      />

      <ShiftSelectionModal
        open={shiftModalOpen}
        onOpenChange={(open) => {
          if (!open) handleCancelShift();
        }}
        selectedShifts={tempShifts}
        onShiftToggle={handleShiftToggle}
        selectedDateLabel={getDateLabel(tempDate)}
        onBack={handleBackToDate}
        onApply={handleApplyShifts}
      />
    </>
  );
}
