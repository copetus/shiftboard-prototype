import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { X } from "lucide-react";
import svgPaths from "../imports/svg-4lr7at9zxn";

interface NewTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewTaskDialog({ open, onOpenChange }: NewTaskDialogProps) {
  const [taskClass, setTaskClass] = useState("Clean-patient rooms");
  const [taskClassDropdownOpen, setTaskClassDropdownOpen] = useState(false);
  const [location, setLocation] = useState("Pavilion\\2\\P2-202-A, Pavilion\\5\\P5-502-B");
  const [duration, setDuration] = useState("10");
  const [time, setTime] = useState("10:45 AM");
  const [repeatEnabled, setRepeatEnabled] = useState(false);
  const [repeatTimes, setRepeatTimes] = useState("1");
  const [frequency, setFrequency] = useState("Specific Days");
  const [notes, setNotes] = useState("This is a note the user wrote.");
  
  const [selectedDays, setSelectedDays] = useState({
    sunday: true,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: true,
  });

  const taskClassOptions = [
    "Area Clean",
    "Clean-patient rooms",
    "Clean-staff areas",
    "Deliver Food",
    "Discharge Clean",
    "Discharge Clean patient",
  ];

  const handleSubmit = () => {
    // Handle task creation
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const toggleDay = (day: keyof typeof selectedDays) => {
    setSelectedDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const handleTaskClassSelect = (option: string) => {
    setTaskClass(option);
    setTaskClassDropdownOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="new-task-dialog p-0 gap-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Create New Task</DialogTitle>
        <DialogDescription className="sr-only">Configure a task for this prototype shift.</DialogDescription>
          <div className="bg-white box-border flex flex-col isolate overflow-clip rounded-[6px] shadow-[0px_2px_12px_0px_rgba(41,46,55,0.1)] max-h-[calc(100vh-4rem)]">
            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="box-border flex flex-col gap-[32px] px-[24px] py-[24px]">
                <p className="new-task-heading font-['DM_Sans'] font-bold text-[#282e38] text-[24px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Create New Task
                </p>

                {/* Task Class */}
                <div className="flex flex-col gap-[8px] w-full relative">
                  <p className="font-['DM_Sans'] font-bold text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Task Class<span className="text-[#d6302d]">*</span>
                  </p>
                  <button
                    type="button"
                    aria-label="Task class"
                    aria-expanded={taskClassDropdownOpen}
                    onClick={() => setTaskClassDropdownOpen(!taskClassDropdownOpen)}
                    className="bg-white h-[44px] relative rounded-[6px] w-full border border-[#7e8b9d] hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center h-full">
                      <div className="box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] w-full">
                        <p className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px] text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
                          {taskClass}
                        </p>
                        <div className="size-[24px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path d={svgPaths.p18b66300} fill="#282E38" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                  {taskClassDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setTaskClassDropdownOpen(false)}
                      />
                      <div className="absolute top-full left-0 right-0 mt-[4px] z-50 bg-white rounded-[6px] shadow-[0px_2px_12px_0px_#dcdcdd] overflow-hidden">
                        {taskClassOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleTaskClassSelect(option)}
                            className={`w-full text-left ${
                              option === taskClass
                                ? 'bg-[#f1f7ff] border-l-[3px] border-[#0c76d8]'
                                : 'bg-white hover:bg-slate-50'
                            }`}
                          >
                            <div className="box-border flex gap-[10px] items-center px-[16px] py-[12px]">
                              <p className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                                {option}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Select Location */}
                <div className="flex flex-col gap-[8px] w-full">
                  <div className="flex flex-col gap-[8px] w-full">
                    <p className="font-['DM_Sans'] font-bold text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Select Location<span className="text-[#d6302d]">*</span>
                    </p>
                    <div className="bg-white h-[44px] relative rounded-[6px] w-full border border-[#7e8b9d]">
                      <div className="flex items-center h-full">
                        <div className="box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] w-full">
                          <p className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {location}
                          </p>
                          <div className="size-[24px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p18b66300} fill="#282E38" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="new-task-help font-['DM_Sans'] font-normal text-[#4e535b] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Selecting multiple locations will create one task per location.
                  </p>
                </div>

                {/* Standard Duration */}
                <div className="flex flex-col gap-[8px] w-[231px]">
                  <p className="font-['DM_Sans'] font-bold text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Standard Duration (min)<span className="text-[#d6302d]">*</span>
                  </p>
                  <div className="bg-white h-[44px] relative rounded-[6px] w-full border border-[#7e8b9d]">
                    <div className="flex items-center h-full">
                      <div className="box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] w-full">
                        <input
                          type="text"
                          aria-label="Standard duration in minutes"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px] bg-transparent border-none outline-none"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specific Time */}
                <div className="flex flex-col gap-[8px] w-[231px]">
                  <p className="font-['DM_Sans'] font-bold text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Specific Time
                  </p>
                  <div className="bg-white h-[44px] relative rounded-[6px] w-full border border-[#7e8b9d]">
                    <div className="flex items-center h-full">
                      <div className="box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] w-full">
                        <input
                          type="text"
                          aria-label="Specific time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px] bg-transparent border-none outline-none"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                        />
                        <div className="size-[24px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path d={svgPaths.p30e64772} fill="#282E38" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Repeat Details */}
                <div className="flex flex-col gap-[24px] w-full">
                  {/* Repeat */}
                  <div className="flex gap-[10px] items-center">
                    <div className="flex gap-[8px] items-center">
                      <div className="font-['DM_Sans'] font-bold text-[16px] text-slate-500 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Repeat
                      </div>
                    </div>
                    <div className="bg-white box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] rounded-[6px] w-[85px] border border-[#7e8b9d]">
                      <input
                        type="text"
                        aria-label="Times per shift"
                          value={repeatTimes}
                        onChange={(e) => setRepeatTimes(e.target.value)}
                        className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px] bg-transparent border-none outline-none"
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      />
                    </div>
                    <div className="font-['DM_Sans'] font-bold text-[16px] text-center text-slate-500 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      times per shift<span className="text-[#d6302d]">*</span>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="flex flex-col gap-[8px] w-full">
                    <p className="font-['DM_Sans'] font-bold text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Frequency<span className="text-[#d6302d]">*</span>
                    </p>
                    <div className="bg-white h-[44px] relative rounded-[6px] w-full border border-[#7e8b9d]">
                      <div className="flex items-center h-full">
                        <div className="box-border flex gap-[8px] h-[44px] items-center pl-[16px] pr-[8px] py-[8px] w-full">
                          <p className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            {frequency}
                          </p>
                          <div className="size-[24px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                              <path d={svgPaths.p18b66300} fill="#282E38" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day Checkboxes */}
                  <div className="new-task-days" role="group" aria-label="Repeat on days">
                    {(Object.keys(selectedDays) as (keyof typeof selectedDays)[]).map(day => (
                      <label className="new-task-day" key={day}>
                        <input type="checkbox" checked={selectedDays[day]} onChange={() => toggleDay(day)} />
                        <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-[8px] w-full">
                  <p className="font-['DM_Sans'] font-bold text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Notes
                  </p>
                  <div className="bg-white relative rounded-[6px] w-full border border-[#7e8b9d]">
                    <div className="flex items-start h-full">
                      <div className="box-border flex gap-[8px] items-center pl-[16px] pr-[8px] py-[8px] w-full">
                        <textarea
                          aria-label="Notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="flex-1 font-['DM_Sans'] font-normal text-[#282e38] text-[18px] bg-transparent border-none outline-none resize-none min-h-[60px]"
                          style={{ fontVariationSettings: "'opsz' 14" }}
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative shrink-0 w-full border-t border-[#cccfd4]">
              <div className="box-border flex flex-wrap gap-[20px] pt-[24px] px-[24px] pb-[24px] w-full">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 bg-white h-[44px] min-w-[190px] rounded-[6px] border border-[#003396] hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="box-border flex gap-[8px] h-[44px] items-center justify-center px-[16px]">
                      <p className="font-['DM_Sans'] font-bold text-[#003396] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Cancel
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 bg-[#003396] h-[44px] min-w-[190px] rounded-[6px] hover:bg-[#002975] transition-colors"
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="box-border flex gap-[8px] h-[44px] items-center justify-center px-[16px]">
                      <p className="font-['DM_Sans'] font-bold text-white text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Create New Task
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleCancel}
              aria-label="Close new task"
              className="new-task-close icon-action"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
      </DialogContent>
    </Dialog>
  );
}
