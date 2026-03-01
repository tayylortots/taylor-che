import svgPaths from "./svg-m6bckdirl1";

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-up">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-up">
          <path d="M12 19V5" id="Vector" stroke="var(--stroke-0, #FEFED5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12L12 5L19 12" id="Vector_2" stroke="var(--stroke-0, #FEFED5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%+0.5px)] p-[10px] top-[945px]">
      <ArrowUp />
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fefed5] text-[20px]">back to top</p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#f0f0f0] relative size-full" data-name="Footer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#5b8da3] h-[972px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_27.1px_2px_rgba(200,200,200,0.12)] top-1/2 w-[1829px]" />
      <p className="absolute font-['Istok_Web:Regular',sans-serif] leading-[normal] left-[1661px] not-italic text-[#fefed6] text-[20px] top-[955px] w-[167px] whitespace-pre-wrap">thanks for visiting!</p>
      <p className="absolute font-['Istok_Web:Regular',sans-serif] leading-[normal] left-[90px] not-italic text-[#fefed6] text-[20px] top-[906px] w-[167px] whitespace-pre-wrap">{`made with figma, vscode, & some all-nighters.`}</p>
      <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-b font-['Inter:Extra_Bold','Noto_Sans_SC:Black',sans-serif] font-extrabold from-[#fefed6] leading-[0] left-[959px] not-italic text-[128px] text-[transparent] text-center to-[134.19%] to-[rgba(243,238,190,0)] top-[115px] w-[1738px] whitespace-pre-wrap">
        <span className="bg-clip-text bg-gradient-to-b from-[#fefed6] leading-[normal] to-[134.19%] to-[rgba(243,238,190,0)]">{`谢谢 `}</span>
        <span className="bg-clip-text bg-gradient-to-b font-['Inter:Extra_Light_Italic','Noto_Sans_SC:Black',sans-serif] font-extralight from-[#fefed6] italic leading-[normal] to-[134.19%] to-[rgba(243,238,190,0)]">(thank you).</span>
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[602px] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 602">
          <circle cx="301" cy="301" fill="url(#paint0_linear_7_455)" id="Ellipse 2" r="301" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_455" x1="301" x2="301" y1="-112.137" y2="602">
              <stop stopColor="#F9F8D0" />
              <stop offset="1" stopColor="#FFEEB8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[92px] left-[1208px] top-[407px] w-[189px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189 92">
          <path d={svgPaths.p1b586800} fill="var(--fill-0, white)" id="Vector 14" />
        </svg>
      </div>
      <div className="absolute flex h-[169px] items-center justify-center left-[485px] top-[561px] w-[347px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[169px] relative w-[347px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 347 169">
              <path d={svgPaths.p18eb9f80} fill="var(--fill-0, white)" id="Vector 13" />
            </svg>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}