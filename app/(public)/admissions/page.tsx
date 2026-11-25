"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const PROGRAMMES = [
  {
    title: "Early Childhood Development",
    text: "A nurturing early learning environment for families beginning their child's school journey.",
  },
  {
    title: "Daycare",
    text: "A caring setting for younger children, supporting families who need a trusted place during the day.",
  },
  {
    title: "ACE Curriculum",
    text: "An individualised, mastery-based programme for learners aged 4–18+, organised into stages.",
    stages: ["Preschool", "Primary", "Secondary", "A-Level"],
  },
  {
    title: "Homeschooling Support",
    text: "Academic guidance and a Christian foundation for families educating at home.",
  },
];

const STEPS = [
  {
    title: "Explore AICS",
    text: "Learn about our educational philosophy, programmes, and values.",
  },
  {
    title: "Submit an application",
    text: "Complete the enquiry form with learner and parent information.",
  },
  {
    title: "Admissions review",
    text: "The school reviews what you have shared and follows up with the parent or guardian.",
  },
  {
    title: "Further guidance",
    text: "The admissions team communicates the next steps and any additional requirements.",
  },
  {
    title: "Begin the journey",
    text: "Families who proceed receive further enrolment guidance from the school.",
  },
];

const WHY = [
  {
    title: "Christ-centred education",
    text: "Faith is part of how students learn, not a subject set aside from the rest of school life.",
  },
  {
    title: "Individualised learning",
    text: "Students progress with guidance matched to their level, pace, and needs.",
  },
  {
    title: "Academic development",
    text: "Mastery comes before advancement, so learning rests on a solid foundation.",
  },
  {
    title: "Spiritual formation",
    text: "Discipleship and character sit alongside academic work.",
  },
  {
    title: "Character",
    text: "Godliness, integrity, diligence, and humility shape how students learn and live.",
  },
  {
    title: "A nurturing community",
    text: "Parents, teachers, and students work together in a homely environment.",
  },
];

const FAQS = [
  {
    q: "What programmes does AICS offer?",
    a: "Early Childhood Development, daycare, the ACE curriculum (Preschool, Primary, Secondary, and A-Level), and homeschooling support.",
  },
  {
    q: "What age groups does the school accommodate?",
    a: "The ACE curriculum is offered for learners aged 4–18+. For Early Childhood Development and daycare, contact the school for the current arrangement.",
  },
  {
    q: "What is the ACE curriculum?",
    a: "Accelerated Christian Education is an individualised, mastery-based programme that integrates Christian values with academic learning. Students move forward as they master each concept.",
  },
  {
    q: "Does AICS support homeschooling?",
    a: "Yes. Families educating at home can enquire about structured academic guidance and a Christian educational foundation.",
  },
  {
    q: "How do I begin the admissions process?",
    a: "Complete the application form on this page. The school will review your enquiry and contact you about next steps. This form is an enquiry, not a confirmed place.",
  },
  {
    q: "How can I contact the admissions team?",
    a: "Email info@auraics.com or call +256 751 420 955.",
  },
];

const PROGRAMME_OPTIONS = [
  "Early Childhood Development",
  "Daycare",
  "ACE — Preschool",
  "ACE — Primary",
  "ACE — Secondary",
  "ACE — A-Level",
  "Homeschooling Support",
  "Not sure yet",
];

type FormData = {
  parentName: string;
  email: string;
  phone: string;
  relationship: string;
  learnerName: string;
  dob: string;
  gender: string;
  programme: string;
  currentSchool: string;
  message: string;
  contactMethod: string;
  privacy: boolean;
};

const EMPTY: FormData = {
  parentName: "",
  email: "",
  phone: "",
  relationship: "",
  learnerName: "",
  dob: "",
  gender: "",
  programme: "",
  currentSchool: "",
  message: "",
  contactMethod: "Email",
  privacy: false,
};

const STEP_LABELS = ["Parent", "Learner", "Details", "Review"];

