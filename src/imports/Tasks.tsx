import svgPaths from "./svg-7rilyne475";

function Bar() {
  return (
    <div className="bg-[#eceef0] content-stretch flex flex-col h-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Bar">
      <div className="absolute bg-[#003396] bottom-0 left-0 right-[92.33%] rounded-[4px] top-0" data-name="Fill" />
      <div className="absolute bg-[#b2b8c2] bottom-0 left-[calc(50%-0.5px)] opacity-50 top-0 translate-x-[-50%] w-[14px]" data-name="Target" />
    </div>
  );
}

function NameValuePair() {
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
    <div className="absolute content-stretch flex gap-[7px] items-center left-[calc(50%+7px)] top-0 translate-x-[-50%]" data-name="Data Point">
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Task completion below target. Reassign or adjust as needed.
      </p>
      <Bottom />
    </div>
  );
}

function Data() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow items-start justify-between leading-[normal] min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0 text-[18px] text-black text-right w-full" data-name="Data">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Assigned and Open
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Unassigned
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cancelled
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cannot Complete
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Completed
      </p>
    </div>
  );
}

function RowLabel() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-center mr-[-1px] pb-[16px] pl-0 pr-[24px] pt-[48px] relative shrink-0 w-[248px]" data-name="Row-Label">
      <Data />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        78
      </p>
    </div>
  );
}

function NameValuePair2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top />
    </div>
  );
}

function DataPoint2() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative rounded-br-[2px] rounded-tl-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-br-[2px] rounded-tl-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair2 />
        </div>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2
      </p>
    </div>
  );
}

function NameValuePair3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top1 />
    </div>
  );
}

function DataPoint3() {
  return (
    <div className="basis-0 bg-[#f1f7ff] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair3 />
        </div>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        0
      </p>
    </div>
  );
}

function NameValuePair4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top2 />
    </div>
  );
}

function DataPoint4() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair4 />
        </div>
      </div>
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        7
      </p>
    </div>
  );
}

function NameValuePair5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top3 />
    </div>
  );
}

function DataPoint5() {
  return (
    <div className="basis-0 bg-[#fff2f2] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair5 />
        </div>
      </div>
    </div>
  );
}

function Top4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        100
      </p>
    </div>
  );
}

function NameValuePair6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top4 />
    </div>
  );
}

function DataPoint6() {
  return (
    <div className="basis-0 bg-[#003396] grow mb-[-1px] min-h-px min-w-px relative rounded-bl-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-bl-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair6 />
        </div>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Data">
      <DataPoint2 />
      <DataPoint3 />
      <DataPoint4 />
      <DataPoint5 />
      <DataPoint6 />
    </div>
  );
}

function Row() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow h-full items-center min-h-px min-w-px mr-[-1px] relative shrink-0" data-name="Row">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Discharges
      </p>
      <Data1 />
    </div>
  );
}

function Top5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        37
      </p>
    </div>
  );
}

function NameValuePair7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top5 />
    </div>
  );
}

function DataPoint7() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair7 />
        </div>
      </div>
    </div>
  );
}

function Top6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        3
      </p>
    </div>
  );
}

function NameValuePair8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top6 />
    </div>
  );
}

function DataPoint8() {
  return (
    <div className="basis-0 bg-[#f1f7ff] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair8 />
        </div>
      </div>
    </div>
  );
}

function Top7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        10
      </p>
    </div>
  );
}

function NameValuePair9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top7 />
    </div>
  );
}

function DataPoint9() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair9 />
        </div>
      </div>
    </div>
  );
}

function Top8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        0
      </p>
    </div>
  );
}

function NameValuePair10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top8 />
    </div>
  );
}

function DataPoint10() {
  return (
    <div className="basis-0 bg-[#fff2f2] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair10 />
        </div>
      </div>
    </div>
  );
}

function Top9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        5
      </p>
    </div>
  );
}

function NameValuePair11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top9 />
    </div>
  );
}

