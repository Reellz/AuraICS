export type SchoolEvent = {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  summary: string;
  sample?: boolean;
};

/** Replace these. They are placeholders, not published AICS events. */
export const EVENTS: SchoolEvent[] = [
  {
    id: "sample-gathering",
    title: "Community gathering",
    date: "2026-12-05",
    time: "09:00",
    location: "Aura International Christian School, Najjera, Uganda",
    summary: "Sample listing. Replace this paragraph with what will actually happen, who it is for, and how families should prepare.",
    sample: true,
  },
  {
    id: "sample-devotion",
    title: "Morning devotion",
    date: "2026-12-12",
    time: "08:00",
    location: "Aura International Christian School, Najjera, Uganda",
    summary: "Sample listing. Replace with the real description.",
    sample: true,
  },
  {
    id: "sample-learning",
    title: "Learning showcase",
    date: "2026-12-18",
    location: "Aura International Christian School, Najjera, Uganda",
    summary: "Sample listing. Replace with the real description.",
    sample: true,
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}