import { 
  ClipboardList, 
  FileCheck, 
  UtensilsCrossed, 
  PackageSearch, 
  MonitorPlay, 
  Settings, 
  UserCog, 
  MessageSquare, 
  BarChart3,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const menuItems = [
  { icon: ClipboardList, label: "Tasks", active: true },
  { icon: FileCheck, label: "Assessments" },
  { icon: UtensilsCrossed, label: "Meal Ordering" },
  { icon: PackageSearch, label: "Tray Tracking" },
  { icon: MonitorPlay, label: "KDS" },
  { icon: Settings, label: "Settings" },
  { icon: UserCog, label: "Admin" },
  { icon: MessageSquare, label: "Message" },
  { icon: BarChart3, label: "Analytics" },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-slate-900 text-white h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-xl">ShiftBoard</h2>
      </div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
              item.active
                ? "bg-blue-600 text-white border-l-4 border-blue-400"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export function TabletSidebar() {
  return (
    <aside className="hidden md:flex lg:hidden flex-col w-20 bg-slate-900 text-white h-screen sticky top-0">
      <div className="p-4 flex justify-center">
        <ClipboardList size={24} />
      </div>
      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center justify-center py-4 transition-colors ${
              item.active
                ? "bg-blue-600 text-white border-l-4 border-blue-400"
                : "text-slate-300 hover:bg-slate-800"
            }`}
            title={item.label}
          >
            <item.icon size={20} />
          </button>
        ))}
      </nav>
    </aside>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 bg-white shadow-md">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-slate-900 text-white border-0">
          <div className="p-6">
            <h2 className="text-xl">ShiftBoard</h2>
          </div>
          <nav className="flex-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  item.active
                    ? "bg-blue-600 text-white border-l-4 border-blue-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
                onClick={() => setOpen(false)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
