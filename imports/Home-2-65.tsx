function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[754px] px-[50px] py-[20px] rounded-[100px] top-[825px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#737373] text-[24px]">generate</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#757575] content-stretch flex items-center justify-center left-[959px] px-[50px] py-[20px] rounded-[100px] top-[825px]">
      <p className="font-['Istok_Web:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white">view work</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f0f0f0] relative size-full" data-name="Home">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[972px] left-[calc(50%+0.5px)] rounded-[20px] shadow-[0px_4px_27.1px_2px_rgba(200,200,200,0.12)] top-1/2 w-[1829px]" />
      <p className="absolute bg-clip-text font-['Inter:Extra_Bold','Noto_Sans_SC:Black',sans-serif] font-extrabold leading-[normal] left-[calc(50%-150px)] not-italic text-[300px] text-[transparent] top-[calc(50%-181px)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 300 363\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(9.1849e-16 18.15 -15 1.1114e-15 150 181.5)\\'><stop stop-color=\\'rgba(217,217,217,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(166,166,166,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(141,141,141,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(115,115,115,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
        谢
      </p>
      <p className="absolute font-['Istok_Web:Bold',sans-serif] leading-[normal] left-[calc(50%-129px)] not-italic text-[#afafaf] text-[68px] top-[291px]">TAYLOR</p>
      <p className="absolute font-['Istok_Web:Regular',sans-serif] leading-[normal] left-[calc(50%-30px)] not-italic text-[#afafaf] text-[24px] top-[704px]">is a...</p>
      <Frame />
      <Frame1 />
    </div>
  );
}