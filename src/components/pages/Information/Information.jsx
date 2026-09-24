/** @format */

import stringData from "../../../stringValues/stringValues";
import { useNavigate } from "react-router-dom";
import ListOut from "./Listout/ListOut";
import Learn from "./LearnPart/Learn";
import Eligiblity from "./Eligibility/Eligibility";
import MentorSection from "./MentorSection/MentorSection";
import characterImage from "../../../assets/character.png";
import EnrollInformation from "./Enroll/Enroll";
import FAQSection from "./FAQ/FAQ";

const POPPINS = "font-['Poppins',sans-serif]";

const mentor = {
  name: "Shubham Jain",
  image: characterImage,
  role: "EX-TECH LEAD AT GOOGLE & AMAZON",
  origin: "FROM A TIER-2 CITY (JALGAON)",
};

const CalendarIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <rect
      x="6"
      y="10"
      width="36"
      height="32"
      rx="5"
      fill="#F3F4F6"
      stroke="#CBD5E1"
    />
    <rect x="6" y="8" width="36" height="12" rx="4" fill="#E5383B" />
    <rect x="14" y="3" width="4" height="9" rx="2" fill="#B91C1C" />
    <rect x="30" y="3" width="4" height="9" rx="2" fill="#B91C1C" />
    {[0, 1, 2].map((r) =>
      [0, 1, 2, 3].map((c) => (
        <rect
          key={`${r}-${c}`}
          x={10.5 + c * 8}
          y={24 + r * 6}
          width="5.5"
          height="4"
          rx="1"
          fill="#1F2937"
        />
      )),
    )}
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle
      cx="24"
      cy="24"
      r="22"
      fill="none"
      stroke="#94A3B8"
      strokeDasharray="1 3"
    />
    <circle
      cx="24"
      cy="24"
      r="18"
      fill="#FFFFFF"
      stroke="#E5383B"
      strokeWidth="4"
    />
    <circle cx="24" cy="24" r="13" fill="#F8FAFC" />
    <line
      x1="24"
      y1="24"
      x2="24"
      y2="14"
      stroke="#1F2937"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="24"
      y1="24"
      x2="31"
      y2="28"
      stroke="#1F2937"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="24" r="2" fill="#E5383B" />
  </svg>
);

const PinIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <ellipse cx="24" cy="43" rx="9" ry="3" fill="#3B82F6" opacity="0.85" />
    <path
      d="M24 3C16.8 3 11 8.7 11 15.8c0 9.6 13 24.2 13 24.2s13-14.6 13-24.2C37 8.7 31.2 3 24 3z"
      fill="#E5383B"
    />
    <circle cx="24" cy="16" r="5.5" fill="#FFFFFF" />
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <ellipse cx="24" cy="44" rx="10" ry="2.5" fill="#1F2937" />
    <path
      d="M6 14a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H24l-8 6v-6h-2a8 8 0 0 1-8-8z"
      fill="#60A5FA"
    />
    <circle
      cx="24"
      cy="22"
      r="11"
      fill="#FFFFFF"
      stroke="#2563EB"
      strokeWidth="1.5"
    />
    <ellipse
      cx="24"
      cy="22"
      rx="5"
      ry="11"
      fill="none"
      stroke="#2563EB"
      strokeWidth="1.2"
    />
    <line x1="13" y1="22" x2="35" y2="22" stroke="#2563EB" strokeWidth="1.2" />
  </svg>
);

const SmallPin = () => (
  <svg viewBox="0 0 24 30" className="h-6 w-5" aria-hidden="true">
    <path
      d="M12 1C6.5 1 2 5.4 2 10.8 2 18 12 29 12 29s10-11 10-18.2C22 5.4 17.5 1 12 1z"
      fill="#F59E0B"
    />
    <circle cx="12" cy="11" r="4" fill="#FFFFFF" />
  </svg>
);

