function NameValuePair() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        20
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Behind (13%)
      </p>
    </div>
  );
}

export default function DataPoint() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative size-full" data-name="Data Point">
      <div className="absolute bg-[#f7f8f9] inset-[-4px_-8px] rounded-[8px]" data-name="Hover Background">
        <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="bg-[#f27975] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair />
    </div>
  );
}