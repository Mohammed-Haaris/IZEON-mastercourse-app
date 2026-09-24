/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Lock, Shield, Star, Zap } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const SERIF = "font-['Playfair_Display',serif]";
const SANS = "font-['Inter',sans-serif]";
const BUTTON_FONT = "font-['Poppins',sans-serif]";

const inputClass =
  "w-full h-12 px-4 bg-slate-50 border border-slate-400 rounded-md text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition";

const labelClass = "block text-[17px] text-slate-900 mb-2";

/* The library styles itself through CSS variables, so we match our inputs here */
const phoneTheme = {
  "--react-international-phone-height": "48px",
  "--react-international-phone-border-radius": "6px",
  "--react-international-phone-border-color": "#94a3b8",
  "--react-international-phone-background-color": "#f8fafc",
  "--react-international-phone-text-color": "#0f172a",
  "--react-international-phone-font-size": "16px",
  "--react-international-phone-country-selector-background-color": "#f8fafc",
  "--react-international-phone-country-selector-background-color-hover":
    "#f1f5f9",
  width: "100%",
};

/* Simplified stand-in. Replace with the official Razorpay logo asset. */
const RazorpayLogo = () => (
  <div className="flex items-center justify-center gap-2">
    <svg viewBox="0 0 26 30" className="h-9 w-auto" aria-hidden="true">
      <polygon points="9,0 26,0 17,14 0,14" fill="#3395FF" />
      <polygon points="9,14 17,14 8,30 0,30" fill="#072654" />
    </svg>
    <span className="italic font-extrabold text-[#072654] text-[34px] tracking-tight leading-none">
      Razorpay
    </span>
  </div>
);

