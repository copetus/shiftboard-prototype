import { ClipboardList, ClipboardCheck, Utensils, BellRing, Monitor, Settings, ShieldCheck, MessageSquare, ChartNoAxesCombined } from "lucide-react";

const items = [
  { label: "Tasks", icon: ClipboardList },
  { label: "Assessments", icon: ClipboardCheck },
  { label: "Meal ordering", icon: Utensils },
  { label: "Tray tracking", icon: BellRing },
  { label: "KDS", icon: Monitor },
  { label: "Settings", icon: Settings },
  { label: "Admin", icon: ShieldCheck },
  { label: "Messages", icon: MessageSquare },
  { label: "Analytics", icon: ChartNoAxesCombined },
];

export function SideNavigation() {
  return <nav className="side-navigation" aria-label="Application navigation">
    <div className="nav-primary">
      {items.slice(0, 6).map(({ label, icon: Icon }, index) => index === 0 ? (
        <a key={label} href="#main-content" className="nav-item is-active" aria-current="page">
          <Icon size={21} strokeWidth={2} aria-hidden="true" /><span>{label}</span>
        </a>
      ) : (
        <button key={label} className="nav-item" disabled title={`${label} is not included in this prototype`}>
          <Icon size={21} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span>
        </button>
      ))}
    </div>
    <div className="nav-secondary">
      {items.slice(6).map(({ label, icon: Icon }) => (
        <button key={label} className="nav-item" disabled title={`${label} is not included in this prototype`}>
          <Icon size={21} strokeWidth={1.5} aria-hidden="true" /><span>{label}</span>
        </button>
      ))}
    </div>
  </nav>;
}
