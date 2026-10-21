import svgPaths from "./svg-vmniy1x2wn";

function Data() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow items-start justify-between leading-[normal] min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0 text-[18px] text-black text-right w-full" data-name="Data">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Unassigned
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Assigned and Open
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
    <div className="basis-0 grow h-full max-w-[224px] min-h-px min-w-px mr-[-1px] relative shrink-0" data-name="Row-Label">
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center max-w-inherit pb-[16px] pl-0 pr-[16px] pt-[40px] relative size-full">
          <Data />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#282e38] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2222
      </p>
    </div>
  );
}

function NameValuePair() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top />
    </div>
  );
}

function DataPoint() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative rounded-br-[2px] rounded-tl-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-br-[2px] rounded-tl-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair />
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

function NameValuePair1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top1 />
    </div>
  );
}

function DataPoint1() {
  return (
    <div className="basis-0 bg-[#f1f7ff] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair1 />
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

function NameValuePair2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top2 />
    </div>
  );
}

function DataPoint2() {
  return (
    <div className="basis-0 bg-[#f7f8f9] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair2 />
        </div>
      </div>
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d6302d] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        7
      </p>
    </div>
  );
}

function NameValuePair3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top3 />
    </div>
  );
}

function DataPoint3() {
  return (
    <div className="basis-0 bg-[#fffcf2] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair3 />
        </div>
      </div>
    </div>
  );
}

function Top4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#008245] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2222
      </p>
    </div>
  );
}

function NameValuePair4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top4 />
    </div>
  );
}

function DataPoint4() {
  return (
    <div className="basis-0 bg-[#f2fff9] grow mb-[-1px] min-h-px min-w-px relative rounded-bl-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-bl-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair4 />
        </div>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Data">
      <DataPoint />
      <DataPoint1 />
      <DataPoint2 />
      <DataPoint3 />
      <DataPoint4 />
    </div>
  );
}

function Row() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-full items-center min-h-px min-w-px mr-[-1px] relative shrink-0" data-name="Row">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Discharge
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

function NameValuePair5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top5 />
    </div>
  );
}

function DataPoint5() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair5 />
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

function NameValuePair6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top6 />
    </div>
  );
}

function DataPoint6() {
  return (
    <div className="basis-0 bg-[#f1f7ff] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair6 />
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

function NameValuePair7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top7 />
    </div>
  );
}

function DataPoint7() {
  return (
    <div className="basis-0 bg-[#f7f8f9] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair7 />
        </div>
      </div>
    </div>
  );
}

function Top8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d6302d] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        0
      </p>
    </div>
  );
}

function NameValuePair8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top8 />
    </div>
  );
}

function DataPoint8() {
  return (
    <div className="basis-0 bg-[#fffcf2] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair8 />
        </div>
      </div>
    </div>
  );
}

function Top9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#008245] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        5
      </p>
    </div>
  );
}

function NameValuePair9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top9 />
    </div>
  );
}

function DataPoint9() {
  return (
    <div className="basis-0 bg-[#f2fff9] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair9 />
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Data">
      <DataPoint5 />
      <DataPoint6 />
      <DataPoint7 />
      <DataPoint8 />
      <DataPoint9 />
    </div>
  );
}

function Row1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-full items-center min-h-px min-w-px mr-[-1px] relative shrink-0" data-name="Row">
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

function NameValuePair10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top10 />
    </div>
  );
}

function DataPoint10() {
  return (
    <div className="basis-0 bg-white grow mb-[-1px] min-h-px min-w-px relative rounded-tr-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-tr-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair10 />
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

function NameValuePair11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top11 />
    </div>
  );
}

function DataPoint11() {
  return (
    <div className="basis-0 bg-[#f1f7ff] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair11 />
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

function NameValuePair12() {
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

function DataPoint12() {
  return (
    <div className="basis-0 bg-[#f7f8f9] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <ArrowOutward />
          <NameValuePair12 />
        </div>
      </div>
    </div>
  );
}

function Top13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d6302d] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        2
      </p>
    </div>
  );
}

function NameValuePair13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top13 />
    </div>
  );
}

function DataPoint13() {
  return (
    <div className="basis-0 bg-[#fffcf2] grow mb-[-1px] min-h-px min-w-px relative shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair13 />
        </div>
      </div>
    </div>
  );
}

function Top14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[#008245] text-[18px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        0
      </p>
    </div>
  );
}

function NameValuePair14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="NameValue Pair">
      <Top14 />
    </div>
  );
}

function DataPoint14() {
  return (
    <div className="basis-0 bg-[#f2fff9] grow mb-[-1px] min-h-px min-w-px relative rounded-br-[8px] shrink-0 w-full" data-name="Data Point">
      <div aria-hidden="true" className="absolute border border-[#d9dbde] border-solid inset-0 pointer-events-none rounded-br-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center p-[16px] relative size-full">
          <NameValuePair14 />
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Data">
      <DataPoint12 />
      <DataPoint10 />
      <DataPoint11 />
      <DataPoint13 />
      <DataPoint14 />
    </div>
  );
}

function Row2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[16px] grow h-full items-center min-h-px min-w-px mr-[-1px] relative shrink-0" data-name="Row">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Duty List
      </p>
      <Data3 />
    </div>
  );
}

export default function Content() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-px py-0 relative size-full" data-name="Content">
      <RowLabel />
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}