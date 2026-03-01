import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import svgPaths from "../../imports/svg-o69cactyx9";
import Maximize from "../../imports/Maximize2";
import Minimize from "../../imports/Minimize";
import imgHeroImage from "figma:asset/659f74717bdbad2f0b3a44a3ab16ca1c1fe66bd9.png";
import imgImage49 from "figma:asset/c5ae07c93e4115b01beb676f6d72701d2ae9498a.png";
import imgSearchSuggestions1 from "figma:asset/9f41fe3b12231a48e93731f866c75ea0379eae8e.png";
import imgChannel1 from "figma:asset/23b92187e10292f0894c530ae37fecb1a5618211.png";
import imgLibraryItemCard1 from "figma:asset/d5fb6d486121a06744f140a34a20937230623866.png";
import imgSearchResults211 from "figma:asset/e9d3487121a1c8cf5c91e0e955cead775d346bcb.png";
import imgFinalImage1 from "figma:asset/3f5678935f4f24f1a8e441f23e32591fd57ee466.png";

function Frame5() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] items-start sm:items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Redesign</p>
      <div className="h-0 relative flex-1 hidden sm:block">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 675 1">
            <line stroke="#989898" x2="675" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">UCLA Library search experience</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f9f8f8] h-[200px] sm:h-[280px] md:h-[336px] overflow-clip relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full flex items-center justify-center p-[16px] sm:p-[20px] md:p-[24px]">
      <div className="relative rounded-[6px] sm:rounded-[7px] md:rounded-[8px] w-full max-w-[70%] sm:max-w-[60%] md:max-w-[473px] h-[70%] sm:h-[80%] md:h-[295px]" data-name="hero image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px] sm:rounded-[7px] md:rounded-[8px]">
          <img alt="UCLA Library search interface" className="absolute h-[113.98%] left-0 max-w-none top-[-0.05%] w-full" src={imgHeroImage} />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[6px] sm:gap-[7px] md:gap-[8px] items-start not-italic relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.42px] w-full">
      <p className="leading-[normal] relative shrink-0 text-[#666]">Overview</p>
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#989898] w-full">As designers for the UCLA Library, we spent the year identifying pain points in Primo, the search engine that supports over 40,000 students, to improve the library search experience.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[6px] sm:gap-[7px] md:gap-[8px] items-start not-italic relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.42px] w-full">
      <p className="leading-[normal] relative shrink-0 text-[#666]">Outcome</p>
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#989898] w-full">Over six months, I identified major areas for improvement and presented issues and recommendations for enhancing Primo to a UC board of 10+ representatives, receiving strong positive feedback.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start justify-center relative w-full sm:flex-[1_0_0]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] items-start relative shrink-0 w-[80px] sm:w-[90px] md:w-[106px]">
      <p className="relative shrink-0 text-[#666]">Role</p>
      <p className="relative shrink-0 text-[#989898]">Design lead</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] items-start relative shrink-0 w-[80px] sm:w-[90px] md:w-[106px]">
      <p className="relative shrink-0 text-[#666]">Year</p>
      <p className="relative shrink-0 text-[#989898]">2023</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[24px] sm:gap-[30px] md:gap-[38px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.42px]">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame10 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] sm:gap-[13px] md:gap-[16px] items-start relative w-full sm:flex-[1_0_0]">
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">The problem</p>
      <p className="leading-[normal] relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-full">Search results lack relevance, context, and error support</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row font-['Istok_Web'] gap-[20px] sm:gap-[28px] md:gap-[38px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
      <Frame23 />
      <p className="w-full sm:flex-[1_0_0] leading-[0] relative text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] whitespace-pre-wrap">
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px]">{`Users often encountered irrelevant search results and lacked enough context to quickly assess resource relevance. `}</span>
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#666]">The system did not support error prevention, accessibility prioritization, or efficient search refinement,</span>
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px]">{` forcing users to take extra steps to find the right materials.`}</span>
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f9f8f8] h-[180px] sm:h-[250px] md:h-[336px] overflow-clip relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full">
      <div className="absolute inset-[9.82%_21.93%_9.82%_21.83%] rounded-[4px] sm:rounded-[5px] md:rounded-[6px]" data-name="image 49">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px] sm:rounded-[5px] md:rounded-[6px]">
          <img alt="Search results example" className="absolute h-[116.38%] left-0 max-w-none top-[-10.34%] w-full" src={imgImage49} />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] sm:gap-[13px] md:gap-[16px] items-start relative w-full sm:flex-[1_0_0]">
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">User research</p>
      <p className="leading-[normal] relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-full">In fact, here are what users say about the current experience...</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row font-['Istok_Web'] gap-[20px] sm:gap-[28px] md:gap-[38px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
      <Frame22 />
      <p className="w-full sm:flex-[1_0_0] leading-[0] relative text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] whitespace-pre-wrap">
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px]">{`I interviewed `}</span>
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#666]">5 undergrad and 5 grad students</span>
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px]">
          {` to assess find their resources and their overall feelings about the experience. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
      </p>
    </div>
  );
}

function QuoteBox({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] sm:gap-[10px] md:gap-[12px] items-end justify-center relative shrink-0 w-full h-full">
      <div className="relative rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shrink-0 w-full flex-1 flex items-center" style={{ backgroundImage: "linear-gradient(94.663deg, rgba(255, 255, 255, 0.2) 8.6627%, rgba(255, 255, 255, 0) 105.84%)" }}>
        <div aria-hidden="true" className="absolute border border-[#808080] border-solid inset-0 pointer-events-none rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] sm:p-[20px] md:p-[28px] relative w-full">
            <p className="flex-[1_0_0] font-['Istok_Web'] leading-[normal] min-h-px min-w-px not-italic relative text-[#989898] text-[12px] sm:text-[14px] md:text-[18px] whitespace-pre-wrap">{quote}</p>
          </div>
        </div>
      </div>
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[18px] text-right w-full whitespace-pre-wrap">{attribution}</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <Frame17 />
      
      {/* 2x2 Quote Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] md:gap-[24px] w-full">
        <QuoteBox 
          quote={`"The search results often shows really unexpected results. Like, why does a dissertation about 'The Quality of Video Gaming Communities...' show when I type 'history of films'!?"`}
          attribution="-grad student"
        />
        <QuoteBox 
          quote="Maybe it's because I'm a film student, but it would be helpful for me to have the DVDs separated from the general search."
          attribution="-film student"
        />
        <QuoteBox 
          quote="Being able to read summaries before clicking into the item pages would be helpful."
          attribution="-grad student"
        />
        <QuoteBox 
          quote={`Availability is a big factor when deciding to click an article. It's frustrating when I find a good article, but it ends up not being available. `}
          attribution="-undergrad student"
        />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f9f8f8] min-h-[160px] sm:min-h-[220px] md:min-h-[280px] overflow-clip relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full p-[24px] sm:p-[40px] md:p-[54px]">
      <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic tracking-[0.42px] whitespace-pre-wrap">
        <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px] w-full">Balancing the needs of two audiences</p>
        <p className="leading-[0] relative text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-full">
          <span className="leading-[normal] text-[#666]">Students</span>
          <span className="leading-[normal]">{` wanted a simple search experience, as if performing a Google Search, but`}</span>
          <span className="leading-[normal] text-[#666]">{` librarians`}</span>
          <span className="leading-[normal]">{` and researchers want to maintain traditional research practices.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">Ideating</p>
      <p className="leading-[normal] min-w-full relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-[min-content] whitespace-pre-wrap">Initial proposed ideas</p>
      <p className="leading-[0] min-w-full relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] w-[min-content] whitespace-pre-wrap">
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px]">{`From looking at `}</span>
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#666]">11 different library sites</span>
        <span className="leading-[18px] sm:leading-[20px] md:leading-[22px]">{` and user testing their search engines, I noted 3 reoccurring features that we lacked and might improve our own engine.`}</span>
      </p>
    </div>
  );
}

function IdeaRow({ image, number, title }: { image: string; number: string; title: string }) {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[24px] sm:gap-[28px] md:gap-[40px] items-start sm:items-center relative shrink-0 w-full">
      <div className="bg-[#3b3b3b] h-[180px] sm:h-[260px] md:h-[336px] overflow-clip relative rounded-[6px] sm:rounded-[7px] md:rounded-[8px] shrink-0 w-full sm:w-[240px] md:w-[357px] flex items-center justify-center">
        <img alt={`Idea ${number}`} className="max-w-[85%] max-h-[60%] object-contain pointer-events-none" src={image} />
      </div>
      <div className="content-stretch flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] items-start justify-center leading-[18px] sm:leading-[20px] md:leading-[22px] min-h-px min-w-px relative text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.42px] sm:flex-[1_0_0]">
        <p className="font-['Work_Sans'] font-normal relative shrink-0 text-[#666]">{number}</p>
        <p className="font-['Work_Sans'] font-normal relative shrink-0">{title}</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <IdeaRow 
        image={imgSearchSuggestions1}
        number="Idea #1"
        title="Suggested search terms"
      />
      <IdeaRow 
        image={imgChannel1}
        number="Idea #2"
        title="Channels for suggested materials"
      />
      <IdeaRow 
        image={imgLibraryItemCard1}
        number="Idea #3"
        title="Redesigning the card component to surface key information that enables students to evaluate and select resources directly from the search page."
      />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <Frame47 />
      <Frame32 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f9f8f8] min-h-[180px] sm:min-h-[240px] md:min-h-[300px] overflow-clip relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full p-[24px] sm:p-[36px] md:p-[49px]">
      <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic tracking-[0.42px] whitespace-pre-wrap">
        <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px] w-full">A surprise constraint</p>
        <p className="leading-[0] relative text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-full">
          <span className="leading-[normal]">{`Primo, our back-end service, is very constrained. After reviewing the wireframes with our PM and developers, we determined that `}</span>
          <span className="leading-[normal] text-[#666]">Primo's backend limitations would prevent the implementation of a "suggestions" feature</span>
          <span className="leading-[normal]">, requiring us to explore alternative solutions.</span>
        </p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">The solution</p>
      <p className="leading-[normal] min-w-full relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-[min-content] whitespace-pre-wrap">Prioritizing impact within a smaller design scope</p>
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] min-w-full relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] w-[min-content] whitespace-pre-wrap">Returning to the drawing board, we focused on two shippable features that would still provide students with guidance when navigating Primo's search.</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#f9f8f8] min-h-[250px] sm:min-h-[320px] md:min-h-[389px] overflow-clip relative rounded-[6px] sm:rounded-[7px] md:rounded-[8px] w-full p-[16px] sm:p-[20px] md:p-[24px] flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col gap-[16px] sm:gap-[20px] md:gap-[27px]">
        <div className="flex-1 relative rounded-[6px] sm:rounded-[7px] md:rounded-[8px] overflow-hidden flex items-center justify-center">
          <img alt="Search results improvement" className="w-full h-auto object-contain pointer-events-none rounded-[6px] sm:rounded-[7px] md:rounded-[8px]" src={imgSearchResults211} />
        </div>
        <div className="flex flex-row gap-[16px] sm:gap-[24px] md:gap-[32px]">
          <div className="flex-1 flex gap-[6px] sm:gap-[8px] md:gap-[12px] items-start">
            <div className="hidden sm:flex flex-none w-[10px] md:w-[12px] lg:w-[14px] xl:w-[17px] pt-[3px] md:pt-[4px]">
              <svg className="block w-full h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5833 154.667">
                <path d={svgPaths.p2973cd00} fill="#989898" />
              </svg>
            </div>
            <p className="font-['Istok_Web'] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[18px] not-italic text-[#989898] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] tracking-[0.42px]">Enhancing search result cards so users can quickly evaluate resources and see availability and key details when available.</p>
          </div>
          <div className="flex-1 flex gap-[6px] sm:gap-[8px] md:gap-[12px] items-start">
            <div className="hidden sm:flex flex-none w-[10px] md:w-[12px] lg:w-[14px] xl:w-[17px] pt-[3px] md:pt-[4px] rotate-180">
              <svg className="block w-full h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 2.66667">
                <path d={svgPaths.p3a3b5d80} fill="#989898" />
              </svg>
            </div>
            <p className="font-['Istok_Web'] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[18px] not-italic text-[#989898] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] tracking-[0.42px]">{`A graphic banner to provide ways users can refine their search, if the first 10 results don't show their desired material.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">The impact</p>
      <p className="leading-[normal] min-w-full relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-[min-content] whitespace-pre-wrap">Highly positive reception from the UC Library board and from usability tests</p>
      <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] min-w-full relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] w-[min-content] whitespace-pre-wrap">The proposals were well received by the UC Library board and validated through 8 usability tests. UC Libraries are using our recommendations to work with Primo on back-end improvements. Success will be measured through repeated use, higher Advanced Search engagement, and increased user confidence in finding resources. A full redesign of the design system will be covered in another case study.</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[30px] md:gap-[38px] items-center justify-center relative shrink-0 w-full">
      <Frame40 />
      <div className="h-auto max-h-[250px] sm:max-h-[320px] md:max-h-[376px] relative shrink-0 w-full max-w-[450px] sm:max-w-[550px] md:max-w-[656px]" data-name="final image 1">
        <img alt="Final design solution" className="w-full h-auto max-w-none object-cover pointer-events-none" src={imgFinalImage1} />
      </div>
    </div>
  );
}

