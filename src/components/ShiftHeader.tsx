import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-rh1g3fm2ym";
import { DateSelectionModal } from "./DateSelectionModal";
import { ShiftSelectionModal } from "./ShiftSelectionModal";
import { X } from "lucide-react";

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
  
  // Overflow detection
  const [showSimplified, setShowSimplified] = useState(false);
  const shiftsContainerRef = useRef<HTMLDivElement>(null);
  const shiftsContentRef = useRef<HTMLDivElement>(null);

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

  // Check for overflow
  useEffect(() => {
    const checkOverflow = () => {
      if (!shiftsContainerRef.current || !shiftsContentRef.current) return;
      
      const containerWidth = shiftsContainerRef.current.offsetWidth;
      const contentWidth = shiftsContentRef.current.scrollWidth;
      
      setShowSimplified(contentWidth > containerWidth);
    };

    checkOverflow();
    
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (shiftsContainerRef.current) {
      resizeObserver.observe(shiftsContainerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [currentShifts]);

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
      <div className="bg-white box-border flex items-start justify-between pb-[16px] pt-[24px] px-[24px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] fixed top-[76px] left-[91px] right-0 z-40">
        {/* Left Side */}
        <div className="flex flex-col gap-[16px] items-start justify-center min-w-0 flex-1 mr-4">
          {/* Title */}
          <div className="flex gap-[12px] items-center">
            <p className="font-['DM_Sans'] font-bold text-[#282e38] text-[32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              Shift Board
            </p>
          </div>

          {/* Date and Shifts */}
          <div className="flex gap-[8px] items-center min-w-0 w-full">
            {/* Date Picker */}
            <button
              onClick={handleOpenDateModal}
              className="bg-white rounded-[6px] border border-[#7e8b9d] hover:bg-slate-50 transition-colors cursor-pointer shrink-0 h-[40px]"
            >
              <div className="box-border flex gap-[8px] items-center px-[12px]">
                <div className="size-[24px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p6ea8c00} fill="black" />
                  </svg>
                </div>
                <p className="font-['DM_Sans'] font-normal text-[#282e38] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {getDateLabel(currentDate)}
                </p>
              </div>
            </button>

            {/* Shift Tabs Container */}
            <div ref={shiftsContainerRef} className="flex gap-[8px] items-start min-w-0 flex-1 relative">
              {/* Simplified representation when overflow */}
              <div className={`flex gap-[8px] ${showSimplified ? '' : 'hidden'}`}>
                <button
                  onClick={handleOpenShiftModal}
                  className="bg-[#f1f7ff] box-border flex gap-[8px] items-center justify-end px-[8px] rounded-[6px] border border-[#7993c6] hover:bg-[#e3efff] transition-colors cursor-pointer shrink-0 h-[40px]"
                >
                  <div className="bg-[#003396] box-border flex gap-[4px] items-center justify-center px-[6px] py-[4px] rounded-[4px]">
                    <p className="font-['DM_Sans'] font-semibold text-white text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      {currentShifts.length}
                    </p>
                  </div>
                  <p className="font-['DM_Sans'] font-semibold text-[#3059a9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Shifts
                  </p>
                </button>
                <button
                  onClick={handleOpenShiftModal}
                  className="bg-[#f1f7ff] box-border flex gap-[4px] items-center justify-end px-[12px] rounded-[6px] border border-[#7993c6] hover:bg-[#e3efff] transition-colors cursor-pointer shrink-0 h-[40px]"
                >
                  <div className="size-[20px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p121ff280} fill="#1846A0" />
                    </svg>
                  </div>
                </button>
              </div>
              
              {/* Full shift tabs when no overflow - always render for measurement */}
              <div ref={shiftsContentRef} className={`flex gap-[8px] items-start ${showSimplified ? 'invisible absolute' : ''}`}>
                {currentShifts.map((shiftId) => (
                  <div key={shiftId} className="bg-[#f1f7ff] box-border flex gap-[8px] items-center justify-end px-[12px] rounded-[6px] border border-[#7993c6] shrink-0 group h-[40px]">
                    <p className="font-['DM_Sans'] font-semibold text-[#3059a9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      {getShiftLabel(shiftId)}
                    </p>
                    {currentShifts.length > 1 && (
                      <button
                        onClick={(e) => handleShiftRemoveClick(e, shiftId)}
                        className="flex items-center justify-center hover:bg-[#d0e1f9] rounded transition-colors p-0.5"
                        aria-label={`Remove ${getShiftLabel(shiftId)}`}
                      >
                        <X className="w-4 h-4 text-[#3059a9]" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={handleOpenShiftModal}
                  className="bg-[#f1f7ff] box-border flex gap-[4px] items-center justify-end px-[12px] rounded-[6px] border border-[#7993c6] hover:bg-[#e3efff] transition-colors cursor-pointer shrink-0 h-[40px]"
                >
                  <div className="size-[20px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p121ff280} fill="#1846A0" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - New Task Button (Always Visible) */}
        <div className="flex gap-[16px] items-center shrink-0">
          <button
            onClick={onNewTask}
            className="bg-[#003396] box-border flex gap-[8px] h-[44px] items-center justify-center px-[16px] py-[16px] rounded-[6px] hover:bg-[#002975] transition-colors whitespace-nowrap"
          >
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p21cef280} fill="white" />
              </svg>
            </div>
            <p className="font-['DM_Sans'] font-bold text-white text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              New Task
            </p>
          </button>
        </div>
      </div>

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
