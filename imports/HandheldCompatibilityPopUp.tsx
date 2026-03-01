import svgPaths from "./svg-8dvhuk7ghz";
import imgHandheldCompatibility1 from "figma:asset/4e70fdb18a245c2e917a91cfb7473d0add49d2f9.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[16px]">Shipped</p>
      <div className="h-0 relative shrink-0 w-[681px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 681 1">
            <line id="Line 5" stroke="var(--stroke-0, #989898)" x2="681" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[16px]">Handheld Compatibility Program</p>
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

export default function HandheldCompatibilityPopUp() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-end pb-[40px] pt-[70px] px-[60px] relative rounded-[40px] size-full" data-name="Handheld Compatibility Pop Up">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)]" />
      <Frame />
      <div className="aspect-[1920/1080] relative rounded-[20px] shrink-0 w-full" data-name="Handheld Compatibility 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgHandheldCompatibility1} />
      </div>
      <ExternalLink />
      <X />
    </div>
  );
}