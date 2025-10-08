export function convertAESTToLocal(day: string, timeAEST: string): string {
  // AEST timezone (no daylight saving offset)
  const AEST_OFFSET = 10 * 60; // UTC+10 in minutes

  // Parse day and time
  const [hours, minutes] = timeAEST.split(":").map(Number);

  // Create a reference date for this week's show
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const dayIndex = daysOfWeek.indexOf(day);

  // Get the date for the next occurrence of that day
  const diff = (dayIndex - today.getDay() + 7) % 7;
  const showDateAEST = new Date(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate() + diff,
      hours - AEST_OFFSET / 60,
      minutes
    )
  );

  // Convert to user local time
  const localDate = new Date(showDateAEST);

  const formatter = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(localDate);
}