/* Wordmark stand-ins. Replace with the official logo images if the client has them. */
const GoogleWordmark = () => (
  <span
    className={`${POPPINS} text-[26px] font-medium leading-none tracking-tight`}
  >
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

const AmazonWordmark = () => (
  <span className="relative inline-block">
    <span
      className={`${POPPINS} text-[26px] font-bold leading-none tracking-tight text-[#111827]`}
    >
      amazon
    </span>
    <svg
      viewBox="0 0 80 12"
      className="absolute -bottom-2 left-2 w-[70px]"
      aria-hidden="true"
    >
      <path
        d="M2 2 Q40 14 74 3"
        fill="none"
        stroke="#FF9900"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M68 0 L77 3 L69 8"
        fill="none"
        stroke="#FF9900"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const glassCard =
  "border border-white bg-gradient-to-b from-white/95 to-blue-100/90 shadow-[0_10px_28px_rgba(59,130,246,0.22)] backdrop-blur";

const MentorCard = () => (
  /* Wrapper reserves the scaled height; inner canvas is a fixed 600x610 composition */
  <div className="relative mx-auto h-[336px] w-full sm:h-[488px] md:h-[610px] lg:h-[458px] xl:h-[610px]">
    <div
      className={`${POPPINS} absolute left-1/2 top-0 h-[610px] w-[600px] -translate-x-1/2 origin-top scale-[0.55] sm:scale-[0.8] md:scale-100 lg:scale-[0.75] xl:scale-100`}
    >
      {/* Blue glow disc */}
      <div
        className="absolute left-1/2 top-[70px] h-[580px] w-[580px] -translate-x-1/2 overflow-hidden rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, #ffffff 0%, #93c5fd 22%, #3b82f6 52%, #bfdbfe 82%, rgba(219,234,254,0) 100%)",
        }}
      >
        {/* sparkle dots */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.95) 1px, transparent 1.6px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      {/* Mentor photo */}
      <img
        src={mentor.image}
        alt={mentor.name}
        className="absolute left-1/2 top-0 z-10 h-[465px] w-auto -translate-x-1/2 object-contain object-bottom"
      />

      {/* Badge: experience */}
      <div
        className={`${glassCard} absolute left-0 top-[130px] z-20 flex h-[111px] w-[187px] flex-col items-center justify-center rounded-2xl text-center text-[#0F1D3A]`}
      >
        <p className="text-[24px] font-bold leading-none">
          10+ <span className="text-[20px]">YEARS</span>
        </p>
        <p className="mt-1.5 text-[15px] font-semibold leading-tight">
          OF INDUSTRY
        </p>
        <p className="text-[15px] font-semibold leading-tight">EXPERIENCE</p>
        <span className="absolute bottom-2.5 left-2.5">
          <SmallPin />
        </span>
      </div>

      {/* Badge: mentored */}
      <div
        className={`${glassCard} absolute right-0 top-[130px] z-20 flex h-[127px] w-[187px] flex-col items-center justify-center rounded-2xl text-center text-[#0F1D3A]`}
      >
        <p className="text-[18px] font-semibold leading-none">MENTORED</p>
        <p className="my-1 text-[38px] font-bold leading-none">500+</p>
        <p className="text-[18px] font-semibold leading-none">ENGINEERS</p>
      </div>

      {/* Name plate */}
      <div
        className={`${glassCard} absolute bottom-0 left-1/2 z-20 flex h-[172px] w-[458px] -translate-x-1/2 flex-col items-center rounded-[28px] px-4 pt-2 text-[#0F1D3A]`}
      >
        <h3 className="text-[28px] font-semibold leading-tight">
          {mentor.name}
        </h3>
        <p className="text-[17px] font-medium leading-tight">{mentor.role}</p>
        <div className="mt-0.5 flex items-center gap-3">
          <span className="h-px w-11 bg-slate-400/60" />
          <p className="text-[14px] font-medium leading-tight">
            {mentor.origin}
          </p>
          <span className="h-px w-11 bg-slate-400/60" />
        </div>

        <div className="mt-3 flex h-[52px] w-[378px] items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-inner">
          <GoogleWordmark />
          <span className="mx-10 h-8 w-px bg-slate-300" />
          <AmazonWordmark />
        </div>
      </div>
    </div>
  </div>
);

const DetailCard = ({ title, value, Icon }) => (
  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 md:gap-4 md:px-5 md:py-[18px]">
    <Icon className="h-8 w-8 shrink-0 md:h-11 md:w-11" />
    <div className="min-w-0">
      <p className="text-[15px] font-semibold leading-tight text-[#0F1D3A] md:text-xl xl:text-2xl">
        {title}
      </p>
      <p className="mt-0.5 text-[13px] leading-snug text-slate-700 md:text-base xl:text-xl">
        {value}
      </p>
    </div>
  </div>
);

