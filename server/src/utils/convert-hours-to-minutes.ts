export function convertHoursToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesFromHours = (hours * 60) + minutes;

  return minutesFromHours;
}