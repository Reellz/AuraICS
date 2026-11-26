"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { submitContact } from "./actions";

const CATEGORIES = [
  "Academics",
  "Academic programmes",
  "General enquiries",
  "Parent support",
  "Other",
];

const FAQS = [
  {
    q: "How can I enrol my child?",
    a: "Start on the Admissions page or email info@auraics.com. The school reviews your enquiry and tells you the next step. An enquiry is not a confirmed place.",
  },
  {
    q: "What programmes does AICS offer?",
    a: "Early Childhood Development, daycare, the ACE curriculum for learners aged 4–18+ (Preschool, Primary, Secondary, and A-Level), and homeschooling support.",
  },
  {
    q: "How can I contact the admissions team?",
    a: "Email info@auraics.com or call +256 751 420 955.",
  },
  {
    q: "Where is AICS located?",
    a: "Aura International Christian School is in Najjera, Uganda.",
  },
  {
    q: "How can I learn more about school activities?",
    a: "Write or call the school. Day-to-day activities are best confirmed directly.",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Aura+International+Christian+School+Najjera+Uganda";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  category: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "sending" | "ready" | "error">(
    "idle",
  );

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Add a short subject.";
    if (!form.category) next.category = "Choose a category.";
    if (form.message.trim().length < 10)
      next.message = "Write a message of at least a few words.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const result = await submitContact(form);

    if (!result.ok) {
      setStatus("error");
      return;
    }

    setForm(EMPTY);
    setStatus("ready");
  }

  return (
    <main className="bg-brand-cream">
      <section className="bg-[#ADEBB3]/30 px-6 pb-4 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="ui-label text-sm text-brand-orange">Contact us</p>
          <h1 className="font-brand-header mt-3 max-w-3xl text-4xl leading-tight text-brand-green-900 sm:text-5xl lg:text-6xl">
            We&apos;d love to hear from you.
          </h1>
          <p className="body-text mt-5 max-w-2xl text-lg leading-relaxed text-brand-green-900/80">
            Whether you&apos;re exploring educational opportunities for your
            child, seeking more information about our programmes, or simply want
            to connect with our community, we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="ui-label text-sm text-brand-orange">Campus</p>
            <h2 className="font-brand-header mt-3 text-3xl text-brand-green-900">
              Najjera
            </h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-green-900/50">
                  Address
                </dt>
                <dd className="mt-1 font-lato text-base text-brand-green-900">
                  Aura International Christian School
                  <br />
                  Najjera, Uganda
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-green-900/50">
                  Call
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+256751420955"
                    className="font-lato text-base text-brand-green-900 hover:text-brand-orange"
                  >
                    +256 751 420 955
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-green-900/50">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:infoaics25@gmail.com"
                    className="font-lato text-base text-brand-green-900 hover:text-brand-orange"
                  >
                    infoaics25@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-green-900/50">
                  Location
                </dt>
                <dd className="mt-1 min-w-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.907449211147!2d32.6030639871582!3d0.38794740000001726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db1005e6c46c5%3A0x9726f02f65d4e8b9!2sAura%20International%20Christian%20School!5e0!3m2!1sen!2sug!4v1795378664562!5m2!1sen!2sug"
                    title="Aura International Christian School location"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-64 w-full rounded-2xl border-0 sm:h-80 lg:h-[420px]"
                  />
                </dd>
              </div>
            </dl>
          </div>

          <div
            id="contact-form"
            className="scroll-mt-24 min-w-0 bg-white p-5 sm:p-10 lg:col-span-7"
          >
            <h2 className="font-brand-header text-3xl text-brand-green-900">
              Get in touch
            </h2>
            <p className="body-text mt-3 text-sm leading-relaxed text-brand-green-900/70">
              Send us a message. You will receive a response in 1-3 business
              days.
            </p>

            <form className="mt-8 space-y-5" onSubmit={submit} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full name" error={errors.name}>
                  <input
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    autoComplete="email"
                  />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone (optional)">
                  <input
                    type="tel"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Category" error={errors.category}>
                  <select
                    className={inputClass}
                    value={form.category}
                    onChange={(e) => update("category", e.target.value)}
                  >
                    <option value="">Select one</option>
                    {CATEGORIES.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label="Subject" error={errors.subject}>
                <input
                  className={inputClass}
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                />
              </Field>
              <Field label="Message" error={errors.message}>
                <textarea
                  rows={5}
                  className={inputClass}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                />
              </Field>
              {status === "ready" && (
                <p className="text-sm text-brand-green-900" role="status">
                  Your message has been sent. The school will reply within 1–3
                  business days.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-brand-orange" role="alert">
                  The message could not be sent. Email infoaics25@gmail.com or
                  call +256 751 420 955.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center rounded-lg bg-brand-orange px-6 py-3.5 font-lato text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-green-900/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-brand-header text-3xl text-brand-green-900">
            Questions
          </h2>
          <div className="mt-6 border-t border-brand-green-900/10">
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

      <section className="bg-brand-primary px-6 py-16 text-center text-white sm:px-10 lg:py-20">
        <h2 className="font-brand-header text-3xl sm:text-4xl">
          Let&apos;s begin a conversation.
        </h2>
        <p className="body-text mx-auto mt-4 max-w-md text-white/75">
          If you are ready to talk about a place for your child, start with
          admissions.
        </p>
        <Link
          href={ROUTES.academics}
          className="mt-8 inline-flex items-center rounded-lg bg-brand-orange px-6 py-3.5 font-lato text-base font-bold text-white transition hover:bg-brand-gold hover:text-brand-green-900"
        >
          Explore Academics
        </Link>
      </section>
    </main>
  );
}

const inputClass =
  "w-full border-b border-brand-green-900/20 bg-transparent py-2 font-lato text-base text-brand-green-900 outline-none placeholder:text-brand-green-900/30 focus:border-brand-orange";

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
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-green-900/55">
        {label}
      </span>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-1 text-sm text-brand-orange">{error}</p>}
    </label>
  );
}
