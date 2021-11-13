export function calculateTimeBetweenDates(
  startDate: Date,
  endDate: Date
): number {
  return endDate.getTime() - startDate.getTime();
}
