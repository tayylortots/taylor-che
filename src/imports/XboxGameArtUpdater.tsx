import imgGameArtUpdater1 from "figma:asset/00bcda6a058c32edefb1e79dc1d0e87fa730fd0f.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[16px]">Figma Plugin</p>
      <div className="h-0 relative shrink-0 w-[712px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 712 1">
            <line id="Line 5" stroke="var(--stroke-0, #989898)" x2="712" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[16px]">Xbox game art updater</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full">
      <div className="h-[560px] relative rounded-[20px] shrink-0 w-[574px]" data-name="game art updater 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgGameArtUpdater1} />
      </div>
      <p className="flex-[1_0_0] font-['Istok_Web:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#989898] text-[16px] whitespace-pre-wrap">Accelerating personal workflow to update game cards within Figma.</p>
    </div>
  );
}

export default function XboxGameArtUpdater() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-end justify-center pb-[40px] pt-[70px] px-[60px] relative rounded-[40px] shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)] size-full" data-name="Xbox Game Art Updater">
      <Frame />
      <X />
      <Frame1 />
    </div>
  );
}