const MasterclassDetails = ({ onEnroll }) => (
  <div className={`${POPPINS} mx-auto w-full max-w-[628px]`}>
    {/* Tab */}
    <div className="mx-auto w-[76%] rounded-t-2xl border border-b-0 border-blue-300/70 bg-[#E8F0FE] py-3 text-center md:py-[14px]">
      <h2 className="text-base font-bold uppercase tracking-tight text-[#1A73E8] sm:text-xl md:text-[26px]">
        Masterclass Details
      </h2>
    </div>

    {/* Panel */}
    <div className="rounded-2xl bg-[#E8F0FE] p-3">
      <div className="grid grid-cols-2 items-start gap-3">
        <div className="flex flex-col gap-3">
          <DetailCard
            title="Date"
            value={stringData.stats.date}
            Icon={CalendarIcon}
          />
          <DetailCard title="Duration" value="90 Minutes" Icon={PinIcon} />
        </div>
        <div className="flex flex-col gap-3">
          <DetailCard
            title="Time"
            value={stringData.stats.time}
            Icon={ClockIcon}
          />
          <DetailCard title="Language" value="English" Icon={GlobeIcon} />
        </div>
      </div>

      <button
        onClick={onEnroll}
        className="mx-auto mt-3 block w-[92%] rounded-xl border border-red-700/40 bg-[#FF0000] py-4 text-lg font-semibold uppercase text-white shadow-md transition-all duration-150 hover:bg-[#E60000] active:scale-[0.99] sm:w-[81%] md:py-6 md:text-2xl"
      >
        Enroll Now For ₹ 9
      </button>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Information = () => {
  const navigate = useNavigate();
  const goToForm = () => navigate("/studentform");

  return (
    <div className="min-h-screen bg-white font-sans antialiased pb-32 selection:bg-blue-500 selection:text-white">
      {/* 1. Top Bar Notice Section */}
      <section className="bg-[#1A73E8] py-3 text-center shadow-sm">
        <p className="px-4 text-xs font-semibold uppercase tracking-wider text-white sm:text-sm md:text-base">
          {stringData.header}
        </p>
      </section>

      {/* 2. Main Hero Context Section */}
      <section className="px-4 pt-10 pb-6 mx-auto max-w-6xl text-center md:pt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1E293B] sm:text-4xl md:text-5xl md:leading-[1.25] max-w-5xl mx-auto">
          {stringData.header_information.partOne}{" "}
          <span className="text-[#1A73E8]">
            {stringData.header_information.partTwo}
          </span>{" "}
          {stringData.header_information.partThree}
        </h1>

        <p className="mt-6 text-base font-normal leading-relaxed text-[#5A6E85] md:text-xl max-w-4xl mx-auto">
          Follow A Proven{" "}
          <span className="font-bold text-[#1A73E8]">
            4-Month Roadmap Covering DSA + System Design
          </span>{" "}
          — Built For Working Engineers Who Want An Offer Letter, Not Just A
          Certificate.
        </p>
      </section>

      {/* 3. Mentor card + Masterclass details */}
      <section className="mx-auto mt-8 max-w-7xl px-4 md:mt-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <MentorCard />
          <MasterclassDetails onEnroll={goToForm} />
        </div>
      </section>

      <section className="mt-5 py-6">
        <ListOut />
      </section>
      <section>
        <Learn />
      </section>
      <Eligiblity />
      <MentorSection />
      <EnrollInformation />
      <FAQSection />

      {/* 4. Sticky bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center rounded-t-3xl border-2 border-b-0 border-[#FF0000] bg-white px-4 pb-3 pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.06)]">
        <button
          onClick={goToForm}
          className={`${POPPINS} h-14 w-full max-w-[561px] rounded-xl bg-[#FF0000] text-lg font-semibold uppercase text-white shadow-lg shadow-rose-500/20 transition-all duration-150 hover:bg-[#FF9999] active:scale-[0.99] md:h-[72px] md:text-2xl`}
        >
          Enroll Now For ₹ 9
        </button>
      </div>
    </div>
  );
};

export default Information;