interface UclaLibraryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UclaLibraryPopup({ isOpen, onClose }: UclaLibraryPopupProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollContainer.scrollTop > 20 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollContainer.scrollTop <= 20 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  // Prevent body scroll and hide main app scrollbar when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Find and hide scrolling on the main scroll container
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) {
        mainScrollContainer.style.overflow = 'hidden';
      }
      
      // Hide the custom scrollbar component
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) {
        customScrollbar.style.display = 'none';
      }
      
      // Hide the generate button
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) {
        generateButton.style.display = 'none';
      }
      
      // Hide the scroll indicator
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.display = 'none';
      }
    } else {
      document.body.style.overflow = '';
      
      // Restore the main scroll container
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) {
        mainScrollContainer.style.overflow = '';
      }
      
      // Restore the custom scrollbar component
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) {
        customScrollbar.style.display = '';
      }
      
      // Restore the generate button
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) {
        generateButton.style.display = '';
      }
      
      // Restore the scroll indicator
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.display = '';
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) {
        mainScrollContainer.style.overflow = '';
      }
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) {
        customScrollbar.style.display = '';
      }
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) {
        generateButton.style.display = '';
      }
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.display = '';
      }
    };
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/50 z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`fixed z-[100] bg-white shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)] overflow-hidden
              ${isExpanded 
                ? 'inset-0 m-0' 
                : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[96vw] sm:w-[92vw] md:w-[85vw] max-w-[900px] h-[96vh] sm:h-[92vh] md:h-[85vh] rounded-[12px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px]'
              }`}
          >
            {/* Scrollable container inside */}
            <div 
              ref={scrollContainerRef}
              className={isExpanded ? 'h-full overflow-auto scrollbar-thin' : 'max-h-[85vh] overflow-auto scrollbar-thin'}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(0,0,0,0.22) transparent',
              }}
            >
              <style>{`
                .scrollbar-thin::-webkit-scrollbar {
                  width: 8px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                  background: transparent;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                  background: rgba(0,0,0,0.22);
                  border-radius: 10px;
                  opacity: ${hasScrolled ? 1 : 0};
                  transition: opacity 0.3s ease;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                  background: rgba(0,0,0,0.3);
                }
              `}</style>
              
              {/* Content */}
              <div className={`content-stretch flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] items-end pb-[32px] sm:pb-[36px] md:pb-[40px] pt-[50px] sm:pt-[60px] md:pt-[70px] relative ${
                isExpanded ? 'px-[24px] sm:px-[60px] lg:px-[120px]' : 'px-[20px] sm:px-[40px] md:px-[60px]'
              }`}>
                
                <Frame5 />
                
                <p className="font-['Istok_Web'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] w-[min-content] whitespace-pre-wrap">Encouraging students to refine their search when results fall short.</p>
                
                <Frame2 />
                
                {/* All content sections */}
                <div className="content-stretch flex flex-col gap-[48px] sm:gap-[70px] md:gap-[100px] items-start relative shrink-0 w-full">
                  <Frame6 />
                  <Frame25 />
                  <Frame44 />
                  <Frame18 />
                  <Frame19 />
                  <Frame27 />
                  <Frame28 />
                  <Frame39 />
                </div>
                
                {/* Expand/Minimize button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="absolute left-[24px] sm:left-[40px] md:left-[60px] size-[24px] sm:size-[26px] md:size-[28px] top-[12px] sm:top-[14px] md:top-[16px] hover:opacity-70 transition-opacity"
                  aria-label={isExpanded ? "Minimize" : "Expand fullscreen"}
                >
                  {isExpanded ? <Minimize /> : <Maximize />}
                </button>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-[24px] sm:right-[40px] md:right-[60px] size-[24px] sm:size-[26px] md:size-[28px] top-[12px] sm:top-[14px] md:top-[16px] hover:opacity-70 transition-opacity"
                  aria-label="Close popup"
                >
                  <div className="relative size-full">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <rect fill="#F0F0F0" height="24" rx="12" width="24" />
                        <path d="M17 7L7 17" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M7 7L17 17" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}