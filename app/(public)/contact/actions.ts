"use server";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
};

export async function submitContact(payload: ContactPayload) {
  const formId = process.env.FORM_SPREE_CODE;
  if (!formId) {
    return { ok: false as const, error: "The contact form is not configured." };
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      subject: payload.subject,
      category: payload.category,
      message: payload.message,
      _subject: payload.subject,
    }),
  });

  if (!response.ok) {
    return { ok: false as const, error: "The message could not be sent. Please try again." };
  }

  return { ok: true as const };
}