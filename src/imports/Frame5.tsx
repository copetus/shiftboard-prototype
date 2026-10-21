function Bar() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        0%
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function DataPoint() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair />
    </div>
  );
}

function NameValuePair1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Target (50%)
      </p>
    </div>
  );
}

function DataPoint1() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-1/2 top-0 translate-x-[-50%]" data-name="Data Point">
      <NameValuePair1 />
    </div>
  );
}

function DataPoints() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint />
      <DataPoint1 />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar />
      <DataPoints />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-0 w-[847px]" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        No task activity detected. Confirm task assignments and unblock as needed.
      </p>
      <Bottom />
    </div>
  );
}

function Bar1() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[92.33%] rounded-[4px] top-0" data-name="Fill" />
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        20%
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function DataPoint2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair2 />
    </div>
  );
}

function NameValuePair3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Target (50%)
      </p>
    </div>
  );
}

function DataPoint3() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[calc(50%+7px)] top-0 translate-x-[-50%]" data-name="Data Point">
      <NameValuePair3 />
    </div>
  );
}

function DataPoints1() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint2 />
      <DataPoint3 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar1 />
      <DataPoints1 />
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[124px] w-[847px]" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Task completion below target. Reassign or adjust as needed.
      </p>
      <Bottom1 />
    </div>
  );
}

function Bar2() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[49.23%] rounded-[4px] top-0" data-name="Fill" />
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        50%
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function DataPoint4() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair4 />
    </div>
  );
}

function NameValuePair5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Target (50%)
      </p>
    </div>
  );
}

function DataPoint5() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[calc(50%+14px)] top-0 translate-x-[-50%]" data-name="Data Point">
      <NameValuePair5 />
    </div>
  );
}

function DataPoints2() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint4 />
      <DataPoint5 />
    </div>
  );
}

function Bottom2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar2 />
      <DataPoints2 />
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[248px] w-[847px]" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Task completion is on target. Maintain current pace.
      </p>
      <Bottom2 />
    </div>
  );
}

function Bar3() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[25.03%] rounded-[4px] top-0" data-name="Fill" />
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        75%
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function DataPoint6() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair6 />
    </div>
  );
}

function NameValuePair7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Target (50%)
      </p>
    </div>
  );
}

function DataPoint7() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[calc(50%+16px)] top-0 translate-x-[-50%]" data-name="Data Point">
      <NameValuePair7 />
    </div>
  );
}

function DataPoints3() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint6 />
      <DataPoint7 />
    </div>
  );
}

function Bottom3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar3 />
      <DataPoints3 />
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[372px] w-[847px]" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tasks completed above target. Continue monitoring.
      </p>
      <Bottom3 />
    </div>
  );
}

function Bar4() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[5.08%] rounded-[4px] top-0" data-name="Fill" />
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        95%
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function DataPoint8() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair8 />
    </div>
  );
}

function NameValuePair9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Target (50%)
      </p>
    </div>
  );
}

function DataPoint9() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[calc(50%+16px)] top-0 translate-x-[-50%]" data-name="Data Point">
      <NameValuePair9 />
    </div>
  );
}

function DataPoints4() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint8 />
      <DataPoint9 />
    </div>
  );
}

function Bottom4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar4 />
      <DataPoints4 />
    </div>
  );
}

function ProgressBar4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[496px] w-[847px]" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Tasks completed above target. Reallocate resources if applicable.
      </p>
      <Bottom4 />
    </div>
  );
}

function Bar5() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] inset-0 rounded-[4px]" data-name="Fill" />
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        100%
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function DataPoint10() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair10 />
    </div>
  );
}

function NameValuePair11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Target (50%)
      </p>
    </div>
  );
}

function DataPoint11() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[calc(50%+26px)] top-0 translate-x-[-50%]" data-name="Data Point">
      <NameValuePair11 />
    </div>
  );
}

function DataPoints5() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint10 />
      <DataPoint11 />
    </div>
  );
}

function Bottom5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom">
      <Bar5 />
      <DataPoints5 />
    </div>
  );
}

function ProgressBar5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-[620px] w-[847px]" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        All tasks completed. Monitor for new requests.
      </p>
      <Bottom5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <ProgressBar />
      <ProgressBar1 />
      <ProgressBar2 />
      <ProgressBar3 />
      <ProgressBar4 />
      <ProgressBar5 />
    </div>
  );
}