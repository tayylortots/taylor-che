function Frame10() {
  return (
    <div className="bg-[#efefef] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[60px] shrink-0">
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#afafaf] text-[24px]">work</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1px_-2px_11.2px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] relative shrink-0">
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#afafaf] text-[24px]">contact</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center p-[8px] relative rounded-[60px] shrink-0" data-name="navigation" style={{ backgroundImage: "linear-gradient(100.227deg, rgba(255, 255, 255, 0.2) 8.6627%, rgba(255, 255, 255, 0) 105.84%)" }}>
      <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web:Regular',sans-serif] items-start leading-[normal] not-italic relative shrink-0 text-[#989898] w-[710px] whitespace-pre-wrap">
      <p className="relative shrink-0 text-[36px] w-full">Improving UCLA Library’s search experience</p>
      <p className="relative shrink-0 text-[20px] w-full">Guiding students to advanced search when results fall short.</p>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="arrow-up-right">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="arrow-up-right">
          <path d="M17.5 42.5L42.5 17.5" id="Vector" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M17.5 17.5H42.5V42.5" id="Vector_2" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame2 />
      <ArrowUpRight />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web:Regular',sans-serif] items-start leading-[normal] not-italic relative shrink-0 text-[#989898] w-[627px] whitespace-pre-wrap">
      <p className="relative shrink-0 text-[36px] w-full">Windows Task Switcher</p>
      <p className="relative shrink-0 text-[20px] w-full">Making Windows’ Task Switcher a gamer-friendly experience</p>
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="arrow-up-right">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="arrow-up-right">
          <path d="M17.5 42.5L42.5 17.5" id="Vector" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M17.5 17.5H42.5V42.5" id="Vector_2" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1 />
      <ArrowUpRight1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web:Regular',sans-serif] items-start leading-[normal] not-italic relative shrink-0 text-[#989898] w-[940px] whitespace-pre-wrap">
      <p className="relative shrink-0 text-[36px] w-full">Xbox game art updater</p>
      <p className="relative shrink-0 text-[20px] w-full">{`Accelerated designers' workflows by building a plugin that auto-updates game data through Twitch's API.`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web:Regular',sans-serif] items-start leading-[normal] not-italic relative shrink-0 text-[#989898] w-[710px] whitespace-pre-wrap">
      <p className="relative shrink-0 text-[36px] w-full">Slouch Sloth</p>
      <p className="relative shrink-0 text-[20px] w-full">Fun, little posture-check reminder.</p>
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="arrow-up-right">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="arrow-up-right">
          <path d="M17.5 42.5L42.5 17.5" id="Vector" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M17.5 17.5H42.5V42.5" id="Vector_2" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame12 />
      <ArrowUpRight2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start relative shrink-0 w-full">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1738 1">
            <line id="Line 3" stroke="var(--stroke-0, #AFAFAF)" x2="1738" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame5 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1738 1">
            <line id="Line 3" stroke="var(--stroke-0, #AFAFAF)" x2="1738" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1738 1">
            <line id="Line 3" stroke="var(--stroke-0, #AFAFAF)" x2="1738" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[128px] w-full whitespace-pre-wrap">Index</p>
      <Frame3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center justify-center left-[90px] top-[97px] w-[1738px]">
      <Navigation />
      <Frame9 />
    </div>
  );
}

export default function Work() {
  return (
    <div className="bg-[#f0f0f0] relative size-full" data-name="Work">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[972px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_27.1px_2px_rgba(200,200,200,0.12)] top-1/2 w-[1829px]" />
      <Frame8 />
    </div>
  );
}