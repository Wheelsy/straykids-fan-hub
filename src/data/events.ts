export type EventItem = {
  date: string; // ISO date
  title: string;
  location?: string;
  link?: string;
};

export const events: EventItem[] = [
  {
    date: "2025-09-01",
    title: "Comeback window (rumored)",
    link: "https://www.google.com/search?q=stray+kids+comeback",
  },
  {
    date: "2025-10-15",
    title: "Fan meeting — Seoul",
    location: "Jamsil",
    link: "#",
  },
  { date: "2025-11-20", title: "Award Show Appearance (TBD)", link: "#" },
];
