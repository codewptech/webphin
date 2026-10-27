const publicationDate = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export function formatInsightDate(iso: string): string {
  return publicationDate.format(new Date(iso));
}