function DataPoint11() {
  return (
    <div className="basis-0 bg-[#003396] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair11 />
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Data">
      <DataPoint7 />
      <DataPoint8 />
      <DataPoint9 />
      <DataPoint10 />
      <DataPoint11 />
    </div>
  );
}

function Row1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow h-full items-center min-h-px min-w-px mr-[-1px] relative shrink-0" data-name="Row">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ad Hoc
      </p>
      <Data2 />
    </div>
  );
}

function Top10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        30
      </p>
    </div>
  );
}

function NameValuePair12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top10 />
    </div>
  );
}

function DataPoint12() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative rounded-tr-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-tr-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair12 />
        </div>
      </div>
    </div>
  );
}

function Top11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        10
      </p>
    </div>
  );
}

function NameValuePair13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top11 />
    </div>
  );
}

function DataPoint13() {
  return (
    <div className="basis-0 bg-[#f1f7ff] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair13 />
        </div>
      </div>
    </div>
  );
}

function Top12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        0
      </p>
    </div>
  );
}

function NameValuePair14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top12 />
    </div>
  );
}

function ArrowOutward() {
  return (
    <div className="absolute right-[16.33px] size-[24px] top-[16px]" data-name="arrow_outward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_outward">
          <path d={svgPaths.p28040d00} fill="var(--fill-0, #64748B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataPoint14() {
  return (
    <div className="basis-0 bg-[#f7f8f9] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <ArrowOutward />
          <NameValuePair14 />
        </div>
      </div>
    </div>
  );
}

function Top13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2
      </p>
    </div>
  );
}

function NameValuePair15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top13 />
    </div>
  );
}

function DataPoint15() {
  return (
    <div className="basis-0 bg-[#fff2f2] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair15 />
        </div>
      </div>
    </div>
  );
}

function Top14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-center text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        0
      </p>
    </div>
  );
}

function NameValuePair16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top14 />
    </div>
  );
}

function DataPoint16() {
  return (
    <div className="basis-0 bg-[#003396] grow mb-[-1px] min-h-px min-w-px relative rounded-br-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-br-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair16 />
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Data">
      <DataPoint14 />
      <DataPoint12 />
      <DataPoint13 />
      <DataPoint15 />
      <DataPoint16 />
    </div>
  );
}

function Row2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow h-full items-center min-h-px min-w-px mr-[-1px] relative shrink-0" data-name="Row">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Duty Lists
      </p>
      <Data3 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center min-h-px min-w-px pl-0 pr-px py-0 relative shrink-0 w-full" data-name="Content">
      <RowLabel />
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Pointing() {
  return (
    <div className="absolute contents left-[0.39px] top-[0.41px]" data-name="pointing">
      <div className="absolute h-[15.268px] left-[0.39px] top-[0.41px] w-[14.308px]" data-name="Fill 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
          <path clipRule="evenodd" d={svgPaths.p428eb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute h-[15.268px] left-[0.39px] top-[0.41px] w-[14.308px]" data-name="Stroke 3">
        <div className="absolute inset-[-2.46%_-2.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
            <path clipRule="evenodd" d={svgPaths.p1538c080} fillRule="evenodd" id="Stroke 3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[3.459px] left-[11.52px] top-[9.21px] w-px" data-name="Stroke 5">
        <div className="absolute inset-[-10.84%_62.5%_-10.84%_-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
            <path d="M0.375 3.834V0.375" id="Stroke 5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[3.473px] left-[9.49px] top-[9.2px] w-px" data-name="Stroke 7">
        <div className="absolute inset-[-10.8%_60.9%_-10.8%_-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
            <path d="M0.391 3.848L0.375 0.375" id="Stroke 7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[3.426px] left-[7.51px] top-[9.23px] w-px" data-name="Stroke 9">
        <div className="absolute inset-[-10.95%_60.4%_-10.95%_-37.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
            <path d="M0.375 0.375L0.396 3.801" id="Stroke 9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HandPointing() {
  return (
    <div className="absolute inset-0 shadow-[0px_1px_2.6px_0px_rgba(0,0,0,0.32)]" data-name="hand (pointing)">
      <Pointing />
    </div>
  );
}

function HandPointing1() {
  return (
    <div className="absolute h-[17px] left-[35px] top-[91px] w-[16px]" data-name="hand (pointing)">
      <HandPointing />
    </div>
  );
}

function NameValuePair17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-slate-500 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        View detailed breakdown of Cancelled Duty Lists
      </p>
    </div>
  );
}

