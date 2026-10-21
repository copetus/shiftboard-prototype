import { CalendarIcon, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

interface DateAndShiftSelectorProps {
  onShiftChange: (shift: string) => void;
  onDateChange: (date: Date | undefined) => void;
}

export function DateAndShiftSelector({ onShiftChange, onDateChange }: DateAndShiftSelectorProps) {
  const [date, setDate] = useState<Date>(new Date());
  const [activeShift, setActiveShift] = useState("shift1");

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate || new Date());
    onDateChange(newDate);
  };

  const handleShiftChange = (shift: string) => {
    setActiveShift(shift);
    onShiftChange(shift);
  };

  return (
    <div className="bg-white border-b p-4 md:p-6 space-y-4">
      {/* Date Picker */}
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full md:w-[280px] justify-start text-left"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Shift Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto">
        <Tabs value={activeShift} onValueChange={handleShiftChange} className="flex-1">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="shift1" className="flex-1 md:flex-none">
              Shift 1 (6:45 AM – 3:15 PM)
            </TabsTrigger>
            <TabsTrigger value="shift2" className="flex-1 md:flex-none">
              Shift 2 (3:15 PM – 10:15 PM)
            </TabsTrigger>
            <TabsTrigger value="shift3" className="flex-1 md:flex-none">
              Shift 3 (10:15 PM – 6:45 AM)
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button variant="outline" size="icon" className="shrink-0">
          <Plus size={18} />
        </Button>
      </div>
    </div>
  );
}