const StudentForm = () => {
  const [formData, setFormData] = useState({
    studentname: "",
    email: "",
    number: "",
    jobrole: "",
    experience: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className={`min-h-screen flex flex-col text-white ${SANS} bg-gradient-to-br from-[#0a0f1f] to-[#17223f]`}
    >
      {/* Banner: promo text only */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 py-4 px-4">
        <p className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-white text-center">
          <Zap className="w-4 h-4 shrink-0 fill-amber-400 text-amber-400" />
          <span>LIMITED TIME: Enrollment closes soon — Save ₹900 Today</span>
          <Zap className="w-4 h-4 shrink-0 fill-amber-400 text-amber-400" />
        </p>
      </div>

      <div className="w-full max-w-[1430px] mx-auto px-6 pt-4 flex-grow">
        {/* Subtle back link; delete this block if you don't need it */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>

        <main className="mt-4 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* LEFT: hero */}
          <section>
            <h1
              className={`${SERIF} text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.12] tracking-tight`}
            >
              Land A Job At Top Tech Companies Like{" "}
              <span className="text-[#FF0000]">Google & Amazon</span> And Unlock{" "}
              <span className="text-[#FF0000]">2x–5x Salary</span> Growth
            </h1>

            <p className="mt-8 max-w-[650px] text-lg md:text-xl leading-9 text-slate-200">
              Master DSA, System Design, Resume Building & Interview Readiness —
              and go from stuck to shortlisted in just 4 months. Join thousands
              of IT professionals already on the path to MAANG.
            </p>

            <div className="mt-14 flex items-center gap-4">
              <span className="text-[28px] text-slate-400 line-through">
                ₹99
              </span>
              <span
                className={`${SERIF} text-6xl font-bold text-[#f4c542] leading-none`}
              >
                ₹9
              </span>
              <span className="rounded-full bg-green-500 px-4 py-1.5 text-base font-bold uppercase text-white">
                Save ₹90
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[17px] text-slate-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span>4.9 out of 5 (12,400+ reviews)</span>
            </div>
          </section>

          {/* RIGHT: form card */}
          <section className="w-full rounded-[28px] bg-white p-6 sm:p-9 text-slate-800 shadow-2xl">
            <header className="border-b border-slate-200 pb-7 text-center">
              <h2 className={`${SERIF} text-3xl font-bold text-slate-900`}>
                Complete Your Enrollment
              </h2>
              <p className="mt-3 text-[17px] text-slate-700">
                Fill in your details below to get instant access
              </p>
            </header>

            <form onSubmit={handleSubmit} className="mt-9 space-y-5 sm:px-3">
              <input
                type="text"
                name="studentname"
                aria-label="First Name"
                value={formData.studentname}
                onChange={handleChange}
                placeholder="First Name"
                className={inputClass}
                required
              />

              <input
                type="email"
                name="email"
                aria-label="Email ID"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className={inputClass}
                required
              />

              {/* Phone: flag selector + input share one bordered box */}
              <PhoneInput
                defaultCountry="in"
                value={formData.number}
                onChange={(phone) =>
                  setFormData((prev) => ({ ...prev, number: phone }))
                }
                style={phoneTheme}
                inputProps={{
                  name: "number",
                  required: true,
                  "aria-label": "Phone Number",
                }}
              />

              <div>
                <label htmlFor="jobrole" className={labelClass}>
                  IT Job Role
                </label>
                <input
                  id="jobrole"
                  type="text"
                  name="jobrole"
                  value={formData.jobrole}
                  onChange={handleChange}
                  placeholder="IT Job Role"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="experience" className={labelClass}>
                  Years Of Experience
                </label>
                <input
                  id="experience"
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Years Of Experience"
                  className={inputClass}
                  required
                />
              </div>

              {/* Order summary */}
              <div className="pt-1">
                <div className="mb-3 flex justify-between text-xl font-semibold text-slate-500">
                  <span>Item</span>
                  <span>Price</span>
                </div>

                <div className="space-y-5">
                  <label className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-100 px-5 py-4 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="pricing"
                        defaultChecked
                        className="w-6 h-6 accent-black"
                      />
                      <div>
                        <p className="text-[17px] font-medium text-slate-900">
                          One Time Fee Pricing
                        </p>
                        <p className="text-sm text-slate-600">
                          One-time payment
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p>
                        <span className="mr-1 text-sm text-slate-600">INR</span>
                        <span className="text-xl font-semibold text-slate-900">
                          9
                        </span>
                      </p>
                      <p className="text-xs text-slate-500">one-time</p>
                    </div>
                  </label>

                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-4">
                    <span className="text-base text-slate-500">
                      Social Continent Paid Webinar
                    </span>
                    <span className="text-[15px] font-semibold text-slate-900">
                      INR 9
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-6">
                    <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Total
                    </span>
                    <span>
                      <span className="mr-1.5 text-base text-slate-500">
                        INR
                      </span>
                      <span className="text-3xl font-semibold text-slate-900">
                        9.00
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment method */}
              <div className="pt-1">
                <p className="mb-2 text-xl font-semibold text-slate-500">
                  Pay via
                </p>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="w-5 h-5 accent-amber-500"
                  />
                  <span className="text-[17px] text-slate-900">Razorpay</span>
                </label>

                {/* fieldset + legend gives the "text sitting on the border" look */}
                <fieldset className="mt-6 rounded-md border border-blue-500 px-4 pb-6 pt-2 text-center">
                  <legend className="mx-auto px-3 text-sm text-blue-500">
                    Completing payment with
                  </legend>
                  <RazorpayLogo />
                </fieldset>
              </div>

              <button
                type="submit"
                className={`${BUTTON_FONT} flex h-[58px] w-full items-center justify-center gap-3 rounded bg-[#28a745] text-2xl font-semibold text-white transition hover:bg-[#218838] active:scale-[0.99]`}
              >
                <span>Complete Order</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                  <ArrowRight
                    className="h-4 w-4 text-[#28a745]"
                    strokeWidth={3}
                  />
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-5 text-base text-slate-500">
                <Shield className="h-4 w-4 text-green-500" />
                <span>
                  Your information is protected with 256-bit SSL encryption
                </span>
              </div>
            </form>
          </section>
        </main>
      </div>

      <footer className="bg-[#0b1226] py-5 text-center text-base text-[#5f7399]">
        All Rights Reserved
      </footer>
    </div>
  );
};

export default StudentForm;
