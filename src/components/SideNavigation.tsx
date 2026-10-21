import svgPaths from "../imports/svg-rh1g3fm2ym";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <div
      className={`box-border flex flex-col gap-[4px] items-center justify-center px-0 py-[6px] w-full ${
        active ? "bg-[#f1f7ff] border-[#0c76d8] border-[0px_0px_0px_2px]" : "bg-white"
      }`}
    >
      {icon}
      <p className="font-['DM_Sans'] font-normal text-[#282e38] text-[14px] text-center w-[72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {label}
      </p>
    </div>
  );
}

export function SideNavigation() {
  return (
    <div className="bg-white box-border flex flex-col items-start justify-between pb-[8px] pt-0 px-0 w-[91px] h-[calc(100vh-76px)] border-r border-[#d9dbde] sticky top-[76px]">
      {/* Top Navigation */}
      <div className="flex flex-col gap-[8px] items-start w-full">
        <NavItem
          active
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p29959b80} fill="#282E38" />
              </svg>
            </div>
          }
          label="Tasks"
        />
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 22 20">
                <path d={svgPaths.p1339fe80} fill="#282E38" />
                <path d={svgPaths.p81ab180} fill="#282E38" />
              </svg>
            </div>
          }
          label="Assess-ments"
        />
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p24cb6880} fill="#282E38" />
                <path d={svgPaths.p26a85e00} fill="#282E38" />
                <path d={svgPaths.p23ce0080} fill="#282E38" />
                <path d={svgPaths.p33fc8bf0} fill="#282E38" />
              </svg>
            </div>
          }
          label="Meal Ordering"
        />
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1ef9c900} fill="#282E38" />
                <path d={svgPaths.p3bdeda00} fill="#282E38" />
                <path d={svgPaths.p2ae29d00} fill="#282E38" />
              </svg>
            </div>
          }
          label="Tray Tracking"
        />
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p307c9c40} fill="#282E38" />
                <path d={svgPaths.pdb36100} fill="#282E38" />
                <path d={svgPaths.p1c7dd600} fill="#282E38" />
                <path d={svgPaths.p13a2a280} fill="#282E38" />
                <path d={svgPaths.p25d4e580} fill="#282E38" />
                <path d={svgPaths.p24c60180} fill="#282E38" />
                <path d={svgPaths.p211aad70} fill="#282E38" />
                <path d={svgPaths.p3d149f0} fill="#282E38" />
                <path d={svgPaths.p20c703f0} fill="#282E38" />
              </svg>
            </div>
          }
          label="KDS"
        />
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1755f080} fill="#282E38" />
              </svg>
            </div>
          }
          label="Settings"
        />
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-[8px] items-start w-full">
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3008d400} fill="#282E38" />
                <path d={svgPaths.p1a359d00} fill="#282E38" />
                <path d={svgPaths.p12885980} fill="#282E38" />
              </svg>
            </div>
          }
          label="Admin"
        />
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p2977fa80} fill="#282E38" />
                <path d={svgPaths.p350f4b80} fill="#282E38" />
                <path d={svgPaths.pdaa7400} fill="#282E38" />
              </svg>
            </div>
          }
          label="Message"
        />
        <NavItem
          icon={
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 25 24">
                <path d={svgPaths.p217a2480} stroke="#282E38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
                <path d="M18 5H24V13" stroke="#282E38" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
              </svg>
            </div>
          }
          label="Analytics"
        />
      </div>
    </div>
  );
}
