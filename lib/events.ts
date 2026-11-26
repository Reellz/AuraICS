export type SchoolEvent = {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  summary: string;
  sample?: boolean;
  image?: string;
  video?: string;
};

/** Replace these. They are placeholders, not published AICS events. */
export const EVENTS: SchoolEvent[] = [
  {
    id: "project_showcase",
    title: "Project Showcase",
    date: "2026-12-30",
    time: "09:00 a.m.",
    location: "Aura International Christian School, Najjera, Uganda",
    summary:
      "Students will be showcasing projects that are derived from the skills training they have been receiving. Parents are requested to attend and support their children",
    sample: false,
    video: "../global/events/pro-show.mp4"

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