function Popover() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[16px] items-start left-0 p-[16px] rounded-[8px] shadow-[0px_2px_12px_0px_#dcdcdd] top-0 w-[250px]" data-name="Popover">
      <NameValuePair17 />
    </div>
  );
}

function Hover() {
  return (
    <div className="absolute h-[108px] right-[-13px] top-[144px] w-[250px]" data-name="Hover">
      <HandPointing1 />
      <Popover />
    </div>
  );
}

function NameValuePair18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282e38] text-[0px] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`150 `}</span>Operators
      </p>
    </div>
  );
}

function NameValuePair19() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Progress Breakdown
      </p>
    </div>
  );
}

function TitleArea() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Title Area">
      <NameValuePair18 />
      <NameValuePair19 />
    </div>
  );
}

function Total() {
  return (
    <div className="content-stretch flex gap-[8px] h-[16px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Total">
      <div className="basis-0 bg-[#008245] grow h-full min-h-px min-w-px rounded-[4px] shrink-0" />
      <div className="bg-[#003396] h-full rounded-[4px] shrink-0 w-[170px]" />
      <div className="bg-[#f27975] h-full rounded-[4px] shrink-0 w-[51px]" />
      <div className="bg-white h-full relative rounded-[4px] shrink-0 w-[51px]">
        <div aria-hidden="true" className="absolute border-2 border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function NameValuePair20() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        90
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Ahead (60%)
      </p>
    </div>
  );
}

function DataPoint17() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#008245] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair20 />
    </div>
  );
}

function NameValuePair21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        40
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        On Track (26%)
      </p>
    </div>
  );
}

function DataPoint18() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#003396] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair21 />
    </div>
  );
}

function NameValuePair22() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        20
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Behind (13%)
      </p>
    </div>
  );
}

function DataPoint19() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-[#f27975] rounded-[4px] shrink-0 size-[12px]" />
      <NameValuePair22 />
    </div>
  );
}

function NameValuePair23() {
  return (
    <div className="content-stretch flex gap-[4px] items-start leading-[normal] relative shrink-0 text-[#282e38] text-[16px] text-nowrap whitespace-pre" data-name="NameValue Pair">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        5
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        N/A (2%)
      </p>
    </div>
  );
}

function DataPoint20() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Data Point">
      <div className="bg-white relative rounded-[4px] shrink-0 size-[12px]">
        <div aria-hidden="true" className="absolute border-2 border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <NameValuePair23 />
    </div>
  );
}

function DataPoints1() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Data Points">
      <DataPoint17 />
      <DataPoint18 />
      <DataPoint19 />
      <DataPoint20 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Total />
      <DataPoints1 />
    </div>
  );
}

function ActivityDistribution() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Activity Distribution">
      <TitleArea />
      <Content1 />
    </div>
  );
}

function DataTasksCategoryBreakdown() {
  return (
    <div className="bg-[#f7f8f9] h-[500px] relative rounded-[8px] shrink-0 w-full" data-name="Data-Tasks Category Breakdown">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[500px] items-start p-[24px] relative w-full">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Detailed breakdown of task activity across categories, showing how work is distributed.
          </p>
          <Content />
          <Hover />
          <ActivityDistribution />
        </div>
      </div>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon-Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon-Left">
          <path d={svgPaths.p18b66300} fill="var(--fill-0, #003396)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] right-[8px] rounded-[6px] top-[8px]" data-name="Button">
      <IconLeft />
      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#003396] text-[18px] text-center text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-pre">Show Less</p>
      </div>
    </div>
  );
}

export default function Tasks() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0] size-full" data-name="Tasks">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <ProgressBar />
          <DataTasksCategoryBreakdown />
          <Button />
        </div>
      </div>
    </div>
  );
}