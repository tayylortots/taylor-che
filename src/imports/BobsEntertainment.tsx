import svgPaths from "./svg-ta2oi8xwk2";
import imgPolaroid1 from "figma:asset/068d2aa5e2e46e8334f62305b71335f7d49afc90.png";
import imgPolaroid2 from "figma:asset/2194d9a29326236d433011f1038b1d4cf53be0b3.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[16px]">Exhibit piece</p>
      <div className="h-0 relative shrink-0 w-[734px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 734 1">
            <line id="Line 5" stroke="var(--stroke-0, #989898)" x2="734" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[16px]">Bobs Entertainment</p>
    </div>
  );
}

function ExternalLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="external-link">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="external-link">
          <path d={svgPaths.p1f4c3d00} id="Vector" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" id="Vector_2" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" id="Vector_3" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0">
      <div className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[16px] whitespace-nowrap">
        <p className="mb-0">Bobs Entertainment.</p>
        <p className="mb-0">Web, projection, graphic, video.</p>
        <p>2024.</p>
      </div>
      <ExternalLink />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[455px]" data-name="polaroid 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolaroid1} />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[455px]" data-name="polaroid 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolaroid2} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[455px]" data-name="polaroid 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/3c41ca0789621b0da2b6a297469232d11a7471b2" />
        </video>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-[1063px] size-[28px] top-[24px]" data-name="x">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="x">
          <rect fill="var(--fill-0, #F0F0F0)" height="28" rx="14" width="28" />
          <path d="M19 9L9 19" id="Vector" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 9L19 19" id="Vector_2" stroke="var(--stroke-0, #989898)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function BobsEntertainment() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[70px] px-[60px] relative rounded-[40px] shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)] size-full" data-name="Bobs Entertainment">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <X />
    </div>
  );
}