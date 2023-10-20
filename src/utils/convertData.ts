export default function formatDateToDmyUTC(utcDateString: any) {
  try {
    const date = new Date(utcDateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // JavaScript months are 0-indexed
    const year = date.getUTCFullYear();

    // Pad single-digit day and month with leading zeros
    const formattedDay = day.toString().padStart(2, "0");
    const formattedMonth = month.toString().padStart(2, "0");

    return `${formattedDay}-${formattedMonth}-${year}`;
  } catch {
    return false;
  }
}
