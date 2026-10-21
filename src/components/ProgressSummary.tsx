import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { useState } from "react";
import { Badge } from "./ui/badge";

export function ProgressSummary() {
  const [expanded, setExpanded] = useState(false);
  const completed = 20;
  const target = 50;

  return (
    <div className="bg-amber-50 border border-amber-200 p-4 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-amber-900">
              Task completion below target. Reassign or adjust as needed.
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Progress</span>
              <span className="text-slate-900">
                {completed}% completed vs. {target}% target
              </span>
            </div>
            <Progress value={completed} className="h-2" />
          </div>

          {expanded && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-amber-200">
              <div>
                <div className="text-sm text-slate-600">On Track</div>
                <div className="text-2xl">12</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Behind</div>
                <div className="text-2xl text-red-600">5</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Ahead</div>
                <div className="text-2xl text-green-600">3</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Inactive</div>
                <div className="text-2xl text-slate-400">2</div>
              </div>
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="shrink-0"
        >
          {expanded ? (
            <>
              <ChevronUp size={18} className="mr-1" />
              <span className="hidden md:inline">Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown size={18} className="mr-1" />
              <span className="hidden md:inline">Show More</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