export default function AdmissionsPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(current: number) {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (current === 0) {
      if (!form.parentName.trim())
        next.parentName = "Enter the parent or guardian’s full name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        next.email = "Enter a valid email address.";
      if (form.phone.trim().length < 7)
        next.phone = "Enter a phone number we can reach you on.";
      if (!form.relationship.trim())
        next.relationship = "Tell us your relationship to the learner.";
    }
    if (current === 1) {
      if (!form.learnerName.trim())
        next.learnerName = "Enter the learner’s full name.";
      if (!form.dob) next.dob = "Enter the learner’s date of birth.";
      if (!form.programme) next.programme = "Choose a programme of interest.";
    }
    if (current === 2) {
      if (!form.contactMethod)
        next.contactMethod = "Choose how we should contact you.";
    }
    if (current === 3) {
      if (!form.privacy)
        next.privacy = "Please acknowledge how this enquiry will be used.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function nextStep() {
    if (validate(step)) setStep((s) => Math.min(s + 1, 3));
  }

  function submit() {
    if (!validate(3)) return;
    setSubmitted(true);
  }

  return (
    <main className="bg-brand-cream">
      {/* A. Hero */}
      <section className="relative min-h-[480px] sm:min-h-[560px]">
        <Image
          src="/global/home/hero1.jpg"
          alt="A learner at Aura International Christian School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-green-900/55" />
        <div className="relative z-10 flex min-h-[480px] items-end px-6 py-16 sm:min-h-[560px] sm:px-10 lg:px-16">
          <div className="max-w-2xl text-white">
            <p className="ui-label text-sm text-brand-orange">Admissions</p>
            <h1 className="font-brand-header mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Your child’s journey to growing and glowing starts here.
            </h1>
            <p className="body-text mt-4 max-w-lg text-lg leading-relaxed text-white/90">
              Choosing a school is a serious decision. AICS is a place where
              children can grow academically, spiritually, and socially.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#application"
                className="inline-flex items-center rounded-lg bg-brand-orange px-6 py-3.5 font-lato text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
              >
                Begin Your Application
              </a>
              <Link
                href={ROUTES.academics}
                className="inline-flex items-center rounded-lg border border-white/50 px-6 py-3.5 font-lato text-base font-bold text-white transition hover:border-brand-gold hover:bg-brand-gold hover:text-brand-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                Explore Our Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* B. Welcome */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src="/global/home/hero2.jpg"
              alt="Students learning together at AICS"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="ui-label text-sm text-brand-orange">Welcome</p>
            <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
              Families who want more than a classroom
            </h2>
            <div className="body-text mt-6 space-y-4 text-base leading-relaxed text-brand-green-900/80 sm:text-lg">
              <p>
                AICS welcomes families who value a holistic, Christ-centred
                education and want to develop their children’s academic ability,
                character, and spiritual foundation.
              </p>
              <p>
                Learning here is individualised and supported. Parents and
                educators work as partners, so each child is known and guided
                rather than processed through a single pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. Who can apply */}
      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="ui-label text-sm text-brand-orange">
                Who can apply
              </p>
              <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
                Enrolment pathways
              </h2>
            </div>
            <p className="body-text max-w-sm text-sm leading-relaxed text-brand-green-900/70 sm:text-base">
              Choose the pathway that fits your family. The ACE programme is for
              learners aged 4–18+.
            </p>
          </div>
          <div className="mt-12 border-t border-brand-green-900/10">
            {PROGRAMMES.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 border-b border-brand-green-900/10 py-8 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-1">
                  <span className="font-brand-header text-2xl text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-branding-header2 text-2xl text-brand-green-900 sm:col-span-4">
                  {item.title}
                </h3>
                <div className="sm:col-span-7">
                  <p className="body-text text-sm leading-relaxed text-brand-green-900/80 sm:text-base">
                    {item.text}
                  </p>
                  {item.stages && (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {item.stages.map((stage) => (
                        <span
                          key={stage}
                          className="text-xs font-semibold uppercase tracking-wider text-brand-orange"
                        >
                          {stage}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* D. Process */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="ui-label text-sm text-brand-orange">
            A proposed journey
          </p>
          <h2 className="font-brand-header mt-3 max-w-xl text-3xl text-brand-green-900 sm:text-4xl">
            How an enquiry moves forward
          </h2>
          <p className="body-text mt-4 max-w-2xl text-sm leading-relaxed text-brand-green-900/70 sm:text-base">
            This is the path we use to guide families. It is not a published fee
            schedule, deadline, or guarantee of a place.
          </p>
          <ol className="mt-12 border-t border-brand-green-900/10">
            {STEPS.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-brand-green-900/10 py-6 sm:grid-cols-12 sm:gap-8"
              >
                <span className="font-brand-header text-2xl text-brand-orange sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-lato text-lg font-semibold text-brand-green-900 sm:col-span-4">
                  {item.title}
                </h3>
                <p className="body-text text-sm leading-relaxed text-brand-green-900/75 sm:col-span-7 sm:text-base">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* E. Form */}
      <section
        id="application"
        className="scroll-mt-20 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="ui-label text-sm text-brand-orange">Application</p>
          <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
            Begin your application
          </h2>
          <p className="body-text mt-4 text-sm leading-relaxed text-brand-green-900/70 sm:text-base">
            This form records your enquiry on this device so you can review it.
            Submitting it here does not send it to the school. Email{" "}
            <a
              className="text-brand-orange underline-offset-2 hover:underline"
              href="mailto:info@auraics.com"
            >
              info@auraics.com
            </a>{" "}
            or call to start the official process.
          </p>

          {submitted ? (
            <div className="mt-10 border-t border-brand-green-900/10 pt-10">
              <p className="ui-label text-sm text-brand-orange">
                Ready to send
              </p>
              <h3 className="font-brand-header mt-3 text-2xl text-brand-green-900">
                Your details are prepared
              </h3>
              <p className="body-text mt-4 text-brand-green-900/80">
                Thank you, {form.parentName.split(" ")[0]}. To place this
                enquiry with AuraICS, email info@auraics.com or call +256 751
                420 955 and share the details you reviewed.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                  setForm(EMPTY);
                }}
                className="mt-8 font-lato text-sm font-semibold text-brand-orange underline-offset-4 hover:underline"
              >
                Start another enquiry
              </button>
            </div>
          ) : (
            <form
              className="mt-10"
              onSubmit={(event) => {
                event.preventDefault();
                if (step < 3) nextStep();
                else submit();
              }}
              noValidate
            >
              <ol className="flex gap-4 border-b border-brand-green-900/10 pb-4">
                {STEP_LABELS.map((label, index) => (
                  <li key={label}>
                    <button
                      type="button"
                      disabled={index > step}
                      onClick={() => {
                        if (index < step) setStep(index);
                      }}
                      className={`text-left text-xs font-semibold uppercase tracking-wider disabled:cursor-default ${
                        index === step
                          ? "text-brand-orange"
                          : index < step
                            ? "text-brand-green-900"
                            : "text-brand-green-900/35"
                      }`}
                    >
                      0{index + 1} {label}
                    </button>
                  </li>
                ))}
              </ol>

              <div className="mt-8 space-y-5">
                {step === 0 && (
                  <>
                    <Field label="Full name" error={errors.parentName}>
                      <input
                        className={inputClass}
                        value={form.parentName}
                        onChange={(e) => update("parentName", e.target.value)}
                        autoComplete="name"
                      />
                    </Field>
                    <Field label="Email address" error={errors.email}>
                      <input
                        type="email"
                        className={inputClass}
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        autoComplete="email"
                      />
                    </Field>
                    <Field label="Phone number" error={errors.phone}>
                      <input
                        type="tel"
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        autoComplete="tel"
                      />
                    </Field>
                    <Field
                      label="Relationship to learner"
                      error={errors.relationship}
                    >
                      <input
                        className={inputClass}
                        value={form.relationship}
                        onChange={(e) => update("relationship", e.target.value)}
                        placeholder="Parent, guardian…"
                      />
                    </Field>
                  </>
                )}

                {step === 1 && (
                  <>
                    <Field
                      label="Learner’s full name"
                      error={errors.learnerName}
                    >
                      <input
                        className={inputClass}
                        value={form.learnerName}
                        onChange={(e) => update("learnerName", e.target.value)}
                      />
                    </Field>
                    <Field label="Date of birth" error={errors.dob}>
                      <input
                        type="date"
                        className={inputClass}
                        value={form.dob}
                        onChange={(e) => update("dob", e.target.value)}
                      />
                    </Field>
                    <Field label="Gender (optional)">
                      <select
                        className={inputClass}
                        value={form.gender}
                        onChange={(e) => update("gender", e.target.value)}
                      >
                        <option value="">Prefer not to say</option>
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </Field>
                    <Field
                      label="Programme of interest"
                      error={errors.programme}
                    >
                      <select
                        className={inputClass}
                        value={form.programme}
                        onChange={(e) => update("programme", e.target.value)}
                      >
                        <option value="">Select a programme</option>
                        {PROGRAMME_OPTIONS.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Current school (optional)">
                      <input
                        className={inputClass}
                        value={form.currentSchool}
                        onChange={(e) =>
                          update("currentSchool", e.target.value)
                        }
                      />
                    </Field>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Field label="Anything else we should know?">
                      <textarea
                        rows={5}
                        className={inputClass}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                      />
                    </Field>
                    <Field
                      label="Preferred contact method"
                      error={errors.contactMethod}
                    >
                      <div className="flex gap-6">
                        {["Email", "Phone"].map((method) => (
                          <label
                            key={method}
                            className="flex items-center gap-2 text-sm text-brand-green-900"
                          >
                            <input
                              type="radio"
                              name="contactMethod"
                              checked={form.contactMethod === method}
                              onChange={() => update("contactMethod", method)}
                            />
                            {method}
                          </label>
                        ))}
                      </div>
                    </Field>
                  </>
                )}

                {step === 3 && (
                  <>
                    <dl className="divide-y divide-brand-green-900/10 border-y border-brand-green-900/10 text-sm">
                      {(
                        [
                          ["Parent or guardian", form.parentName],
                          ["Email", form.email],
                          ["Phone", form.phone],
                          ["Relationship", form.relationship],
                          ["Learner", form.learnerName],
                          ["Date of birth", form.dob],
                          ["Gender", form.gender || "Not given"],
                          ["Programme", form.programme],
                          ["Current school", form.currentSchool || "Not given"],
                          ["Contact by", form.contactMethod],
                          ["Message", form.message || "None"],
                        ] as const
                      ).map(([label, value]) => (
                        <div
                          key={label}
                          className="grid gap-1 py-3 sm:grid-cols-3"
                        >
                          <dt className="text-brand-green-900/60">{label}</dt>
                          <dd className="text-brand-green-900 sm:col-span-2">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <label className="flex items-start gap-3 text-sm text-brand-green-900">
                      <input
                        type="checkbox"
                        className="mt-1"
                        checked={form.privacy}
                        onChange={(e) => update("privacy", e.target.checked)}
                      />
                      <span>
                        I understand this enquiry stays in my browser until I
                        contact the school, and that AICS will use the details I
                        share only to respond about admissions.
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="text-sm text-brand-orange">
                        {errors.privacy}
                      </p>
                    )}
                  </>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="font-lato text-sm font-semibold text-brand-green-900 disabled:opacity-30"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-brand-orange px-6 py-3 font-lato text-sm font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900"
                >
                  {step === 3 ? "Finish review" : "Continue"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* F. Why */}
      <section className="bg-brand-primary px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="ui-label text-sm text-brand-orange">Why AICS</p>
            <h2 className="font-brand-header mt-3 text-3xl sm:text-4xl">
              What families are choosing
            </h2>
          </div>
          <ol className="lg:col-span-8">
            {WHY.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-white/15 py-5 first:border-t-0 first:pt-0"
              >
                <span className="font-brand-header text-lg text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-lato text-base font-semibold sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="body-text mt-1 text-sm leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* G. FAQ */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="ui-label text-sm text-brand-orange">Questions</p>
          <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
            Before you enquire
          </h2>
          <div className="mt-8 border-t border-brand-green-900/10">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group border-b border-brand-green-900/10 py-4"
              >
                <summary className="cursor-pointer list-none font-lato text-base font-semibold text-brand-green-900 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span
                      className="text-brand-orange group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="body-text mt-3 text-sm leading-relaxed text-brand-green-900/75">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* H. Contact */}
      <section className="border-t border-brand-green-900/10 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="ui-label text-sm text-brand-orange">
              Contact admissions
            </p>
            <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900 sm:text-4xl">
              Speak with the school
            </h2>
            <p className="body-text mt-4 max-w-md text-brand-green-900/80">
              If you would rather talk before filling in a form, write or call.
              We are glad to answer questions about programmes and next steps.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <a
              href="mailto:info@auraics.com"
              className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-6 py-3.5 font-lato text-sm font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900"
            >
              info@auraics.com
            </a>
            <a
              href="tel:+256751420955"
              className="inline-flex items-center justify-center rounded-lg border border-brand-green-900/20 px-6 py-3.5 font-lato text-sm font-bold text-brand-green-900 transition hover:border-brand-orange hover:text-brand-orange"
            >
              +256 751 420 955
            </a>
          </div>
        </div>
      </section>

      {/* I. Close */}
      <section className="bg-brand-primary px-6 py-16 text-center text-white sm:px-10 lg:py-24">
        <h2 className="font-brand-header mx-auto max-w-3xl text-3xl sm:text-4xl">
          Give your child a foundation for a purposeful future.
        </h2>
        <p className="body-text mx-auto mt-4 max-w-md text-white/75">
          Admissions is the start of a journey towards academic growth,
          spiritual formation, and a life of purpose.
        </p>
        <a
          href="#application"
          className="mt-8 inline-flex items-center rounded-lg bg-brand-orange px-6 py-3.5 font-lato text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900"
        >
          Start Your Application
        </a>
      </section>
    </main>
  );
}

const inputClass =
  "w-full border-b border-brand-green-900/20 bg-transparent py-2 font-lato text-base text-brand-green-900 outline-none focus:border-brand-orange";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-green-900/60">
        {label}
      </span>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-1 text-sm text-brand-orange">{error}</p>}
    </label>
  );
}
