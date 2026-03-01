export default function Footer() {
  return (
    <div className="bg-[#f0f0f0] relative size-full" data-name="Footer">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#757575] h-[972px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_27.1px_2px_rgba(200,200,200,0.12)] top-1/2 w-[1829px]" />
      <p className="absolute font-['Istok_Web:Regular',sans-serif] leading-[normal] left-[1661px] not-italic text-[#cecece] text-[20px] top-[955px] w-[167px] whitespace-pre-wrap">thanks for visiting!</p>
      <p className="absolute font-['Istok_Web:Regular',sans-serif] leading-[normal] left-[90px] not-italic text-[#cecece] text-[20px] top-[906px] w-[167px] whitespace-pre-wrap">{`made with figma, vscode, & some all-nighters.`}</p>
      <p className="-translate-x-1/2 absolute bg-clip-text bg-gradient-to-b font-['Inter:Extra_Bold','Noto_Sans_SC:Black',sans-serif] font-extrabold from-[#d9d9d9] leading-[0] left-[959px] not-italic text-[128px] text-[transparent] text-center to-[#737373] top-[115px] w-[1738px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`谢谢 `}</span>
        <span className="font-['Inter:Extra_Light_Italic','Noto_Sans_SC:Black',sans-serif] font-extralight italic leading-[normal]">(thank you).</span>
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[602px] top-1/2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 602">
          <circle cx="301" cy="301" fill="url(#paint0_linear_7_324)" id="Ellipse 2" r="301" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_324" x1="301" x2="301" y1="-112.137" y2="602">
              <stop stopColor="#C9C9C9" />
              <stop offset="1" stopColor="#757575" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}